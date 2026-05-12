import { type Page, type Locator } from '@playwright/test';
import { logger } from '../helpers/logger.js';

export class LoginPage {
    readonly page: Page;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator;
    readonly deactivatedMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.emailInput = page.getByRole('textbox', { name: 'Email' });
        this.passwordInput = page.getByRole('textbox', { name: 'Password' });
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.errorMessage = page.getByText('Invalid email or password.');
        this.deactivatedMessage = page.getByText('Your account has been deactivated. Please contact your administrator.');
    }

    async goTo() {
        try {
            await this.page.goto('/login');
        } catch (error) {
            logger.error('Failed to navigate to login page', { error });
            throw error;
        }
    }

    async fillEmail(email: string) {
        try {
            await this.emailInput.fill(email);
        } catch (error) {
            logger.error('Failed to fill email', { error });
            throw error;
        }
    }

    async fillPassword(password: string) {
        try {
            await this.passwordInput.fill(password);
        } catch (error) {
            logger.error('Failed to fill password', { error });
            throw error;
        }
    }

    async clickLogin() {
        try {
            await this.loginButton.click();
        } catch (error) {
            logger.error('Failed to click Login button', { error });
            throw error;
        }
    }
}