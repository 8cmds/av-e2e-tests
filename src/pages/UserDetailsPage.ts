import { type Page, type Locator } from '@playwright/test';
import { logger } from '../helpers/logger.js';

export class UserDetailsPage {
    readonly page: Page;
    readonly heading: Locator;
    readonly activatedYes: Locator;
    readonly activatedNo: Locator;
    readonly adminYes: Locator;
    readonly adminNo: Locator;
    readonly backButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.heading = page.getByRole('heading', { name: 'User Details' });
        this.activatedYes = page.getByText('Activated: Yes');
        this.activatedNo = page.getByText('Activated: No');
        this.adminYes = page.getByText('Admin: Yes');
        this.adminNo = page.getByText('Admin: No');
        this.backButton = page.getByRole('button', { name: 'Back' });
    }

    async clickBack() {
        try {
            await this.backButton.click();
        } catch (error) {
            logger.error('Failed to click Back', { error });
            throw error;
        }
    }
}