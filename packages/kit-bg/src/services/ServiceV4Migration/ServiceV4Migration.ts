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
import deviceUtils from '@onekeyhq/shared/src/utils/deviceUtils';
import networkUtils from '@onekeyhq/shared/src/utils/networkUtils';
import { EReasonForNeedPassword } from '@onekeyhq/shared/types/setting';

import { EDBAccountType } from '../../dbs/local/consts';
import localDb from '../../dbs/local/localDb';
import { v4CoinTypeToNetworkId } from '../../migrations/v4ToV5Migration/v4CoinTypeToNetworkId';
import v4localDbInstance from '../../migrations/v4ToV5Migration/v4local/v4localDbInstance';
import { EV4LocalDBStoreNames } from '../../migrations/v4ToV5Migration/v4local/v4localDBStoreNames';
import { V4ReduxDb } from '../../migrations/v4ToV5Migration/v4redux/V4ReduxDb';
import { V4SimpleDb } from '../../migrations/v4ToV5Migration/v4simple/V4SimpleDb';
import ServiceBase from '../ServiceBase';

import type {
  IDBAccount,
  IDBDevice,
  IDBUtxoAccount,
  IDBWallet,
} from '../../dbs/local/types';
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
  IV4DBDevice,
  IV4DBHdCredentialRaw,
  IV4DBImportedCredentialRaw,
  IV4DBUtxoAccount,
  IV4DBWallet,
} from '../../migrations/v4ToV5Migration/v4local/v4localDBTypes';
import type { V4LocalDbRealm } from '../../migrations/v4ToV5Migration/v4local/v4realm/V4LocalDbRealm';
import type {
  IAccountDeriveInfo,
  IAccountDeriveTypes,
} from '../../vaults/types';

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
        isHw: accountUtils.isHwWallet({ walletId: v4wallet.id }),
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

  // TODO clear migrationPayload when exit migration or focus home page
  migrationPayload: IV4MigrationPayload | undefined;

  @backgroundMethod()
  async prepareMigration(): Promise<IV4MigrationPayload> {
    this.migrationPayload = undefined;
    let migratePasswordOk = false;
    try {
      // TODO if v4 not set password, should not prompt password
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
      if (wallet.isHw) {
        await this.migrateHwWallet({ v4wallet: wallet.wallet });
      }
      if (wallet.isHD) {
        await this.migrateHdWallet({ v4wallet: wallet.wallet });
      }
      if (wallet.isImported) {
        await this.migrateImportedAccounts({ v4wallet: wallet.wallet });
      }
      if (wallet.isWatching) {
        await this.migrateWatchingAccounts({ v4wallet: wallet.wallet });
      }
    }

    this.migrationPayload = undefined;
    // TODO skip backup within flow
    void this.backgroundApi.serviceCloudBackup.requestAutoBackup();
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
        const { deriveType: deriveTypeInTpl } =
          await serviceNetwork.getDeriveTypeByTemplate({
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
        const { deriveType } = await serviceNetwork.getDeriveTypeByTemplate({
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

  async migrateHwWallet({ v4wallet }: { v4wallet: IV4DBWallet }) {
    const { serviceAccount, servicePassword, serviceNetwork } =
      this.backgroundApi;
    let v4device: IV4DBDevice | undefined;
    if (v4wallet.associatedDevice) {
      v4device = await this.v4localDb.getRecordById({
        name: EV4LocalDBStoreNames.Device,
        id: v4wallet.associatedDevice,
      });
    }
    if (v4device) {
      const v5device: IDBDevice = {
        ...v4device, // TODO deviceName is wrong in v4 if update hidden wallet name
        connectId: v4device.mac,
        settingsRaw: '', // TODO convert v4 payloadJson to v5 settingsRaw
      };
      await localDb.addDbDevice({
        device: v5device,
        skipIfExists: true,
      });
      const v5dbDevice = await localDb.getDevice(v5device.id);
      let v5wallet: IDBWallet | undefined;
      if (v5dbDevice) {
        if (v4wallet.passphraseState) {
          ({ wallet: v5wallet } = await serviceAccount.createHWWalletBase({
            name: v4wallet.name,
            device: deviceUtils.dbDeviceToSearchDevice(v5dbDevice),
            features: v5dbDevice.featuresInfo || ({} as any),
            passphraseState: v4wallet.passphraseState,
          }));
        } else {
          ({ wallet: v5wallet } = await serviceAccount.createHWWalletBase({
            name: v4wallet.name,
            features: JSON.parse(v4device.features || '{}') || {},
            device: v5dbDevice,
            isFirmwareVerified: false, // TODO v4 isFirmwareVerified
          }));
        }

        const v4accounts: IV4DBAccount[] = await this.getV4AccountsOfWallet({
          v4wallet,
        });
        for (const v4account of v4accounts) {
          if (v5wallet) {
            const prepareResult = await this.prepareAddHdOrHwAccounts({
              v4account,
              v5wallet,
            });
            if (prepareResult) {
              const {
                networkId,
                networkImpl,
                indexedAccountId,
                index,
                deriveType,
                deriveInfo,
              } = prepareResult;
              const accountId = accountUtils.buildHDAccountId({
                walletId: v5wallet.id,
                path: v4account.path,
                idSuffix: deriveInfo?.idSuffix,
              });
              const addressRelPath = accountUtils.buildUtxoAddressRelPath();
              const v5account: IDBAccount = {
                address: v4account.address,
                addresses: {},
                coinType: v4account.coinType,
                id: accountId,
                impl: networkImpl,
                indexedAccountId,
                name: v4account.name,
                path: v4account.path,
                pathIndex: index,
                pub: v4account.pub || '',
                relPath: addressRelPath,
                template: v4account.template,
                type: v4account.type as any,
              };
              if (v5account.type === EDBAccountType.VARIANT) {
                v5account.address = '';
              }
              const v5accountUtxo = v5account as IDBUtxoAccount;
              const v4accountUtxo = v4account as IV4DBUtxoAccount;
              v5accountUtxo.xpub = v4accountUtxo.xpub;
              v5accountUtxo.xpubSegwit = v4accountUtxo.xpubSegwit;
              await localDb.addAccountsToWallet({
                walletId: v5wallet.id,
                accounts: [v5account],
              });
            }
          }
        }
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
      const prepareResult = await this.prepareAddHdOrHwAccounts({
        v4account,
        v5wallet,
      });
      if (prepareResult) {
        const { networkId, index, deriveType } = prepareResult;
        // TODO add addressMap to DB
        await serviceAccount.addHDOrHWAccounts({
          walletId: v5wallet.id,
          networkId,
          indexes: [index],
          indexedAccountId: undefined,
          deriveType,
        });
      }
    }
    // TODO get deriveType and networkId by coinType
  }

  prepareAddHdOrHwAccounts({
    v4account,
    v5wallet,
  }: {
    v4account: IV4DBAccount;
    v5wallet: IDBWallet;
  }) {
    const { serviceAccount, servicePassword, serviceNetwork } =
      this.backgroundApi;
    return new Promise<
      | {
          index: number;
          networkId: string;
          networkImpl: string;
          deriveType: IAccountDeriveTypes;
          coinType: string;
          deriveInfo: IAccountDeriveInfo | undefined;
          indexedAccountId: string;
        }
      | undefined
      // eslint-disable-next-line no-async-promise-executor
    >(async (resolve, reject) => {
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
            const { deriveType, deriveInfo } =
              await serviceNetwork.getDeriveTypeByTemplate({
                networkId,
                template: v4account.template,
              });
            const networkImpl = networkUtils.getNetworkImpl({ networkId });
            const indexedAccountId = accountUtils.buildIndexedAccountId({
              walletId: v5wallet.id,
              index,
            });
            return resolve({
              index,
              networkId,
              networkImpl,
              deriveType,
              deriveInfo,
              coinType,
              indexedAccountId,
            });
          }
        }
      }
      return resolve(undefined);
    });
  }
}

export default ServiceV4Migration;
