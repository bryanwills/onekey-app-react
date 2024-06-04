/* eslint-disable @typescript-eslint/no-restricted-imports */
import { isNil, uniq } from 'lodash';
import natsort from 'natsort';

import { decrypt, revealEntropyToMnemonic } from '@onekeyhq/core/src/secret';
import {
  backgroundClass,
  backgroundMethod,
} from '@onekeyhq/shared/src/background/backgroundDecorators';
import {
  DB_MAIN_CONTEXT_ID,
  WALLET_TYPE_HD,
} from '@onekeyhq/shared/src/consts/dbConsts';
import platformEnv from '@onekeyhq/shared/src/platformEnv';
import accountUtils from '@onekeyhq/shared/src/utils/accountUtils';
import bufferUtils from '@onekeyhq/shared/src/utils/bufferUtils';
import { EReasonForNeedPassword } from '@onekeyhq/shared/types/setting';

import localDb from '../../dbs/local/localDb';
import { v4CoinTypeToNetworkId } from '../../migrations/v4ToV5Migration/v4CoinTypeToNetworkId';
import v4localDbInstance from '../../migrations/v4ToV5Migration/v4local/v4localDbInstance';
import { EV4LocalDBStoreNames } from '../../migrations/v4ToV5Migration/v4local/v4localDBStoreNames';
import { V4ReduxDb } from '../../migrations/v4ToV5Migration/v4redux/V4ReduxDb';
import { V4SimpleDb } from '../../migrations/v4ToV5Migration/v4simple/V4SimpleDb';
import ServiceBase from '../ServiceBase';

import type {
  IV4MigrationHdCredential,
  IV4MigrationImportedCredential,
  IV4MigrationPayload,
  IV4MigrationWallet,
} from '../../migrations/v4ToV5Migration/types';
import type { V4LocalDbBase } from '../../migrations/v4ToV5Migration/v4local/V4LocalDbBase';
import type {
  IV4DBAccount,
  IV4DBCredentialBase,
  IV4DBHdCredentialRaw,
  IV4DBImportedCredentialRaw,
  IV4DBUtxoAccount,
  IV4DBWallet,
} from '../../migrations/v4ToV5Migration/v4local/v4localDBTypes';
import type { V4LocalDbRealm } from '../../migrations/v4ToV5Migration/v4local/v4realm/V4LocalDbRealm';
import type { IAccountDeriveTypes } from '../../vaults/types';

@backgroundClass()
class ServiceV4Migration extends ServiceBase {
  constructor({ backgroundApi }: { backgroundApi: any }) {
    super({ backgroundApi });
  }

  _v4simpleDb: V4SimpleDb | undefined;

  get v4simpleDb() {
    if (!this._v4simpleDb) {
      this._v4simpleDb = new V4SimpleDb();
    }
    return this._v4simpleDb;
  }

  _v4reduxDb: V4ReduxDb | undefined;

  get v4reduxDb() {
    if (!this._v4reduxDb) {
      this._v4reduxDb = new V4ReduxDb();
    }
    return this._v4reduxDb;
  }

  _v4localDb: V4LocalDbBase | undefined;

  get v4localDb() {
    if (!this._v4localDb) {
      this._v4localDb = v4localDbInstance;
    }
    return this._v4localDb;
  }

  @backgroundMethod()
  async testShowData() {
    const data = await this.v4reduxDb.reduxData;
    const simpleDbAccountHistory =
      await this.v4simpleDb.history.getAccountHistory({
        accountId: 'hd-1--1',
        networkId: 'evm--1',
      });
    const dbWallets = await this.v4localDb.getAllRecords({
      name: EV4LocalDBStoreNames.Wallet,
    });
    const dbAccounts = await this.v4localDb.getAllRecords({
      name: EV4LocalDBStoreNames.Account,
    });
    const allAccounts = dbAccounts.records;
    const dbWallet = dbWallets.records[0];
    const result = {
      simpleDbAccountHistory,
      reduxSettings: data?.settings,
      dbWallet,
      accounts: dbWallet.accounts,
      associatedDevice: dbWallet.associatedDevice,
      allAccounts: dbAccounts.records,
    };
    console.log('testV4MigrationData', result);
    console.log(
      'testV4MigrationData allAccounts ============',
      JSON.stringify(allAccounts, null, 2),
    );
    console.log(
      'testV4MigrationData wallet ============',
      JSON.stringify(dbWallets.records, null, 2),
    );
    if (platformEnv.isNative) {
      console.log({
        dbVersion: (await (global.$$localDbV4 as V4LocalDbRealm).readyDb)?.realm
          ?.schemaVersion,
        dbName: (await (global.$$localDbV4 as V4LocalDbRealm).readyDb)?.realm
          ?.path,
      });
    }
    return result;
  }

