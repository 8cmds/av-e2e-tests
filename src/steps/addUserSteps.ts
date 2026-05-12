import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { AddUserPage } from '../pages/AddUserPage.js';
import { UserManagementPage } from '../pages/UserManagementPage.js';
import { UserDetailsPage } from '../pages/UserDetailsPage.js';
import { logger } from '../helpers/logger.js';
import { generateName } from '../helpers/testNameGenerator.js';

const { Given, When, Then } = createBdd();

export let currentUserName: string;
export let currentUserSurname: string;
export let fullName: string;

When('I click the Add User button', async ({ page }) => {
    await new UserManagementPage(page).clickAddUser();
});

Then('I should see the Add User form', async ({ page }) => {
    await expect(new AddUserPage(page).heading).toBeVisible();
});

When('I fill in the required user fields', async ({ page }) => {
    const genName = generateName();
    currentUserName = 'Test';
    currentUserSurname = `User${genName}`;
    fullName = `${currentUserName} ${currentUserSurname}`;
    const email = `testuser${genName.toLowerCase()}@test.pl`;

    const addUserPage = new AddUserPage(page);
    await addUserPage.fillName(currentUserName);
    await addUserPage.fillSurname(currentUserSurname);
    await addUserPage.fillEmail(email);
    await addUserPage.fillPassword('Test1234_');
});

When('I fill in all user fields', async ({ page }) => {
    const genName = generateName();
    currentUserName = 'Test';
    currentUserSurname = `User${genName}`;
    fullName = `${currentUserName} ${currentUserSurname}`;
    const email = `testuser${genName.toLowerCase()}@test.pl`;

    const addUserPage = new AddUserPage(page);
    await addUserPage.fillName(currentUserName);
    await addUserPage.fillSurname(currentUserSurname);
    await addUserPage.fillEmail(email);
    await addUserPage.fillPassword('Test1234_');
    await addUserPage.fillPhone('444555666');
    await addUserPage.fillBirthDate('1999-05-12');
    await addUserPage.selectPosition('IT');
    await addUserPage.fillSalary('7000');
    await addUserPage.selectContractType('B2B');
    await addUserPage.fillStartTime('2026-01-01');
    await addUserPage.fillEndTime('2026-12-01');
    await addUserPage.fillNotes('testesttest');
});

When('I check the Is Activated checkbox', async ({ page }) => {
    await new AddUserPage(page).checkIsActivated();
});

When('I check the Is Admin checkbox', async ({ page }) => {
    await new AddUserPage(page).checkIsAdmin();
});

When('I click the Submit button', async ({ page }) => {
    await new AddUserPage(page).clickSubmit();
});

When('I click the Cancel button', async ({ page }) => {
    await new AddUserPage(page).clickCancel();
});

When('I search for the test user', async ({ page }) => {
    logger.info('Searching for: ' + fullName);
    await new UserManagementPage(page).searchForUser(fullName);
});

When('I click on the test user profile', async ({ page }) => {
    logger.info('Opening profile for: ' + fullName);
    await new UserManagementPage(page).clickUserProfile(fullName);
});

Then('I should be redirected to the User Management page', async ({ page }) => {
    await expect(new UserManagementPage(page).heading).toBeVisible();
});

Then('the new user should be visible on the list', async ({ page }) => {
    logger.info('Checking user ' + fullName + 'is visible');
    await expect(new UserManagementPage(page).getUserRow(fullName)).toBeVisible();
    logger.info('User ' + fullName + ' is visible');
});

Then('the user should be activated', async ({ page }) => {
    await expect(new UserDetailsPage(page).activatedYes).toBeVisible();
});

Then('the user should not be activated', async ({ page }) => {
    await expect(new UserDetailsPage(page).activatedNo).toBeVisible();
});

Then('the user should be admin', async ({ page }) => {
    await expect(new UserDetailsPage(page).adminYes).toBeVisible();
});

Then('the user should not be admin', async ({ page }) => {
    await expect(new UserDetailsPage(page).adminNo).toBeVisible();
});
When('I enter mismatched confirm password', async ({ page }) => {
    await new AddUserPage(page).fillConfirmPasswordWith('zleHaslo1234!');
});

Then('I should see a password mismatch error', async ({ page }) => {
    await expect(new AddUserPage(page).passwordMismatchError).toBeVisible();
});