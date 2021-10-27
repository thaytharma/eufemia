/**
 * Get next package version number before release
 *
 */

// When on a "release" branch:
// run: yarn nodemon --exec 'node --experimental-import-meta-resolve ./scripts/release/getNextReleaseVersion.mjs' --ext mjs --watch './scripts/**/*'
// run: yarn nodemon --exec 'babel-node ./scripts/release/getNextReleaseVersion.js' --ext js --watch './scripts/**/*'

import { exec } from 'child_process'
import getBranchName from 'current-git-branch'
import dotenv from 'dotenv'

dotenv.config()

const command = 'yarn workspace @dnb/eufemia semantic-release --dry-run'
const releaseBranches = ['release', 'beta', 'alpha']
// const fetchBranches = ['portal']
const fetchBranches = ['release']
const fetchURL = 'https://eufemia.dnb.no/uilib'

// console.log('import.meta', JSON.stringify(process, null, 2))

// run this script if it is called from bash / command line
if (process.argv[1] === __filename) {
  getNextReleaseVersion()
}

export default async function getNextReleaseVersion() {
  const branchName = getBranchName()

  if (fetchBranches.includes(branchName)) {
    try {
      const log = await runCommand(command)
      const nextVersion =
        log.match(/The next release version is ([^\n]*)/)?.[1] ||
        branchName
      console.log('nextVersion', nextVersion)

      // const servers = await fetch("https://get-servers.herokuapp.com/");
      // const data = await servers.text();

      return nextVersion
    } catch (e) {
      console.error(e)
    }
  } else if (releaseBranches.includes(branchName)) {
    try {
      const log = await runCommand(command)
      const nextVersion =
        log.match(/The next release version is ([^\n]*)/)?.[1] ||
        branchName
      console.log('nextVersion', nextVersion)
      return nextVersion
    } catch (e) {
      console.error(e)
    }
  }

  return branchName
}

function runCommand(command) {
  return new Promise((resolve, reject) => {
    try {
      exec(command, (error, stdout, stderr) => {
        if (error) {
          return reject(error)
        }
        if (stderr) {
          return reject(stderr)
        }
        return resolve(stdout)
      })
    } catch (e) {
      reject(e)
    }
  })
}
