import { test } from '@playwright/test';
import { BasePage } from '../pages/basePage';
import { MainPage } from '../pages/mainPage';
import { Urls } from '../enums/urls';

test('Test 1 - Verify Get in touch button color', async ({ page }) => {
  const basePage = new BasePage(page);
  const mainPage = new MainPage(page);
  await basePage.goToPage(Urls.baseUrl);
  await mainPage.validateButtonColor();
});
