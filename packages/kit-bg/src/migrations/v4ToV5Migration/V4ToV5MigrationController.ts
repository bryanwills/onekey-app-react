import { ensureRunOnBackground } from '@onekeyhq/shared/src/utils/assertUtils';

import { V4ReduxDb } from './v4redux/V4ReduxDb';
import { V4SimpleDb } from './v4simple/V4SimpleDb';

ensureRunOnBackground();

export class V4ToV5MigrationController {
  _v4simpleDb: V4SimpleDb | undefined;

  get v4simpleDb() {
    if (!this._v4simpleDb) {
      this._v4simpleDb = new V4SimpleDb();
    }
    return this._v4simpleDb;
  }

  _v4reduxDb: V4ReduxDb | undefined;

  get v4reduxDb() {
    if (!this._v4reduxDb) {
      this._v4reduxDb = new V4ReduxDb();
    }
    return this._v4reduxDb;
  }

  // TODO v4localDb()

  async testShowData() {
    const data = await this.v4reduxDb.reduxData;
    const simpleDbAccountHistory =
      await this.v4simpleDb.history.getAccountHistory({
        accountId: 'hd-1--1',
        networkId: 'evm--1',
      });
    const result = {
      simpleDbAccountHistory,
      reduxSettings: data?.settings,
    };
    return result;
  }
}
