import { EV4LocalDBStoreNames } from '../../v4localDBStoreNames';

import { V4RealmSchemaAccount } from './V4RealmSchemaAccount';
import { V4RealmSchemaAccountDerivation } from './V4RealmSchemaAccountDerivation';
import { V4RealmSchemaContext } from './V4RealmSchemaContext';
import { V4RealmSchemaCredential } from './V4RealmSchemaCredential';
import { V4RealmSchemaDevice } from './V4RealmSchemaDevice';
import { V4RealmSchemaWallet } from './V4RealmSchemaWallet';

import type { V4RealmObjectBase } from '../base/V4RealmObjectBase';

export const v4realmDBSchemasMap: Record<
  EV4LocalDBStoreNames,
  typeof V4RealmObjectBase<any>
> = {
  [EV4LocalDBStoreNames.Account]: V4RealmSchemaAccount,
  [EV4LocalDBStoreNames.Wallet]: V4RealmSchemaWallet,
  [EV4LocalDBStoreNames.Device]: V4RealmSchemaDevice,
  [EV4LocalDBStoreNames.Context]: V4RealmSchemaContext,
  [EV4LocalDBStoreNames.Credential]: V4RealmSchemaCredential,
  [EV4LocalDBStoreNames.AccountDerivation]: V4RealmSchemaAccountDerivation,
};
export const v4realmDBSchemas = Object.values(v4realmDBSchemasMap);
