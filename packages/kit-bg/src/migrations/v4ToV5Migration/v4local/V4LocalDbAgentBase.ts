import { isNil } from 'lodash';

import type { IV4LocalDBAgent } from './IV4LocalDBAgent';
import type { EV4LocalDBStoreNames } from './v4localDBStoreNames';
import type {
  ILocalDBGetAllRecordsParams,
  ILocalDBGetAllRecordsResult,
  ILocalDBGetRecordByIdParams,
  ILocalDBGetRecordByIdResult,
  ILocalDBGetRecordsCountParams,
  ILocalDBGetRecordsCountResult,
  ILocalDBRecordPair,
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

export abstract class V4LocalDbAgentBase implements IV4LocalDBAgent {
  async buildRecordPairsFromIds<T extends EV4LocalDBStoreNames>({
    recordPairs,
    ids,
    tx,
    name,
    ignoreNotFound,
  }: ILocalDBTxRemoveRecordsParams<T>) {
    if (isNil(ids) && isNil(recordPairs)) {
      throw new Error(
        'dbUpdateRecord ERROR: ids and recordPairs both not found',
      );
    }
    let pairs: ILocalDBRecordPair<T>[] = [];
    if (!isNil(ids)) {
      const pairsFromIds = await Promise.all(
        ids.map(async (id) => {
          try {
            // TODO use txGetRecordByIdSafe
            return await this.txGetRecordById({
              id,
              name,
              tx,
            });
          } catch (error) {
            if (ignoreNotFound) {
              return Promise.resolve(null);
            }
            throw error;
          }
        }),
      );
      pairs = pairs.concat(pairsFromIds.filter(Boolean));
    }
    if (!isNil(recordPairs)) {
      pairs = pairs.concat(recordPairs);
    }

    return pairs;
  }

  abstract withTransaction<T>(task: ILocalDBWithTransactionTask<T>): Promise<T>;

  abstract clearRecords(params: { name: EV4LocalDBStoreNames }): Promise<void>;

  abstract getRecordsCount<T extends EV4LocalDBStoreNames>(
    params: ILocalDBGetRecordsCountParams<T>,
  ): Promise<ILocalDBGetRecordsCountResult>;

  // TODO get with query
  abstract getAllRecords<T extends EV4LocalDBStoreNames>(
    params: ILocalDBGetAllRecordsParams<T>,
  ): Promise<ILocalDBGetAllRecordsResult<T>>;

  abstract getRecordById<T extends EV4LocalDBStoreNames>(
    params: ILocalDBGetRecordByIdParams<T>,
  ): Promise<ILocalDBGetRecordByIdResult<T>>;

  abstract txGetRecordsCount<T extends EV4LocalDBStoreNames>(
    params: ILocalDBTxGetRecordsCountParams<T>,
  ): Promise<ILocalDBGetRecordsCountResult>;

  abstract txGetAllRecords<T extends EV4LocalDBStoreNames>(
    params: ILocalDBTxGetAllRecordsParams<T>,
  ): Promise<ILocalDBTxGetAllRecordsResult<T>>;

  abstract txGetRecordById<T extends EV4LocalDBStoreNames>(
    params: ILocalDBTxGetRecordByIdParams<T>,
  ): Promise<ILocalDBTxGetRecordByIdResult<T>>;

  // TODO batch update/add/remove
  abstract txUpdateRecords<T extends EV4LocalDBStoreNames>(
    params: ILocalDBTxUpdateRecordsParams<T>,
  ): Promise<void>;

  abstract txAddRecords<T extends EV4LocalDBStoreNames>(
    params: ILocalDBTxAddRecordsParams<T>,
  ): Promise<ILocalDBTxAddRecordsResult>;

  abstract txRemoveRecords<T extends EV4LocalDBStoreNames>(
    params: ILocalDBTxRemoveRecordsParams<T>,
  ): Promise<void>;
}
