import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { UserManagementPage } from '../pages/UserManagementPage.js';
import { logger } from '../helpers/logger.js';
import { UserDetailsPage } from '../pages/UserDetailsPage.js';

const { Given, When, Then } = createBdd();

When('I click the Logout link', async ({ page }) => {
    const userManagementPage = new UserManagementPage(page);
    await userManagementPage.clickLogout();
});

When('I click the Back button', async ({ page }) => {
    const userDetailsPage = new UserDetailsPage(page);
    await userDetailsPage.clickBack();
});

Then('I should see the login page', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await expect(loginPage.emailInput).toBeVisible();
    await expect(loginPage.passwordInput).toBeVisible();
    await expect(loginPage.loginButton).toBeVisible();
});