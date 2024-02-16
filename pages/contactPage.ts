import { Page, expect } from '@playwright/test';

export class ContactPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  selectors = {
    iframe: '#hs-form-iframe-0',
    emailInput: 'input[name="email"]',
    errorMessageLabel: '.hs-email label.hs-error-msg',
  };

  async fillContactForm(email: string): Promise<void> {
    await this.page.waitForLoadState();
    await this.page.frameLocator(this.selectors.iframe).locator(this.selectors.emailInput).fill(email);
  }

  async validateErrorMessage(wrongEmail: string, error: string): Promise<void> {
    await this.fillContactForm(wrongEmail);
    const errorMessage = await this.page.frameLocator(this.selectors.iframe).locator(this.selectors.errorMessageLabel).innerText();
    expect(errorMessage).toBe(error);
  }
}