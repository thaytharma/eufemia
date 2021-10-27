/**
 * Get next package version number before release
 *
 */

// When on a "release" branch:
// run: yarn nodemon --exec 'node ./scripts/getNextReleaseVersion.js' --ext js --watch './scripts/**/*'

import getNextReleaseVersion from '@dnb/eufemia/scripts/release/getNextReleaseVersion.js'

getNextReleaseVersion()
