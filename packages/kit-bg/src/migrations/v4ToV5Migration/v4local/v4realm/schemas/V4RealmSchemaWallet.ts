import { EV4LocalDBStoreNames } from '../../v4localDBStoreNames';
import { V4RealmObjectBase } from '../base/V4RealmObjectBase';

import type { IV4DBWallet, IV4DBWalletType } from '../../v4localDBTypes';
import type Realm from 'realm';

class V4RealmSchemaWallet extends V4RealmObjectBase<IV4DBWallet> {
  public id!: string;

  public name!: string;

  public avatar?: string;

  public type!: IV4DBWalletType;

  public backuped?: boolean;

  public accounts?: string[];

  public nextIndex!: number;

  public walletNo!: number;

  public nextAccountIds?: Realm.Dictionary<number>;

  public associatedDevice?: string;

  public isTemp?: boolean;

  public passphraseState?: string;

  public xfp?: string;

  public airGapAccountsInfoRaw?: string;

  public static override schema: Realm.ObjectSchema = {
    name: EV4LocalDBStoreNames.Wallet,
    primaryKey: 'id',
    properties: {
      id: 'string',
      name: 'string',
      avatar: 'string?',
      type: 'string',
      backuped: { type: 'bool', default: false },
      accounts: 'string?[]',
      nextIndex: { type: 'int', default: 0 },
      walletNo: 'int',
      nextAccountIds: {
        type: 'dictionary',
        default: {},
        objectType: 'int',
      },
      associatedDevice: 'string?',
      isTemp: { type: 'bool', default: false },
      passphraseState: 'string?',
      xfp: 'string?',
      airGapAccountsInfoRaw: 'string?',
    },
  };

  get record(): IV4DBWallet {
    return {
      id: this.id,
      name: this.name,
      avatar: this.avatar,
      type: this.type,
      backuped: this.backuped || false,
      // convert RealmDB list to array
      accounts: Array.from(this.accounts || []),
      nextIndex: this.nextIndex,
      walletNo: this.walletNo,
      nextAccountIds: Object.fromEntries(
        Object.entries(Object(this.nextAccountIds)),
      ),
      associatedDevice: this.associatedDevice,
      isTemp: this.isTemp,
      passphraseState: this.passphraseState,
      xfp: this.xfp,
      airGapAccountsInfoRaw: this.airGapAccountsInfoRaw,
    };
  }
}

export { V4RealmSchemaWallet };
