import { Page, expect } from '@playwright/test';

export class MainPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  selectors = {
    tab: '#menu-item-29979',
    link: '.ux-menu-link.ift-mega-menu-item:has-text("ESG KPI Engine")',
    getInTouchButton: 'div.header-button:has-text("Get in touch")'
  };

  async navigateToESGKPIEngine(): Promise<void> {
    await this.page.locator(this.selectors.tab).click();
    await this.page.locator(this.selectors.link).click();
  }

  async verifyCurrentUrl(expectedUrl: string): Promise<void> {
    const currentUrl = this.page.url();
    expect(currentUrl).toBe(expectedUrl);
  }

  async validateButtonColor(): Promise<void> {
    const button = this.page.locator(this.selectors.getInTouchButton).first()
    expect((button).isVisible()).toBeTruthy();
    await expect(button).toHaveCSS('--primary-color', '#ffd43c')
  }}
