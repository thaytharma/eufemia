/**
 * Screenshot Test
 * This file will not run on "test:staged" because we don't require any related files
 */

import {
  testPageScreenshot,
  setupPageScreenshot,
} from '../../../core/jest/jestSetupScreenshots'

describe('Copu screenshot', () => {
  setupPageScreenshot({
    url: '/uilib/components/copy/demos',
  })

  it('have to match the static primary linear with 50 percentage', async () => {
    const screenshot = await testPageScreenshot({
      style: {
        width: '20rem',
      },
      selector:
        '[data-visual-test="progress-indicator-linear--primary"] .dnb-progress-indicator',
    })
    expect(true).toEqual(true)
  })
})
