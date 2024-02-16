import { test } from '@playwright/test';
import { BasePage } from '../pages/basePage';
import { ContactPage } from '../pages/contactPage';
import { MainPage } from '../pages/mainPage';
import { InvalidEmail } from '../enums/invalidEmail';
import { ErrorMessage } from '../enums/errorMessage';
import { Urls } from '../enums/urls';

test('Test 3 - Verify validation message for incorrect email in contact form', async ({ page }) => {
  const basePage = new BasePage(page);
  const mainPage = new MainPage(page);
  const contactPage = new ContactPage(page);
  await basePage.goToPage(Urls.baseUrl);
  await basePage.clickOnSelector(mainPage.selectors.getInTouchButton);
  await contactPage.fillContactForm(InvalidEmail.InvalidEmailFormat);
  await contactPage.validateErrorMessage(InvalidEmail.InvalidEmailFormat, ErrorMessage.IncorrectEmailFormat);
});