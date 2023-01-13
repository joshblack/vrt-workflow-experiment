import {fileURLToPath} from 'node:url';
import path from 'node:path'

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * @type {import('@playwright/test').Config}
 */
const config = {
  // https://playwright.dev/docs/api/class-testconfig#test-config-test-dir
  testDir: path.join(__dirname, 'tests'),
  testMatch: '**/*.test.js',

  // https://playwright.dev/docs/api/class-testconfig#test-config-timeout
  timeout: 1000 * 15,

  // https://playwright.dev/docs/api/class-testconfig#test-config-output-dir
  outputDir: path.join(__dirname, '.playwright', 'results'),
  snapshotDir: path.join(__dirname, '.playwright', 'snapshots'),

  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  use: {
    screenshot: 'only-on-failure',
    viewport: {
      // Large breakpoint
      // @see https://primer.style/primitives/spacing#breakpoints
      width: 1012,
      height: 768,
    },
  },
  expect: {
    toHaveScreenshot: {
      animations: 'disabled',
    },
  },
  reporter: [
    ['line'],
    ['html', {open: 'never', outputFolder: path.join(__dirname, '.playwright/report')}],
    [
      'json',
      {
        outputFile: path.join(__dirname, '.playwright', 'results.json'),
      },
    ],
  ],
}

export default config
