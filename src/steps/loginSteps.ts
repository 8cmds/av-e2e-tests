import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { logger } from '../helpers/logger.js';
import { UserManagementPage } from '../pages/UserManagementPage.js';
import { UserDetailsPage } from '../pages/UserDetailsPage.js';

const { Given, When, Then } = createBdd();

Given('I am on the login page', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goTo();
});

Given('I am not logged in', async ({ page }) => {
    logger.info('Clearing cookies');
    await page.context().clearCookies();
});

When('I fill in the login form with valid admin credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.fillEmail(process.env.ADMIN_EMAIL!);
    await loginPage.fillPassword(process.env.ADMIN_PASSWORD!);
});

When('I fill in the login form with valid user credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.fillEmail(process.env.USER_EMAIL!);
    await loginPage.fillPassword(process.env.USER_PASSWORD!);
});

When('I fill in the login form with deactivated account credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.fillEmail(process.env.INACTIVE_EMAIL!);
    await loginPage.fillPassword(process.env.INACTIVE_PASSWORD!);
});

When('I fill in the login form with wrong password', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.fillEmail(process.env.ADMIN_EMAIL!);
    await loginPage.fillPassword('wrongPassword123!');
});

When('I fill in the email field', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.fillEmail(process.env.ADMIN_EMAIL!);
});

When('I click the Login button', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.clickLogin();
});

Then('I should see the User Management page', async ({ page }) => {
    await expect(new UserManagementPage(page).heading).toBeVisible();
});

Then('I should see the User Details page', async ({ page }) => {
    await expect(new UserDetailsPage(page).heading).toBeVisible();
});

Then('I should see an error message', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await expect(loginPage.errorMessage).toBeVisible();
});

Then('I should see validation errors', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await expect(loginPage.errorMessage).toBeVisible();
});

Then('I should see the deactivated account message', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await expect(loginPage.deactivatedMessage).toBeVisible();
});