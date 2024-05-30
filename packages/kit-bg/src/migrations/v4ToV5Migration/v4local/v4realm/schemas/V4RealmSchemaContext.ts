// eslint-disable-next-line max-classes-per-file

import { EV4LocalDBStoreNames } from '../../v4localDBStoreNames';
import { V4RealmObjectBase } from '../base/V4RealmObjectBase';

import type { IV4DBContext } from '../../v4localDBTypes';
import type Realm from 'realm';

class RealmSchemaContext extends V4RealmObjectBase<IV4DBContext> {
  public id!: string;

  public nextHD!: number;

  public nextWalletNo!: number;

  public verifyString!: string;

  public networkOrderChanged?: boolean;

  public backupUUID!: string;

  public nextSignatureMessageId!: number;

  public nextSignatureTransactionId!: number;

  public nextConnectedSiteId!: number;

  public static override schema: Realm.ObjectSchema = {
    name: EV4LocalDBStoreNames.Context,
    primaryKey: 'id',
    properties: {
      id: 'string',
      nextHD: 'int',
      nextWalletNo: 'int',
      verifyString: 'string',
      networkOrderChanged: { type: 'bool', default: false },
      backupUUID: { type: 'string', default: '' },
      nextSignatureMessageId: { type: 'int', default: 1 },
      nextSignatureTransactionId: { type: 'int', default: 1 },
      nextConnectedSiteId: { type: 'int', default: 1 },
    },
  };

  get record(): IV4DBContext {
    return {
      id: this.id,
      nextHD: this.nextHD,
      nextWalletNo: this.nextWalletNo,
      verifyString: this.verifyString,
      networkOrderChanged: this.networkOrderChanged || false,
      backupUUID: this.backupUUID,
      nextSignatureMessageId: this.nextSignatureMessageId,
      nextSignatureTransactionId: this.nextSignatureTransactionId,
      nextConnectedSiteId: this.nextConnectedSiteId,
    };
  }
}
export { RealmSchemaContext as V4RealmSchemaContext };
