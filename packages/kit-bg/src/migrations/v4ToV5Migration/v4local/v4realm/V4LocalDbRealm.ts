// eslint-disable-next-line max-classes-per-file
import Realm from 'realm';

import {
  DB_MAIN_CONTEXT_ID,
  DEFAULT_VERIFY_STRING,
  WALLET_TYPE_EXTERNAL,
  WALLET_TYPE_IMPORTED,
  WALLET_TYPE_WATCHING,
} from '@onekeyhq/shared/src/consts/dbConsts';
import {
  EAppEventBusNames,
  appEventBus,
} from '@onekeyhq/shared/src/eventBus/appEventBus';
import { generateUUID } from '@onekeyhq/shared/src/utils/miscUtils';

import { V4LocalDbBase } from '../V4LocalDbBase';
import { V4_REALM_DB_NAME, V4_REALM_DB_VERSION } from '../v4localDBConsts';
import { EV4LocalDBStoreNames } from '../v4localDBStoreNames';

import { v4realmDBSchemas } from './schemas';
import { V4RealmDBAgent } from './V4RealmDBAgent';

import type { IDBWalletIdSingleton } from '../v4localDBTypes';

export class V4LocalDbRealm extends V4LocalDbBase {
  protected override readyDb: Promise<V4RealmDBAgent>;

  constructor() {
    super();
    this.readyDb = this._openDb();
  }

  reset(): Promise<void> {
    return this.deleteDb();
  }

  // ---------------------------------------------- private methods
  private async _openDb() {
    const realm = await Realm.open({
      path: V4_REALM_DB_NAME,
      schemaVersion: V4_REALM_DB_VERSION,
      schema: v4realmDBSchemas as any,
      onMigration: (oldRealm: Realm, newRealm: Realm) => {
        const oldVersion = oldRealm.schemaVersion;
        const newVersion = newRealm.schemaVersion;
        console.log(oldVersion, newVersion);
        // do nothing here, add migration logic on service layer
      },
    });
    if (process.env.NODE_ENV !== 'production') {
      global.$$realm = realm;
      setTimeout(() => {
        appEventBus.emit(EAppEventBusNames.RealmInit, undefined);
      }, 3000);
    }
    const db = new V4RealmDBAgent(realm);
    // init db records here
    await this._initDBRecords(db);
    return db;
  }

  private async _initDBRecords(db: V4RealmDBAgent) {
    await db.withTransaction(async () => {
      await Promise.all([
        db._getOrAddObjectRecord(EV4LocalDBStoreNames.Context, {
          id: DB_MAIN_CONTEXT_ID,
          nextHD: 1,
          nextWalletNo: 1,
          verifyString: DEFAULT_VERIFY_STRING,
          backupUUID: generateUUID(),
          nextSignatureMessageId: 1,
          nextSignatureTransactionId: 1,
          nextConnectedSiteId: 1,
        }),
        this._addSingletonWalletRecord({
          db,
          walletId: WALLET_TYPE_IMPORTED,
        }),
        this._addSingletonWalletRecord({
          db,
          walletId: WALLET_TYPE_WATCHING,
        }),
        this._addSingletonWalletRecord({
          db,
          walletId: WALLET_TYPE_EXTERNAL,
        }),
      ]);
    });
  }

  private _addSingletonWalletRecord({
    db,
    walletId,
  }: {
    db: V4RealmDBAgent;
    walletId: IDBWalletIdSingleton;
  }) {
    db._getOrAddObjectRecord(
      EV4LocalDBStoreNames.Wallet,
      this.buildSingletonWalletRecord({ walletId }),
    );
  }

  deleteDb() {
    try {
      Realm.deleteFile({ path: V4_REALM_DB_NAME });
      return Promise.resolve();
    } catch (error: any) {
      console.error(error);
      return Promise.reject(error);
    }
  }
}
