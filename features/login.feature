Feature: Login

    Scenario: Successful login as admin
        Given I am on the login page
        When I fill in the login form with valid admin credentials
        And I click the Login button
        Then I should see the User Management page

    Scenario: Successful login as non-admin user
        Given I am on the login page
        When I fill in the login form with valid user credentials
        And I click the Login button
        Then I should see the User Details page

    Scenario: Failed login with deactivated account
        Given I am on the login page
        When I fill in the login form with deactivated account credentials
        And I click the Login button
        Then I should see the deactivated account message

    Scenario: Failed login with wrong password
        Given I am on the login page
        When I fill in the login form with wrong password
        And I click the Login button
        Then I should see an error message

    Scenario: Failed login with empty fields
        Given I am on the login page
        When I click the Login button
        Then I should see validation errors

    Scenario: Failed login with empty password
        Given I am on the login page
        When I fill in the email field
        And I click the Login button
        Then I should see validation errors