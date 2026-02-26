import { test, expect } from '@playwright/test';
import { LoginPage } from '../e2e/pages/LoginPage';
import { SecureAreaPage } from '../e2e/pages/SecureAreaPage';

test.describe('Secure Area Functionality', () => {

  test('User can logout successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const securePage = new SecureAreaPage(page);

    await loginPage.goto();
    await loginPage.login(
      process.env.USERNAME as string,
      process.env.PASSWORD as string
    );

    // Verify secure area loaded
    await expect(page).toHaveURL(/secure/);
    await expect(securePage.secureHeader).toHaveText('Secure Area');

    // Perform logout
    await securePage.clickLogout();

    // Validate redirection
    await expect(page).toHaveURL(/login/);
    await expect(securePage.flashMessage)
      .toContainText('You logged out of the secure area!');
  });

  test('Unauthorized user cannot access secure area directly', async ({ page }) => {
    const securePage = new SecureAreaPage(page);

    // Try to access secure page without login
    await page.goto('/secure');

    await expect(page).toHaveURL(/login/);
    await expect(securePage.flashMessage)
      .toContainText('You must login to view the secure area!');
  });

});