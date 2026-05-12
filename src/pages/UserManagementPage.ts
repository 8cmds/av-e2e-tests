import { type Page, type Locator } from '@playwright/test';
import { logger } from '../helpers/logger.js';

export class UserManagementPage {
    readonly page: Page;
    readonly heading: Locator;
    readonly searchInput: Locator;
    readonly addUserButton: Locator;
    readonly logoutLink: Locator;
    readonly deleteModalConfirmButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.heading = page.getByRole('heading', { name: 'User Management' });
        this.searchInput = page.getByPlaceholder('Search by name or email...');
        this.addUserButton = page.getByRole('link', { name: 'Add User' });
        this.logoutLink = page.getByRole('link', { name: 'Logout' });
        this.deleteModalConfirmButton = page.locator('#delete-modal-delete-button');
    }

    getUserRow(name: string): Locator {
        return this.page.getByRole('row', { name: new RegExp(name) });
    }

    async clickLogout() {
        try {
            await this.logoutLink.click();
        } catch (error) {
            logger.error('Failed to click Logout', { error });
            throw error;
        }
    }

    async clickAddUser() {
        try {
            await this.addUserButton.click();
        } catch (error) {
            logger.error('Failed to click Add User', { error });
            throw error;
        }
    }

    async searchForUser(query: string) {
        try {
            await this.searchInput.fill(query);
        } catch (error) {
            logger.error('Failed to search for: ' + query, { error });
            throw error;
        }
    }

    async clickDeleteForUser(name: string) {
        try {
            await this.getUserRow(name).getByRole('button', { name: 'Delete' }).click();
        } catch (error) {
            logger.error('Failed to click Delete for: ' + name, { error });
            throw error;
        }
    }

    async clickUserActivationAndDeactivation(name: string) {
        try {
            await this.getUserRow(name).locator('#table-user-row-deactivate-button').click();
            await this.page.waitForLoadState('networkidle');
        } catch (error) {
            logger.error('Failed to toggle activation for: ' + name, { error });
            throw error;
        }
    }

    async confirmDeletion() {
        try {
            await this.deleteModalConfirmButton.click();
        } catch (error) {
            logger.error('Failed to confirm deletion', { error });
            throw error;
        }
    }

    async clickUserProfile(name: string) {
        try {
            logger.info('Opening profile for: ' + name);
            await this.page.getByRole('link', { name: name }).click();
        } catch (error) {
            logger.error('Failed to open profile for: ' + name, { error });
            throw error;
        }
    }
}