  async decryptV4ImportedCredential({
    v4dbCredential,
    encodedPassword,
  }: {
    v4dbCredential: IV4DBCredentialBase;
    encodedPassword: string;
  }): Promise<IV4MigrationImportedCredential> {
    const credentialText: string = v4dbCredential.credential;
    const credential = JSON.parse(credentialText);
    if (v4dbCredential.id.startsWith('imported-')) {
      const credentialImported = credential as IV4DBImportedCredentialRaw;
      const privateKey = bufferUtils.bytesToHex(
        decrypt(encodedPassword, credentialImported.privateKey),
      );
      const account = await this.v4localDb.getRecordById({
        name: EV4LocalDBStoreNames.Account,
        id: v4dbCredential.id,
      });
      return {
        privateKey,
        account,
        dbCredentialRaw: credentialImported,
      };
    }
    throw new Error(`Unsupported credential type: ${v4dbCredential.id}`);
  }

  async decryptV4HdCredential({
    v4dbCredential,
    encodedPassword,
  }: {
    v4dbCredential: IV4DBCredentialBase;
    encodedPassword: string;
  }): Promise<IV4MigrationHdCredential> {
    const credentialText: string = v4dbCredential.credential;
    const credential = JSON.parse(credentialText);
    if (v4dbCredential.id.startsWith('hd-')) {
      const credentialHD = credential as IV4DBHdCredentialRaw;
      // TODO fallback to v4 password prompt
      const entropy = decrypt(encodedPassword, credentialHD.entropy);
      const wallet = await this.v4localDb.getRecordById({
        name: EV4LocalDBStoreNames.Wallet,
        id: v4dbCredential.id,
      });
      const mnemonic = revealEntropyToMnemonic(entropy);

      return {
        mnemonic,
        wallet,
        dbCredentialRaw: credentialHD,
      };
    }
    throw new Error(`Unsupported credential type: ${v4dbCredential.id}`);
  }

  async getV4Credentials() {
    // const r = await this.v4localDb.getAllRecords({
    //   name: EV4LocalDBStoreNames.Credential,
    // });
    // const v4credentials = await Promise.all(
    //   r.records.map((item) =>
    //     this.decryptV4HdCredential({ v4dbCredential: item }),
    //   ),
    // );
    // return v4credentials;
    return [];
  }

  async getV4Wallets() {
    const v4WalletsResult = await this.v4localDb.getAllRecords({
      name: EV4LocalDBStoreNames.Wallet,
    });
    const v4wallets = v4WalletsResult.records;
    const result: IV4MigrationWallet[] = [];
    for (const v4wallet of v4wallets) {
      v4wallet.accounts = v4wallet.accounts || [];
      // const v4accounts: IV4DBAccount[] = [];
      // const r = await this.v4localDb.getAllRecords({
      //   name: EV4LocalDBStoreNames.Account,
      //   ids: v4wallet.accounts,
      // });
      // v4accounts = r?.records || [];

      result.push({
        wallet: v4wallet,
        isHD: accountUtils.isHdWallet({ walletId: v4wallet.id }),
        isImported: accountUtils.isImportedWallet({ walletId: v4wallet.id }),
        isWatching: accountUtils.isWatchingWallet({ walletId: v4wallet.id }),
        // accounts: v4accounts,
      });
    }
    return result;
  }

  async buildV4WalletsForBackup({
    v4wallets,
  }: {
    v4wallets: IV4MigrationWallet[];
  }) {
    const v4walletsForBackup = v4wallets
      .filter(
        (w) =>
          accountUtils.isHdWallet({ walletId: w.wallet.id }) ||
          (accountUtils.isImportedWallet({ walletId: w.wallet.id }) &&
            w.wallet.accounts.length > 0),
      )
      .sort((a, b) => {
        if (a.wallet.type === b.wallet.type) {
          return natsort({ insensitive: true })(a.wallet.id, b.wallet.id);
        }
        return a.wallet.type === WALLET_TYPE_HD ? -1 : 1;
      });
    return v4walletsForBackup;
  }

