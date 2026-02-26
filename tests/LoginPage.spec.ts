import { test, expect } from '@playwright/test';
import { LoginPage } from '../e2e/pages/LoginPage';

test.describe('Login Page - POM Implementation', () => {

  test('Successful login', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(
      process.env.USERNAME as string,
      process.env.PASSWORD as string
    );

    await expect(page).toHaveURL(/secure/);
    await expect(loginPage.flashMessage)
      .toContainText('You logged into a secure area!');
  });

  test('Login with invalid username', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(
      'invalidUser',
      process.env.PASSWORD as string
    );

    await expect(page).toHaveURL(/login/);
    await expect(loginPage.flashMessage)
      .toContainText('Your username is invalid!');
  });

  test('Login with invalid password', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(
      process.env.USERNAME as string,
      'wrongPassword'
    );

    await expect(page).toHaveURL(/login/);
    await expect(loginPage.flashMessage)
      .toContainText('Your password is invalid!');
  });

});