import { ensureRunOnBackground } from '@onekeyhq/shared/src/utils/assertUtils';

// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import v4localDb from './v4localDbInstance';

if (process.env.NODE_ENV !== 'production') {
  global.$$localDbV4 = v4localDb;
}

ensureRunOnBackground();

export default v4localDb;
