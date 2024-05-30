import type {
  WALLET_TYPE_EXTERNAL,
  WALLET_TYPE_HD,
  WALLET_TYPE_HW,
  WALLET_TYPE_IMPORTED,
  WALLET_TYPE_QR,
  WALLET_TYPE_WATCHING,
} from '@onekeyhq/shared/src/consts/dbConsts';

import type { EV4LocalDBStoreNames } from './v4localDBStoreNames';
import type { V4RealmSchemaAccount } from './v4realm/schemas/V4RealmSchemaAccount';
import type { V4RealmSchemaAccountDerivation } from './v4realm/schemas/V4RealmSchemaAccountDerivation';
import type { V4RealmSchemaContext } from './v4realm/schemas/V4RealmSchemaContext';
import type { V4RealmSchemaCredential } from './v4realm/schemas/V4RealmSchemaCredential';
import type { V4RealmSchemaDevice } from './v4realm/schemas/V4RealmSchemaDevice';
import type { V4RealmSchemaWallet } from './v4realm/schemas/V4RealmSchemaWallet';
import type { EV4DBAccountType } from '../v4types';
import type { IDeviceType } from '@onekeyfe/hd-core';
import type { DBSchema, IDBPObjectStore } from 'idb';

export type IV4DBWalletId =
  | string // hd-xxx, hw-xxx
  | typeof WALLET_TYPE_IMPORTED
  | typeof WALLET_TYPE_WATCHING
  | typeof WALLET_TYPE_EXTERNAL;

export type IV4DBWalletIdSingleton =
  | typeof WALLET_TYPE_IMPORTED
  | typeof WALLET_TYPE_WATCHING
  | typeof WALLET_TYPE_EXTERNAL;

type IV4DBBaseObject = {
  id: string;
};

type IV4DBBaseObjectWithName = IV4DBBaseObject & {
  name: string;
};

export type IV4DBAccountDerivation = IV4DBBaseObject & {
  walletId: string;
  accounts: string[];
  template: string;
};

export type IV4DBWalletType =
  | typeof WALLET_TYPE_HD
  | typeof WALLET_TYPE_HW
  | typeof WALLET_TYPE_QR
  | typeof WALLET_TYPE_IMPORTED
  | typeof WALLET_TYPE_WATCHING
  | typeof WALLET_TYPE_EXTERNAL;

export type IV4DBWallet = IV4DBBaseObjectWithName & {
  type: IV4DBWalletType;
  backuped: boolean;
  nextIndex: number; // TODO optional, merge with nextAccountIds
  // only for singleton wallet
  accounts: string[];
  // only for singleton wallet
  nextAccountIds: {
    // 'global': 1, // imported, external, watching,
    // purpose + cointype => index
    [template: string]: number; // hd
  };
  associatedDevice?: string; // alias to `dbDeviceId`
  avatar?: IV4DBAvatar;
  //   avatarInfo?: IAvatarInfo; // readonly field
  hiddenWallets?: IV4DBWallet[]; // readonly field
  isTemp?: boolean;
  passphraseState?: string;
  walletNo: number;
  walletOrder?: number;
  xfp?: string; // qr wallet only
  airGapAccountsInfoRaw?: string;
  //   airGapAccountsInfo?: IQrWalletAirGapAccountsInfo;
};

export type IV4DBContext = {
  id: string; // DB_MAIN_CONTEXT_ID
  nextHD: number;
  nextWalletNo: number;
  verifyString: string;
  networkOrderChanged?: boolean;
  backupUUID: string;
  nextSignatureMessageId: number;
  nextSignatureTransactionId: number;
  nextConnectedSiteId: number;
};

export type IV4DBDevice = IV4DBBaseObjectWithName & {
  features: string; // TODO rename to featuresRaw
  //   featuresInfo?: IOneKeyDeviceFeatures; // readonly field // TODO rename to features
  // TODO make index for better performance (getDeviceByQuery)
  connectId: string; // alias mac\sn, never changed even if device reset
  name: string;
  // TODO make index for better performance (getDeviceByQuery)
  uuid: string;
  deviceId: string; // features.device_id changed after device reset
  deviceType: IDeviceType;
  settingsRaw: string;
  //   settings?: IDBDeviceSettings;
  createdAt: number;
  updatedAt: number;
  verifiedAtVersion?: string;
};

export type IV4DBCredentialBase = {
  id: string;
  // type: 'imported' | 'hd';
  credential: string;
};

