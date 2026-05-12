import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { UserManagementPage } from '../pages/UserManagementPage.js';
import { UserDetailsPage } from '../pages/UserDetailsPage.js';
import { logger } from '../helpers/logger.js';
import { fullName } from './addUserSteps.js';

const { Given, When, Then } = createBdd();

When('I click the Deactivate button for the test user', async ({ page }) => {
    await new UserManagementPage(page).clickUserActivationAndDeactivation(fullName);
});

When('I click the Activate button for the test user', async ({ page }) => {
    await new UserManagementPage(page).clickUserActivationAndDeactivation(fullName);
});

When('I click the Delete button for the test user', async ({ page }) => {
    await new UserManagementPage(page).clickDeleteForUser(fullName);
});

When('I confirm the deletion', async ({ page }) => {
    await new UserManagementPage(page).confirmDeletion();
});

Then('the test user should no longer be visible on the list', async ({ page }) => {
    logger.info('Checking user ' + fullName + ' is not visible');
    await expect(new UserManagementPage(page).getUserRow(fullName)).not.toBeVisible();
    logger.info('User is no longer visible');
});