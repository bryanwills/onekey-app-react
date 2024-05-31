import platformEnv from '@onekeyhq/shared/src/platformEnv';
import { ensureRunOnBackground } from '@onekeyhq/shared/src/utils/assertUtils';

import v4localDbInstance from './v4local/v4localDbInstance';
import { EV4LocalDBStoreNames } from './v4local/v4localDBStoreNames';
import { V4ReduxDb } from './v4redux/V4ReduxDb';
import { V4SimpleDb } from './v4simple/V4SimpleDb';

import type { V4LocalDbBase } from './v4local/V4LocalDbBase';
import type { V4LocalDbRealm } from './v4local/v4realm/V4LocalDbRealm';

ensureRunOnBackground();

if (process.env.NODE_ENV !== 'production') {
  global.$$localDbV4 = v4localDbInstance;
}

export class V4ToV5MigrationController {
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
}
