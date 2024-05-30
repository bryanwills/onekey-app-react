import { EV4DBAccountType } from '../../../v4types';
import { EV4LocalDBStoreNames } from '../../v4localDBStoreNames';
import { V4RealmObjectBase } from '../base/V4RealmObjectBase';

import type {
  IV4DBAccount,
  IV4DBExternalAccount,
  IV4DBUtxoAccount,
  IV4DBVariantAccount,
} from '../../v4localDBTypes';
import type Realm from 'realm';

class V4RealmSchemaAccount extends V4RealmObjectBase<IV4DBAccount> {
  public id!: string;

  public name!: string;

  public type!: EV4DBAccountType;

  public path?: string;

  public pathIndex?: number;

  public relPath?: string;

  public indexedAccountId?: string;

  public coinType!: string;

  public impl!: string;

  public networks?: string[];

  public createAtNetwork?: string;

  public pub?: string;

  public xpub?: string;

  public xpubSegwit?: string;

  public address?: string;

  public addresses?: Realm.Dictionary<string>;

  public customAddresses?: Realm.Dictionary<string>;

  public connectedAddresses?: Realm.Dictionary<string>;

  public selectedAddress?: Realm.Dictionary<number>;

  public template?: string;

  public connectionInfoRaw?: string;

  public static override schema: Realm.ObjectSchema = {
    name: EV4LocalDBStoreNames.Account,
    primaryKey: 'id',
    properties: {
      id: 'string',
      name: 'string',
      type: 'string',
      path: 'string?',
      pathIndex: 'int?',
      relPath: 'string?',
      indexedAccountId: 'string?',
      coinType: 'string',
      impl: 'string',
      networks: 'string?[]',
      createAtNetwork: 'string?',
      pub: 'string?',
      xpub: 'string?',
      xpubSegwit: 'string?',
      address: 'string?',
      addresses: { type: 'dictionary', default: {}, objectType: 'string' },
      customAddresses: {
        type: 'dictionary',
        default: {},
        objectType: 'string',
      },
      connectedAddresses: {
        type: 'dictionary',
        default: {},
        objectType: 'string',
      },
      selectedAddress: {
        type: 'dictionary',
        default: {},
        objectType: 'int',
      },
      connectionInfoRaw: 'string?',
      template: 'string?',
    },
  };

  get record(): IV4DBAccount {
    const ret: IV4DBAccount = {
      id: this.id,
      name: this.name,
      type: this.type,
      path: this.path || '',
      pathIndex: this.pathIndex,
      relPath: this.relPath,
      indexedAccountId: this.indexedAccountId,
      coinType: this.coinType,
      address: this.address || '',
      template: this.template || '',
      pub: '',
      impl: this.impl,
      networks: Array.from(this.networks || []),
      createAtNetwork: this.createAtNetwork,
    };
    if (this.type === EV4DBAccountType.SIMPLE) {
      ret.pub = this.pub || '';
    }
    if (this.type === EV4DBAccountType.VARIANT) {
      (ret as IV4DBVariantAccount).pub = this.pub || '';
      (ret as IV4DBVariantAccount).addresses =
        (this.addresses?.toJSON() as any) || {};
    }
    if (this.type === EV4DBAccountType.UTXO) {
      (ret as IV4DBUtxoAccount).pub = this.pub || '';
      (ret as IV4DBUtxoAccount).xpub = this.xpub || '';
      (ret as IV4DBUtxoAccount).xpubSegwit = this.xpubSegwit || '';
      (ret as IV4DBUtxoAccount).addresses =
        (this.addresses?.toJSON() as any) || {};
      (ret as IV4DBUtxoAccount).customAddresses =
        (this.customAddresses?.toJSON() as any) || {};
    }

    if (this.connectedAddresses) {
      (ret as IV4DBExternalAccount).connectedAddresses =
        (this.connectedAddresses.toJSON() as any) || {};
    }
    if (this.selectedAddress) {
      (ret as IV4DBExternalAccount).selectedAddress =
        (this.selectedAddress.toJSON() as any) || {};
    }
    if (this.connectionInfoRaw) {
      (ret as IV4DBExternalAccount).connectionInfoRaw = this.connectionInfoRaw;
    }

    return ret;
  }
}
export { V4RealmSchemaAccount };
