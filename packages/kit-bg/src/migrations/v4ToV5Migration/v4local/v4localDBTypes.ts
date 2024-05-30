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

export type IDBWalletId =
  | string // hd-xxx, hw-xxx
  | typeof WALLET_TYPE_IMPORTED
  | typeof WALLET_TYPE_WATCHING
  | typeof WALLET_TYPE_EXTERNAL;
export type IDBWalletIdSingleton =
  | typeof WALLET_TYPE_IMPORTED
  | typeof WALLET_TYPE_WATCHING
  | typeof WALLET_TYPE_EXTERNAL;

type IDBBaseObject = {
  id: string;
};

type IDBBaseObjectWithName = IDBBaseObject & {
  name: string;
};

export type IV4DBAccountDerivation = IDBBaseObject & {
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
export type IV4DBWallet = IDBBaseObjectWithName & {
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
  avatar?: IDBAvatar;
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

export type IV4DBDevice = IDBBaseObjectWithName & {
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

type IDBAvatar = string; // stringify(IAvatarInfo)
// IAvatar;
//  type IDBAvatar = {
//   emoji: string | 'img'; // lazy load EmojiTypes
//   bgColor: string;
// };
type IDBBaseAccount = IDBBaseObjectWithName & {
  type: EV4DBAccountType | undefined;
  path: string;
  pathIndex?: number;
  relPath?: string; // 0/0
  indexedAccountId?: string;
  coinType: string;
  impl: string; // single chain account belongs to network impl
  // single chain account belongs to certain networks, check keyring options: onlyAvailableOnCertainNetworks
  networks?: string[];
  // single chain account auto change to createAtNetwork when network not compatible and networks not defined
  createAtNetwork?: string;
  template?: string;
};

export type IV4DBSimpleAccount = IDBBaseAccount & {
  pub: string;
  address: string;
};
export type IV4DBUtxoAccount = IDBBaseAccount & {
  pub?: string; // TODO rename pubKey to pub
  xpub: string;
  xpubSegwit?: string; // wrap regular xpub into bitcoind native descriptor
  address: string; // Display/selected address
  addresses: Record<string, string>;
  customAddresses?: Record<string, string>; // for btc dynamic custom address
};
export type IV4DBVariantAccount = IDBBaseAccount & {
  pub: string;
  address: string; // Base address
  // VARIANT: networkId -> address
  // UTXO: relPath -> address
  addresses: Record<string, string>;
};
type IDBAccountAddressesMap = {
  [networkIdOrImpl: string]: string; // multiple address join(',')
};
export type IV4DBExternalAccount = IV4DBVariantAccount & {
  address: string; // always be empty if walletconnect account

  connectionInfoRaw: string | undefined;

  // TODO merge with addresses
  connectedAddresses: {
    [networkIdOrImpl: string]: string; // multiple address join(',')
  };
  selectedAddress: {
    [networkId: string]: number;
  };
};
export type IV4DBAccount =
  | IV4DBSimpleAccount
  | IV4DBUtxoAccount
  | IV4DBVariantAccount
  | IV4DBExternalAccount;

export interface ILocalDBSchemaMap {
  [EV4LocalDBStoreNames.Context]: IV4DBContext;
  [EV4LocalDBStoreNames.Credential]: IV4DBCredentialBase;
  [EV4LocalDBStoreNames.Wallet]: IV4DBWallet;
  [EV4LocalDBStoreNames.Account]: IV4DBAccount;
  [EV4LocalDBStoreNames.AccountDerivation]: IV4DBAccountDerivation;
  [EV4LocalDBStoreNames.Device]: IV4DBDevice;
}

export interface IRealmDBSchemaMap {
  [EV4LocalDBStoreNames.Context]: V4RealmSchemaContext;
  [EV4LocalDBStoreNames.Credential]: V4RealmSchemaCredential;
  [EV4LocalDBStoreNames.Wallet]: V4RealmSchemaWallet;
  [EV4LocalDBStoreNames.Account]: V4RealmSchemaAccount;
  [EV4LocalDBStoreNames.AccountDerivation]: V4RealmSchemaAccountDerivation;
  [EV4LocalDBStoreNames.Device]: V4RealmSchemaDevice;
}

export interface IIndexedDBSchemaMap extends DBSchema {
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

export type ILocalDBTransactionStores = {
  [EV4LocalDBStoreNames.Context]: IDBPObjectStore<
    IIndexedDBSchemaMap,
    EV4LocalDBStoreNames.Context[],
    EV4LocalDBStoreNames.Context,
    'readwrite'
  >;
  [EV4LocalDBStoreNames.Credential]: IDBPObjectStore<
    IIndexedDBSchemaMap,
    EV4LocalDBStoreNames.Credential[],
    EV4LocalDBStoreNames.Credential,
    'readwrite'
  >;
  [EV4LocalDBStoreNames.Wallet]: IDBPObjectStore<
    IIndexedDBSchemaMap,
    EV4LocalDBStoreNames.Wallet[],
    EV4LocalDBStoreNames.Wallet,
    'readwrite'
  >;
  [EV4LocalDBStoreNames.Account]: IDBPObjectStore<
    IIndexedDBSchemaMap,
    EV4LocalDBStoreNames.Account[],
    EV4LocalDBStoreNames.Account,
    'readwrite'
  >;

  [EV4LocalDBStoreNames.AccountDerivation]: IDBPObjectStore<
    IIndexedDBSchemaMap,
    EV4LocalDBStoreNames.AccountDerivation[],
    EV4LocalDBStoreNames.AccountDerivation,
    'readwrite'
  >;
  [EV4LocalDBStoreNames.Device]: IDBPObjectStore<
    IIndexedDBSchemaMap,
    EV4LocalDBStoreNames.Device[],
    EV4LocalDBStoreNames.Device,
    'readwrite'
  >;
};
export interface ILocalDBTransaction {
  stores?: ILocalDBTransactionStores;
}
export type IV4LocalDBWithTransactionTask<T> = (
  tx: ILocalDBTransaction,
) => Promise<T>;
export type IV4LocalDBWithTransactionOptions = {
  readOnly?: boolean;
};

// GetRecordsCount
export interface ILocalDBGetRecordsCountParams<T extends EV4LocalDBStoreNames> {
  name: T;
}
export interface ILocalDBTxGetRecordsCountParams<
  T extends EV4LocalDBStoreNames,
> {
  tx: ILocalDBTransaction;
  name: T;
}
export interface ILocalDBGetRecordsCountResult {
  count: number;
}

export type ILocalDBRecord<T extends EV4LocalDBStoreNames> =
  ILocalDBSchemaMap[T];

export type ILocalDBRecordPair<T extends EV4LocalDBStoreNames> = [
  ILocalDBRecord<T>,
  IRealmDBSchemaMap[T] | null,
];

// GetRecordById
export interface ILocalDBTxGetRecordByIdParams<T extends EV4LocalDBStoreNames> {
  tx: ILocalDBTransaction;
  name: T;
  id: string;
}
export type ILocalDBTxGetRecordByIdResult<T extends EV4LocalDBStoreNames> =
  ILocalDBRecordPair<T>;

export interface ILocalDBGetRecordByIdParams<T extends EV4LocalDBStoreNames> {
  name: T;
  id: string;
}
export type ILocalDBGetRecordByIdResult<T extends EV4LocalDBStoreNames> =
  ILocalDBRecord<T>;

// GetRecords
export type ILocalDBGetRecordsQuery = {
  ids?: string[];
  limit?: number;
  offset?: number;
};
export type ILocalDBTxGetAllRecordsParams<T extends EV4LocalDBStoreNames> = {
  tx: ILocalDBTransaction;
  name: T;
} & ILocalDBGetRecordsQuery;
export interface ILocalDBTxGetAllRecordsResult<T extends EV4LocalDBStoreNames> {
  recordPairs: ILocalDBRecordPair<T>[];
  records: ILocalDBRecord<T>[];
}

export type ILocalDBGetAllRecordsParams<T extends EV4LocalDBStoreNames> = {
  name: T;
} & ILocalDBGetRecordsQuery;
export interface ILocalDBGetAllRecordsResult<T extends EV4LocalDBStoreNames> {
  records: ILocalDBRecord<T>[];
  // recordPairs is only available of txGetAllRecords()
}

// UpdateRecords
export interface ILocalDBTxUpdateRecordsParams<T extends EV4LocalDBStoreNames> {
  tx: ILocalDBTransaction;
  name: T;
  recordPairs?: ILocalDBRecordPair<T>[];
  ids?: string[];
  updater: ILocalDBRecordUpdater<T>;
}

// AddRecords
export interface ILocalDBTxAddRecordsParams<T extends EV4LocalDBStoreNames> {
  tx: ILocalDBTransaction;
  name: T;
  records: ILocalDBRecord<T>[];
  skipIfExists?: boolean; // TODO skip
}
export interface ILocalDBTxAddRecordsResult {
  added: number;
  addedIds: string[];
  skipped: number;
}

// RemoveRecords

export interface ILocalDBTxRemoveRecordsParams<T extends EV4LocalDBStoreNames> {
  tx: ILocalDBTransaction;
  name: T;
  recordPairs?: ILocalDBRecordPair<T>[];
  ids?: string[];
  ignoreNotFound?: boolean;
}

export type ILocalDBRecordUpdater<T extends EV4LocalDBStoreNames> = <
  T1 extends ILocalDBRecord<T> | IRealmDBSchemaMap[T],
>(
  record: T1,
) => Promise<T1> | T1;

export type ILocalDBWithTransactionTask<T> = (
  tx: ILocalDBTransaction,
) => Promise<T>;
export type ILocalDBWithTransactionOptions = {
  readOnly?: boolean;
};
