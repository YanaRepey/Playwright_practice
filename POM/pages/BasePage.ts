import { Page } from "@playwright/test";

export class BasePage {
    constructor(private page: Page) {}

    async openMainPage() {
        await this.page.goto(config.baseURL);
    }
}