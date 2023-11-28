import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  //await page.goto('https://playwright.dev/');
  await page.goto('https://www.google.com/')

  await page.locator("getByLabel('Choose language, en')").click()

  // Expect a title "to contain" a substring.
  await expect(page).toHaveURL('https://www.google.com/');
});