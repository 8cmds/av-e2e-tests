import { type Page, type Locator } from '@playwright/test';
import { logger } from '../helpers/logger.js';

export class AddUserPage {
    readonly page: Page;
    readonly heading: Locator;
    readonly nameInput: Locator;
    readonly surnameInput: Locator;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly confirmPasswordInput: Locator;
    readonly phoneNumberInput: Locator;
    readonly birthDateInput: Locator;
    readonly positionSelect: Locator;
    readonly salaryInput: Locator;
    readonly contractTypeSelect: Locator;
    readonly startTimeInput: Locator;
    readonly endTimeInput: Locator;
    readonly notesInput: Locator;
    readonly isActivatedCheckbox: Locator;
    readonly isAdminCheckbox: Locator;
    readonly submitButton: Locator;
    readonly cancelButton: Locator;
    readonly passwordMismatchError: Locator;

    constructor(page: Page) {
        this.page = page;
        this.heading = page.getByRole('heading', { name: 'Add User' });
        this.nameInput = page.getByRole('textbox', { name: 'Name', exact: true });
        this.surnameInput = page.getByRole('textbox', { name: 'Surname' });
        this.emailInput = page.getByRole('textbox', { name: 'Email' });
        this.passwordInput = page.getByRole('textbox', { name: 'Password', exact: true });
        this.confirmPasswordInput = page.getByRole('textbox', { name: 'Confirm Password' });
        this.phoneNumberInput = page.getByRole('textbox', { name: 'Phone Number' });
        this.birthDateInput = page.getByRole('textbox', { name: 'Birth Date' });
        this.positionSelect = page.getByLabel('Position');
        this.salaryInput = page.getByRole('textbox', { name: 'Salary' });
        this.contractTypeSelect = page.getByLabel('Contract Type');
        this.startTimeInput = page.getByRole('textbox', { name: 'Start Time' });
        this.endTimeInput = page.getByRole('textbox', { name: 'End Time' });
        this.notesInput = page.getByRole('textbox', { name: 'Notes' });
        this.isActivatedCheckbox = page.getByRole('checkbox', { name: 'Is Activated' });
        this.isAdminCheckbox = page.getByRole('checkbox', { name: 'Is Admin' });
        this.submitButton = page.getByRole('button', { name: 'Submit' });
        this.cancelButton = page.getByRole('button', { name: 'Cancel' });
        this.passwordMismatchError = page.getByText('Passwords must match');
    }

    async fillName(name: string) {
        try {
            logger.info('Filling name: ' + name);
            await this.nameInput.fill(name);
        } catch (error) {
            logger.error('Failed to fill name', { error });
            throw error;
        }
    }

    async fillSurname(surname: string) {
        try {
            logger.info('Filling surname ' + surname);
            await this.surnameInput.fill(surname);
        } catch (error) {
            logger.error('Failed to fill surname', { error });
            throw error;
        }
    }

    async fillEmail(email: string) {
        try {
            logger.info('Filling email: ' + email);
            await this.emailInput.fill(email);
        } catch (error) {
            logger.error('Failed to fill email', { error });
            throw error;
        }
    }

    async fillPassword(password: string) {
        try {
            await this.passwordInput.fill(password);
            await this.confirmPasswordInput.fill(password);
        } catch (error) {
            logger.error('Failed to fill password', { error });
            throw error;
        }
    }

    async fillPhone(phone: string) {
        try {
            await this.phoneNumberInput.fill(phone);
        } catch (error) {
            logger.error('Failed to fill phone', { error });
            throw error;
        }
    }

    async fillBirthDate(birthDate: string) {
        try {
            await this.birthDateInput.fill(birthDate);
        } catch (error) {
            logger.error('Failed to fill birth date', { error });
            throw error;
        }
    }

    async selectPosition(position: string) {
        try {
            await this.positionSelect.selectOption(position);
        } catch (error) {
            logger.error('Failed to select position', { error });
            throw error;
        }
    }

    async fillSalary(salary: string) {
        try {
            await this.salaryInput.fill(salary);
        } catch (error) {
            logger.error('Failed to fill salary', { error });
            throw error;
        }
    }

    async selectContractType(contractType: string) {
        try {
            await this.contractTypeSelect.selectOption(contractType);
        } catch (error) {
            logger.error('Failed to select contract type', { error });
            throw error;
        }
    }

    async fillStartTime(startTime: string) {
        try {
            await this.startTimeInput.fill(startTime);
        } catch (error) {
            logger.error('Failed to fill start time', { error });
            throw error;
        }
    }

    async fillEndTime(endTime: string) {
        try {
            await this.endTimeInput.fill(endTime);
        } catch (error) {
            logger.error('Failed to fill end time', { error });
            throw error;
        }
    }

    async fillNotes(notes: string) {
        try {
            await this.notesInput.fill(notes);
        } catch (error) {
            logger.error('Failed to fill notes', { error });
            throw error;
        }
    }

    async checkIsActivated() {
        try {
            await this.isActivatedCheckbox.check();
        } catch (error) {
            logger.error('Failed to check Is Activated', { error });
            throw error;
        }
    }

    async checkIsAdmin() {
        try {
            await this.isAdminCheckbox.check();
        } catch (error) {
            logger.error('Failed to check Is Admin', { error });
            throw error;
        }
    }

    async clickSubmit() {
        try {
            await this.submitButton.click();
        } catch (error) {
            logger.error('Failed to click Submit', { error });
            throw error;
        }
    }

    async clickCancel() {
        try {
            await this.cancelButton.click();
        } catch (error) {
            logger.error('Failed to click Cancel', { error });
            throw error;
        }
    }
    async fillConfirmPasswordWith(password: string) {
        try {
            await this.confirmPasswordInput.fill(password);
        } catch (error) {
            logger.error('Failed to fill confirm password', { error });
            throw error;
        }
    }
}