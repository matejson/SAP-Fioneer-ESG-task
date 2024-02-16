import { test } from '@playwright/test';
import { BasePage } from '../pages/basePage';
import { MainPage } from '../pages/mainPage';
import { Urls } from '../enums/urls';

test('Test 2 - Verify redirection to ESG KPI Engine page', async ({ page }) => {
  const basePage = new BasePage(page);
  const mainPage = new MainPage(page);
  await basePage.goToPage(Urls.baseUrl);
  await mainPage.navigateToESGKPIEngine();
  await mainPage.verifyCurrentUrl(Urls.baseUrl + Urls.ESGKPIEngineUrl);
});