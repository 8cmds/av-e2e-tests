Feature: Logout

    Scenario: Successful logout
        Given I am on the login page
        When I fill in the login form with valid admin credentials
        And I click the Login button
        Then I should see the User Management page
        When I click the Logout link
        Then I should see the login page

    Scenario: Successful logout via Logout link
        Given I am on the login page
        When I fill in the login form with valid user credentials
        And I click the Login button
        Then I should see the User Details page
        When I click the Logout link
        Then I should see the login page

    Scenario: Successful logout via Back button
        Given I am on the login page
        When I fill in the login form with valid user credentials
        And I click the Login button
        Then I should see the User Details page
        When I click the Back button
        Then I should see the login page