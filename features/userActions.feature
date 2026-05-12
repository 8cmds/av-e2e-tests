Feature: User Actions

    Scenario: Deactivate an active user
        Given I am on the login page
        When I fill in the login form with valid admin credentials
        And I click the Login button
        Then I should see the User Management page
        When I click the Add User button
        Then I should see the Add User form
        When I fill in all user fields
        And I check the Is Activated checkbox
        And I click the Submit button
        Then I should be redirected to the User Management page
        When I search for the test user
        And I click the Deactivate button for the test user
        And I click on the test user profile
        Then the user should not be activated

    Scenario: Activate an inactive user
        Given I am on the login page
        When I fill in the login form with valid admin credentials
        And I click the Login button
        Then I should see the User Management page
        When I click the Add User button
        Then I should see the Add User form
        When I fill in the required user fields
        And I click the Submit button
        Then I should be redirected to the User Management page
        When I search for the test user
        And I click the Activate button for the test user
        And I click on the test user profile
        Then the user should be activated

    Scenario: Delete a user
        Given I am on the login page
        When I fill in the login form with valid admin credentials
        And I click the Login button
        Then I should see the User Management page
        When I click the Add User button
        Then I should see the Add User form
        When I fill in the required user fields
        And I click the Submit button
        Then I should be redirected to the User Management page
        When I search for the test user
        And I click the Delete button for the test user
        And I confirm the deletion
        When I search for the test user
        Then the test user should no longer be visible on the list