type IV4DBAvatar = string; // stringify(IAvatarInfo)
// IAvatar;
//  type IDBAvatar = {
//   emoji: string | 'img'; // lazy load EmojiTypes
//   bgColor: string;
// };
type IV4DBBaseAccount = IV4DBBaseObjectWithName & {
  type: EV4DBAccountType | undefined;
  path: string;
  coinType: string;
  template?: string;
};

export type IV4DBSimpleAccount = IV4DBBaseAccount & {
  pub: string;
  address: string;
};
export type IV4DBUtxoAccount = IV4DBBaseAccount & {
  pub?: string; // TODO rename pubKey to pub
  xpub: string;
  xpubSegwit?: string; // wrap regular xpub into bitcoind native descriptor
  address: string; // Display/selected address
  addresses: Record<string, string>;
  customAddresses?: Record<string, string>; // for btc dynamic custom address
};
export type IV4DBVariantAccount = IV4DBBaseAccount & {
  pub: string;
  address: string; // Base address
  // VARIANT: networkId -> address
  // UTXO: relPath -> address
  addresses: Record<string, string>;
};
export type IV4DBExternalAccount = IV4DBVariantAccount & {
  address: string; // always be empty if walletconnect account
};
export type IV4DBAccount =
  | IV4DBSimpleAccount
  | IV4DBUtxoAccount
  | IV4DBVariantAccount
  | IV4DBExternalAccount;

export interface IV4LocalDBSchemaMap {
  [EV4LocalDBStoreNames.Context]: IV4DBContext;
  [EV4LocalDBStoreNames.Credential]: IV4DBCredentialBase;
  [EV4LocalDBStoreNames.Wallet]: IV4DBWallet;
  [EV4LocalDBStoreNames.Account]: IV4DBAccount;
  [EV4LocalDBStoreNames.AccountDerivation]: IV4DBAccountDerivation;
  [EV4LocalDBStoreNames.Device]: IV4DBDevice;
}

export interface IV4RealmDBSchemaMap {
  [EV4LocalDBStoreNames.Context]: V4RealmSchemaContext;
  [EV4LocalDBStoreNames.Credential]: V4RealmSchemaCredential;
  [EV4LocalDBStoreNames.Wallet]: V4RealmSchemaWallet;
  [EV4LocalDBStoreNames.Account]: V4RealmSchemaAccount;
  [EV4LocalDBStoreNames.AccountDerivation]: V4RealmSchemaAccountDerivation;
  [EV4LocalDBStoreNames.Device]: V4RealmSchemaDevice;
}

export interface IV4IndexedDBSchemaMap extends DBSchema {
  [EV4LocalDBStoreNames.AccountDerivation]: {
    key: string;
    value: IV4DBAccountDerivation;
  };
  [EV4LocalDBStoreNames.Account]: {
    key: string;
    value: IV4DBAccount;
    // indexes: { date: Date; title: string };
  };
  [EV4LocalDBStoreNames.Context]: {
    key: string;
    value: IV4DBContext;
  };
  [EV4LocalDBStoreNames.Credential]: {
    key: string;
    value: IV4DBCredentialBase;
  };
  [EV4LocalDBStoreNames.Device]: {
    key: string;
    value: IV4DBDevice;
  };
  [EV4LocalDBStoreNames.Wallet]: {
    key: string;
    value: IV4DBWallet;
  };
}

export type IV4LocalDBTransactionStores = {
  [EV4LocalDBStoreNames.Context]: IDBPObjectStore<
    IV4IndexedDBSchemaMap,
    EV4LocalDBStoreNames.Context[],
    EV4LocalDBStoreNames.Context,
    'readwrite'
  >;
  [EV4LocalDBStoreNames.Credential]: IDBPObjectStore<
    IV4IndexedDBSchemaMap,
    EV4LocalDBStoreNames.Credential[],
    EV4LocalDBStoreNames.Credential,
    'readwrite'
  >;
  [EV4LocalDBStoreNames.Wallet]: IDBPObjectStore<
    IV4IndexedDBSchemaMap,
    EV4LocalDBStoreNames.Wallet[],
    EV4LocalDBStoreNames.Wallet,
    'readwrite'
  >;
  [EV4LocalDBStoreNames.Account]: IDBPObjectStore<
    IV4IndexedDBSchemaMap,
    EV4LocalDBStoreNames.Account[],
    EV4LocalDBStoreNames.Account,
    'readwrite'
  >;

  [EV4LocalDBStoreNames.AccountDerivation]: IDBPObjectStore<
    IV4IndexedDBSchemaMap,
    EV4LocalDBStoreNames.AccountDerivation[],
    EV4LocalDBStoreNames.AccountDerivation,
    'readwrite'
  >;
  [EV4LocalDBStoreNames.Device]: IDBPObjectStore<
    IV4IndexedDBSchemaMap,
    EV4LocalDBStoreNames.Device[],
    EV4LocalDBStoreNames.Device,
    'readwrite'
  >;
};
export interface IV4LocalDBTransaction {
  stores?: IV4LocalDBTransactionStores;
}
export type IV4LocalDBWithTransactionTask<T> = (
  tx: IV4LocalDBTransaction,
) => Promise<T>;
export type IV4LocalDBWithTransactionOptions = {
  readOnly?: boolean;
};

