import {test, expect} from '@playwright/test'

test('Locators', async ({page}) => {
    await page.goto("https://www.demoblaze.com/index.html");

    // Click on "Log in" button  -Property    
    await page.click("id=login2")

    // fill username, password -CSS
    // await page.locator('#loginusername').fill('pavanol')
    await page.fill('#loginusername', 'pavanol')
    // await page.locator('#loginpassword').fill('test@123')
    await page.fill('#loginpassword', 'test@123')

    // click on 'Log in ' button -XPath
    await page.click("//button[normalize-space() = 'Log in']")

    // verify 'Log out' link presence -XPath
    const logoutLink = await page.locator("#logout2")
    await expect(logoutLink).toBeVisible();

    await page.close()
})