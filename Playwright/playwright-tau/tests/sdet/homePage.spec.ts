import {test, expect} from '@playwright/test'

test('Home Page Title Validation', async ({page}) => {
    await page.goto('https://www.demoblaze.com/index.html');

    const pageTitle = await page.title();
    console.log('Page title is: ' + pageTitle);

    await expect(page).toHaveTitle(pageTitle);

    await page.close();
})