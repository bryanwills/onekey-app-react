import { V4LocalDbIndexed } from './v4indexed/V4LocalDbIndexed';

import type { V4LocalDbBase } from './V4LocalDbBase';

// TODO ensureBackgroundObject

const v4localDb: V4LocalDbBase = new V4LocalDbIndexed();
if (process.env.NODE_ENV !== 'production') {
  global.$$localDbV4 = v4localDb;
}
export default v4localDb;
