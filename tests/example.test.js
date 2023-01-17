import {test, expect} from '@playwright/test';

test('example screenshot', async ({ page }) => {
  await page.goto('https://github.com');
  expect(await page.screenshot()).toMatchSnapshot();
});
