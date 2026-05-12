Feature: Add User

    Background:
        Given I am on the login page
        When I fill in the login form with valid admin credentials
        And I click the Login button
        Then I should see the User Management page
        When I click the Add User button
        Then I should see the Add User form

    Scenario: Successfully add an inactive user with required fields only
        When I fill in the required user fields
        And I click the Submit button
        Then I should be redirected to the User Management page
        When I search for the test user
        Then the new user should be visible on the list
        When I click on the test user profile
        Then the user should not be activated
        And the user should not be admin

    Scenario: Successfully add an active user with all fields
        When I fill in all user fields
        And I check the Is Activated checkbox
        And I click the Submit button
        Then I should be redirected to the User Management page
        When I search for the test user
        Then the new user should be visible on the list
        When I click on the test user profile
        Then the user should be activated
        And the user should not be admin

    Scenario: Successfully add an admin user
        When I fill in the required user fields
        And I check the Is Activated checkbox
        And I check the Is Admin checkbox
        And I click the Submit button
        Then I should be redirected to the User Management page
        When I search for the test user
        Then the new user should be visible on the list
        When I click on the test user profile
        Then the user should be activated
        And the user should be admin

    Scenario: Failed to add a user with mismatched passwords
        When I fill in the required user fields
        And I enter mismatched confirm password
        And I click the Submit button
        Then I should see a password mismatch error