// GetRecordsCount
export interface IV4LocalDBGetRecordsCountParams<
  T extends EV4LocalDBStoreNames,
> {
  name: T;
}
export interface IV4LocalDBTxGetRecordsCountParams<
  T extends EV4LocalDBStoreNames,
> {
  tx: IV4LocalDBTransaction;
  name: T;
}
export interface IV4LocalDBGetRecordsCountResult {
  count: number;
}

export type IV4LocalDBRecord<T extends EV4LocalDBStoreNames> =
  IV4LocalDBSchemaMap[T];

export type IV4LocalDBRecordPair<T extends EV4LocalDBStoreNames> = [
  IV4LocalDBRecord<T>,
  IV4RealmDBSchemaMap[T] | null,
];

// GetRecordById
export interface IV4LocalDBTxGetRecordByIdParams<
  T extends EV4LocalDBStoreNames,
> {
  tx: IV4LocalDBTransaction;
  name: T;
  id: string;
}
export type IV4LocalDBTxGetRecordByIdResult<T extends EV4LocalDBStoreNames> =
  IV4LocalDBRecordPair<T>;

export interface IV4LocalDBGetRecordByIdParams<T extends EV4LocalDBStoreNames> {
  name: T;
  id: string;
}
export type IV4LocalDBGetRecordByIdResult<T extends EV4LocalDBStoreNames> =
  IV4LocalDBRecord<T>;

// GetRecords
export type IV4LocalDBGetRecordsQuery = {
  ids?: string[];
  limit?: number;
  offset?: number;
};
export type IV4LocalDBTxGetAllRecordsParams<T extends EV4LocalDBStoreNames> = {
  tx: IV4LocalDBTransaction;
  name: T;
} & IV4LocalDBGetRecordsQuery;
export interface IV4LocalDBTxGetAllRecordsResult<
  T extends EV4LocalDBStoreNames,
> {
  recordPairs: IV4LocalDBRecordPair<T>[];
  records: IV4LocalDBRecord<T>[];
}

export type IV4LocalDBGetAllRecordsParams<T extends EV4LocalDBStoreNames> = {
  name: T;
} & IV4LocalDBGetRecordsQuery;
export interface IV4LocalDBGetAllRecordsResult<T extends EV4LocalDBStoreNames> {
  records: IV4LocalDBRecord<T>[];
  // recordPairs is only available of txGetAllRecords()
}

// UpdateRecords
export interface IV4LocalDBTxUpdateRecordsParams<
  T extends EV4LocalDBStoreNames,
> {
  tx: IV4LocalDBTransaction;
  name: T;
  recordPairs?: IV4LocalDBRecordPair<T>[];
  ids?: string[];
  updater: IV4LocalDBRecordUpdater<T>;
}

// AddRecords
export interface IV4LocalDBTxAddRecordsParams<T extends EV4LocalDBStoreNames> {
  tx: IV4LocalDBTransaction;
  name: T;
  records: IV4LocalDBRecord<T>[];
  skipIfExists?: boolean; // TODO skip
}
export interface IV4LocalDBTxAddRecordsResult {
  added: number;
  addedIds: string[];
  skipped: number;
}

// RemoveRecords

export interface IV4LocalDBTxRemoveRecordsParams<
  T extends EV4LocalDBStoreNames,
> {
  tx: IV4LocalDBTransaction;
  name: T;
  recordPairs?: IV4LocalDBRecordPair<T>[];
  ids?: string[];
  ignoreNotFound?: boolean;
}

export type IV4LocalDBRecordUpdater<T extends EV4LocalDBStoreNames> = <
  T1 extends IV4LocalDBRecord<T> | IV4RealmDBSchemaMap[T],
>(
  record: T1,
) => Promise<T1> | T1;
