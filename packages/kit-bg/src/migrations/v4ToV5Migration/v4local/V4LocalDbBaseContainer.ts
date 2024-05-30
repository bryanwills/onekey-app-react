import type { IV4LocalDBAgent } from './IV4LocalDBAgent';
import type { EV4LocalDBStoreNames } from './v4localDBStoreNames';
import type {
  ILocalDBGetAllRecordsParams,
  ILocalDBGetAllRecordsResult,
  ILocalDBGetRecordByIdParams,
  ILocalDBGetRecordByIdResult,
  ILocalDBGetRecordsCountParams,
  ILocalDBGetRecordsCountResult,
  ILocalDBTxAddRecordsParams,
  ILocalDBTxAddRecordsResult,
  ILocalDBTxGetAllRecordsParams,
  ILocalDBTxGetAllRecordsResult,
  ILocalDBTxGetRecordByIdParams,
  ILocalDBTxGetRecordByIdResult,
  ILocalDBTxGetRecordsCountParams,
  ILocalDBTxRemoveRecordsParams,
  ILocalDBTxUpdateRecordsParams,
  ILocalDBWithTransactionTask,
} from './v4localDBTypes';

export abstract class V4LocalDbBaseContainer implements IV4LocalDBAgent {
  protected abstract readyDb: Promise<IV4LocalDBAgent>;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async withTransaction<T>(task: ILocalDBWithTransactionTask<T>): Promise<T> {
    throw new Error(
      'Directly call withTransaction() is NOT allowed, please use (await this.readyDb).withTransaction() at DB layer',
    );
    // const db = await this.readyDb;
    // return db.withTransaction(task);
  }

  async getRecordsCount<T extends EV4LocalDBStoreNames>(
    params: ILocalDBGetRecordsCountParams<T>,
  ): Promise<ILocalDBGetRecordsCountResult> {
    const db = await this.readyDb;
    return db.getRecordsCount(params);
  }

  async txGetRecordsCount<T extends EV4LocalDBStoreNames>(
    params: ILocalDBTxGetRecordsCountParams<T>,
  ): Promise<ILocalDBGetRecordsCountResult> {
    const db = await this.readyDb;
    return db.txGetRecordsCount(params);
  }

  async getAllRecords<T extends EV4LocalDBStoreNames>(
    params: ILocalDBGetAllRecordsParams<T>,
  ): Promise<ILocalDBGetAllRecordsResult<T>> {
    const db = await this.readyDb;
    return db.getAllRecords(params);
  }

  async getRecordById<T extends EV4LocalDBStoreNames>(
    params: ILocalDBGetRecordByIdParams<T>,
  ): Promise<ILocalDBGetRecordByIdResult<T>> {
    const db = await this.readyDb;
    return db.getRecordById(params);
  }

  async txGetAllRecords<T extends EV4LocalDBStoreNames>(
    params: ILocalDBTxGetAllRecordsParams<T>,
  ): Promise<ILocalDBTxGetAllRecordsResult<T>> {
    const db = await this.readyDb;
    return db.txGetAllRecords(params);
  }

  async txGetRecordById<T extends EV4LocalDBStoreNames>(
    params: ILocalDBTxGetRecordByIdParams<T>,
  ): Promise<ILocalDBTxGetRecordByIdResult<T>> {
    const db = await this.readyDb;
    return db.txGetRecordById(params);
  }

  async txUpdateRecords<T extends EV4LocalDBStoreNames>(
    params: ILocalDBTxUpdateRecordsParams<T>,
  ): Promise<void> {
    const db = await this.readyDb;
    // const a = db.txAddRecords['hello-world-test-error-stack-8889273']['name'];
    return db.txUpdateRecords(params);
  }

  async txAddRecords<T extends EV4LocalDBStoreNames>(
    params: ILocalDBTxAddRecordsParams<T>,
  ): Promise<ILocalDBTxAddRecordsResult> {
    const db = await this.readyDb;
    return db.txAddRecords(params);
  }

  async txRemoveRecords<T extends EV4LocalDBStoreNames>(
    params: ILocalDBTxRemoveRecordsParams<T>,
  ): Promise<void> {
    const db = await this.readyDb;
    return db.txRemoveRecords(params);
  }

  abstract reset(): Promise<void>;

  async clearRecords(params: { name: EV4LocalDBStoreNames }) {
    const db = await this.readyDb;
    return db.clearRecords(params);
  }
}
