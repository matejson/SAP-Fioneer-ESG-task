import { Page, expect } from '@playwright/test';

export class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async clickOnSelector(selector: string): Promise<void> {
    await this.page.locator(selector).first().click();
  }

  async goToPage(url: string): Promise<void> {
    await this.page.goto(url);
    await this.page.waitForLoadState();
  }

  async verifyCurrentUrl(expectedUrl: string): Promise<void> {
    const currentUrl = this.page.url();
    expect(currentUrl).toBe(expectedUrl);
  }
}