import type {
  IV4DBHdCredentialRaw,
  IV4DBWallet,
} from './v4local/v4localDBTypes';

export type IV4MigrationWallet = {
  wallet: IV4DBWallet;
  isHD: boolean;
  //   accounts: IV4DBAccount[];
};

export type IV4MigrationPayload = {
  password: string;
  v4password: string;
  migratePasswordOk: boolean;
  shouldBackup: boolean;
  wallets: IV4MigrationWallet[];
  walletsForBackup: IV4MigrationWallet[];
};

export type IV4MigrationHdCredential = {
  mnemonic: string;
  wallet: IV4DBWallet;
  dbCredentialRaw: IV4DBHdCredentialRaw;
};
