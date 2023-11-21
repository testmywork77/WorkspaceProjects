import {type Locator, type Page, expect} from '@playwright/test';

export class HomePage {

    readonly page: Page;
    readonly getStartButton: Locator;
    readonly pageTitle: RegExp;

    constructor(page: Page){
        this.page = page;
        this.getStartButton = page.getByRole('link', {name: 'Get Started'});
        this.pageTitle = /Playwright/;
    }

    async clickGetStarted(){
        await this.getStartButton.click();
    }

    async assertPageTitle(){
        expect(this.page).toHaveTitle(this.pageTitle)
    }

}

export default HomePage;