  async migrateV4PasswordToV5() {
    const isPasswordSet = await localDb.isPasswordSet();
    if (!isPasswordSet) {
      const v4result = await this.v4localDb.getAllRecords({
        name: EV4LocalDBStoreNames.Context,
      });
      const v4context = v4result.records.find(
        (r) => r.id === DB_MAIN_CONTEXT_ID,
      );
      if (v4context?.verifyString) {
        await localDb.updateContextVerifyString({
          verifyString: v4context.verifyString,
        });
      }
      // TODO migrate backupUUID?
      // v4context?.backupUUID;

      // TODO migrate settings.instanceId
      return true;
    }
    return false;
  }

  // ----------------------------------------------
  async checkShouldMigrateV4() {
    return true;
  }

  migrationPayload: IV4MigrationPayload | undefined;

  @backgroundMethod()
  async prepareMigration(): Promise<IV4MigrationPayload> {
    this.migrationPayload = undefined;
    let migratePasswordOk = false;
    try {
      migratePasswordOk = await this.migrateV4PasswordToV5();
    } catch (error) {
      //
    }
    const passwordRes =
      await this.backgroundApi.servicePassword.promptPasswordVerify({
        reason: EReasonForNeedPassword.Security,
      });
    const wallets = await this.getV4Wallets();
    const walletsForBackup = await this.buildV4WalletsForBackup({
      v4wallets: wallets,
    });
    this.migrationPayload = {
      password: passwordRes.password,
      v4password: '',
      migratePasswordOk,
      shouldBackup: walletsForBackup.length > 0,
      wallets,
      walletsForBackup,
    };
    return this.migrationPayload;
  }

  @backgroundMethod()
  async getV4WalletsForBackup() {
    return this.migrationPayload?.walletsForBackup;
  }

  async getMigrationPassword() {
    const pwd = this.migrationPayload?.password || '';
    if (!pwd) {
      throw new Error('Migration password not set');
    }
    return pwd;
  }

  async getV4AccountsOfWallet({ v4wallet }: { v4wallet: IV4DBWallet }) {
    const r = await this.v4localDb.getAllRecords({
      name: EV4LocalDBStoreNames.Account,
      ids: v4wallet.accounts,
    });
    const v4accounts: IV4DBAccount[] = r?.records || [];
    return v4accounts;
  }

  @backgroundMethod()
  async revealV4HdMnemonic({ hdWalletId }: { hdWalletId: string }) {
    const v4dbCredential: IV4DBCredentialBase =
      await this.v4localDb.getRecordById({
        name: EV4LocalDBStoreNames.Credential,
        id: hdWalletId,
      });
    return this.decryptV4HdCredential({
      v4dbCredential,
      encodedPassword: await this.getMigrationPassword(),
    });
  }

  async revealV4ImportedPrivateKey({ accountId }: { accountId: string }) {
    const v4dbCredential: IV4DBCredentialBase =
      await this.v4localDb.getRecordById({
        name: EV4LocalDBStoreNames.Credential,
        id: accountId,
      });
    return this.decryptV4ImportedCredential({
      v4dbCredential,
      encodedPassword: await this.getMigrationPassword(),
    });
  }

  @backgroundMethod()
  async startV4MigrationFlow() {
    const wallets = this.migrationPayload?.wallets || [];
    for (const wallet of wallets) {
      if (wallet.isImported) {
        await this.migrateImportedAccounts({ v4wallet: wallet.wallet });
      }
      if (wallet.isHD) {
        await this.migrateHdWallet({ v4wallet: wallet.wallet });
      }
      if (wallet.isWatching) {
        await this.migrateWatchingAccounts({ v4wallet: wallet.wallet });
      }
    }
    // await this.migrateHdWallet({})
  }

