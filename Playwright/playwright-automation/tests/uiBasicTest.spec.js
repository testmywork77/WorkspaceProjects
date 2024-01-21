const {test, expect} = require('@playwright/test');
/*
test('browser fixture', async ({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://playwright.dev/");
    console.log(await page.title());
})

test('page fixture', async ({page}) => {
    await page.goto("https://nodejs.org/en"); // https://expressjs.com/
    console.log(await page.title());
    await expect.toHaveTitle("Google")
})
*/

// https://rahulshettyacademy.com/loginpagePractise/ - (username is rahulshettyacademy and Password is learning)
/*
test('Login page valid credentials', async ({page}) => {    
    const username = page.locator("input#username");
    const password = page.locator("#password");
    const signIn = page.locator("#signInBtn");
    const cardTitles = page.locator(".card-body .card-title a");

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await username.fill("rahulshettyacademy")
    await password.fill("learning")
    await signIn.click();

    console.log(await cardTitles.first().textContent());
    console.log(await cardTitles.nth(1).textContent());
    const allTitles = await cardTitles.allTextContents();
    console.log(allTitles);
})

test('Login page invalid credentials', async ({page}) => {
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await page.locator("input#username").fill("rahulshettyacademy")
    await page.locator("#password").fill("learning123")
    await page.locator("#signInBtn").click();
    console.log(await page.locator("[style*='block']").textContent());
    await expect(await page.locator("[style*='block']")).toContainText("Incorre123ct");
})
*/

test('DropdownRadioCheck', async({page}) => {
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const dropdown = page.locator("select.form-control");
    await dropdown.selectOption("Consultant");
    await page.locator(".radiotextsty").last().click();
    await page.locator("#okayBtn").click();
    console.log(await page.locator(".radiotextsty").last().isChecked());
    await expect(await page.locator(".radiotextsty").last()).toBeChecked();

    await page.pause();
})