  async migrateWatchingAccounts({ v4wallet }: { v4wallet: IV4DBWallet }) {
    const { serviceAccount, servicePassword, serviceNetwork } =
      this.backgroundApi;
    const v4accounts = await this.getV4AccountsOfWallet({
      v4wallet,
    });
    for (const v4account of v4accounts) {
      const networkId = v4CoinTypeToNetworkId[v4account.coinType];
      if (networkId) {
        const deriveTypeInTpl = await serviceNetwork.getDeriveTypeByTemplate({
          networkId,
          template: v4account.template,
        });
        let deriveTypes: IAccountDeriveTypes[] = [deriveTypeInTpl];

        const v4accountUtxo = v4account as IV4DBUtxoAccount;
        const input =
          // v4accountUtxo?.xpubSegwit || // xpubSegwit import not support yet
          v4accountUtxo?.xpub || v4account?.pub || v4account?.address;

        const validateResult =
          await serviceAccount.validateGeneralInputOfImporting({
            networkId,
            input: await servicePassword.encodeSensitiveText({ text: input }),
            validateAddress: true,
            validateXpub: true,
          });
        if (validateResult?.deriveInfoItems?.length) {
          const availableDeriveTypes = (
            await serviceNetwork.getDeriveInfoItemsOfNetwork({
              networkId,
              enabledItems: validateResult.deriveInfoItems,
            })
          ).map((item) => item.value);
          deriveTypes = [
            ...deriveTypes,
            ...(availableDeriveTypes as IAccountDeriveTypes[]),
          ];
        }
        deriveTypes = uniq(deriveTypes);
        for (const deriveType of deriveTypes) {
          // TODO save error log if failed
          await serviceAccount.addWatchingAccount({
            input,
            name: v4account.name,
            networkId,
            deriveType,
            isUrlAccount: false,
            skipAddIfNotEqualToAddress: v4account.address,
          });
        }
      }
    }
  }

  async migrateImportedAccounts({ v4wallet }: { v4wallet: IV4DBWallet }) {
    const { serviceAccount, servicePassword, serviceNetwork } =
      this.backgroundApi;
    const v4ImportedAccounts = await this.getV4AccountsOfWallet({
      v4wallet,
    });
    for (const v4account of v4ImportedAccounts) {
      const credential = await this.revealV4ImportedPrivateKey({
        accountId: v4account.id,
      });
      const { privateKey: v4privateKey } = credential;
      const networkId = v4CoinTypeToNetworkId[v4account.coinType];
      if (networkId) {
        const deriveType = await serviceNetwork.getDeriveTypeByTemplate({
          networkId,
          template: v4account.template,
        });
        await serviceAccount.addImportedAccountWithCredential({
          name: v4account.name,
          credential: await servicePassword.encodeSensitiveText({
            text: v4privateKey,
          }),
          networkId,
          deriveType,
        });
      }
    }
  }

  async migrateHdWallet({ v4wallet }: { v4wallet: IV4DBWallet }) {
    const { serviceAccount, servicePassword, serviceNetwork } =
      this.backgroundApi;
    const { mnemonic } = await this.revealV4HdMnemonic({
      hdWalletId: v4wallet.id,
    });
    const { wallet: v5wallet } = await serviceAccount.createHDWallet({
      name: v4wallet.name,
      mnemonic: await servicePassword.encodeSensitiveText({
        text: mnemonic,
      }),
    });
    const v4accounts: IV4DBAccount[] = await this.getV4AccountsOfWallet({
      v4wallet,
    });

    // const indexes: Array<number | undefined> = v4accounts.map((a) =>
    //   ,
    // );
    // const indexesFixed = uniq(indexes).filter(
    //   (item) => !isNil(item),
    // ) as number[];

    for (const v4account of v4accounts) {
      const index = accountUtils.findIndexFromTemplate({
        template: v4account.template || '',
        path: v4account.path,
      });
      if (!isNil(index)) {
        await serviceAccount.addIndexedAccount({
          walletId: v5wallet.id,
          indexes: [index],
          skipIfExists: true,
        });
        const coinType = v4account.coinType;
        if (coinType) {
          const networkId = v4CoinTypeToNetworkId[coinType];
          if (networkId) {
            const deriveType = await serviceNetwork.getDeriveTypeByTemplate({
              networkId,
              template: v4account.template,
            });
            await serviceAccount.addHDOrHWAccounts({
              walletId: v5wallet.id,
              networkId,
              indexes: [index],
              indexedAccountId: undefined,
              deriveType,
            });
          }
        }
      }
    }
    // TODO get deriveType and networkId by coinType
  }
}

export default ServiceV4Migration;
