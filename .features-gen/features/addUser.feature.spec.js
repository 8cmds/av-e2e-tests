// Generated from: features\addUser.feature
import { test } from "playwright-bdd";

test.describe('Add User', () => {

  test.beforeEach('Background', async ({ Given, When, Then, And, page }, testInfo) => { if (testInfo.error) return;
    await Given('I am on the login page', null, { page }); 
    await When('I fill in the login form with valid admin credentials', null, { page }); 
    await And('I click the Login button', null, { page }); 
    await Then('I should see the User Management page', null, { page }); 
    await When('I click the Add User button', null, { page }); 
    await Then('I should see the Add User form', null, { page }); 
  });
  
  test('Successfully add an inactive user with required fields only', async ({ When, Then, And, page }) => { 
    await When('I fill in the required user fields', null, { page }); 
    await And('I click the Submit button', null, { page }); 
    await Then('I should be redirected to the User Management page', null, { page }); 
    await When('I search for the test user', null, { page }); 
    await Then('the new user should be visible on the list', null, { page }); 
    await When('I click on the test user profile', null, { page }); 
    await Then('the user should not be activated', null, { page }); 
    await And('the user should not be admin', null, { page }); 
  });

  test('Successfully add an active user with all fields', async ({ When, Then, And, page }) => { 
    await When('I fill in all user fields', null, { page }); 
    await And('I check the Is Activated checkbox', null, { page }); 
    await And('I click the Submit button', null, { page }); 
    await Then('I should be redirected to the User Management page', null, { page }); 
    await When('I search for the test user', null, { page }); 
    await Then('the new user should be visible on the list', null, { page }); 
    await When('I click on the test user profile', null, { page }); 
    await Then('the user should be activated', null, { page }); 
    await And('the user should not be admin', null, { page }); 
  });

  test('Successfully add an admin user', async ({ When, Then, And, page }) => { 
    await When('I fill in the required user fields', null, { page }); 
    await And('I check the Is Activated checkbox', null, { page }); 
    await And('I check the Is Admin checkbox', null, { page }); 
    await And('I click the Submit button', null, { page }); 
    await Then('I should be redirected to the User Management page', null, { page }); 
    await When('I search for the test user', null, { page }); 
    await Then('the new user should be visible on the list', null, { page }); 
    await When('I click on the test user profile', null, { page }); 
    await Then('the user should be activated', null, { page }); 
    await And('the user should be admin', null, { page }); 
  });

  test('Failed to add a user with mismatched passwords', async ({ When, Then, And, page }) => { 
    await When('I fill in the required user fields', null, { page }); 
    await And('I enter mismatched confirm password', null, { page }); 
    await And('I click the Submit button', null, { page }); 
    await Then('I should see a password mismatch error', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\addUser.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":15,"pickleLine":11,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I am on the login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When I fill in the login form with valid admin credentials","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"And I click the Login button","isBg":true,"stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then I should see the User Management page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When I click the Add User button","isBg":true,"stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then I should see the Add User form","isBg":true,"stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When I fill in the required user fields","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"And I click the Submit button","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then I should be redirected to the User Management page","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"When I search for the test user","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then the new user should be visible on the list","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"When I click on the test user profile","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then the user should not be activated","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"And the user should not be admin","stepMatchArguments":[]}]},
  {"pwTestLine":26,"pickleLine":21,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I am on the login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When I fill in the login form with valid admin credentials","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"And I click the Login button","isBg":true,"stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then I should see the User Management page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When I click the Add User button","isBg":true,"stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then I should see the Add User form","isBg":true,"stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":22,"keywordType":"Action","textWithKeyword":"When I fill in all user fields","stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"And I check the Is Activated checkbox","stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":24,"keywordType":"Action","textWithKeyword":"And I click the Submit button","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":25,"keywordType":"Outcome","textWithKeyword":"Then I should be redirected to the User Management page","stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":26,"keywordType":"Action","textWithKeyword":"When I search for the test user","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":27,"keywordType":"Outcome","textWithKeyword":"Then the new user should be visible on the list","stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":28,"keywordType":"Action","textWithKeyword":"When I click on the test user profile","stepMatchArguments":[]},{"pwStepLine":34,"gherkinStepLine":29,"keywordType":"Outcome","textWithKeyword":"Then the user should be activated","stepMatchArguments":[]},{"pwStepLine":35,"gherkinStepLine":30,"keywordType":"Outcome","textWithKeyword":"And the user should not be admin","stepMatchArguments":[]}]},
  {"pwTestLine":38,"pickleLine":32,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I am on the login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When I fill in the login form with valid admin credentials","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"And I click the Login button","isBg":true,"stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then I should see the User Management page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When I click the Add User button","isBg":true,"stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then I should see the Add User form","isBg":true,"stepMatchArguments":[]},{"pwStepLine":39,"gherkinStepLine":33,"keywordType":"Action","textWithKeyword":"When I fill in the required user fields","stepMatchArguments":[]},{"pwStepLine":40,"gherkinStepLine":34,"keywordType":"Action","textWithKeyword":"And I check the Is Activated checkbox","stepMatchArguments":[]},{"pwStepLine":41,"gherkinStepLine":35,"keywordType":"Action","textWithKeyword":"And I check the Is Admin checkbox","stepMatchArguments":[]},{"pwStepLine":42,"gherkinStepLine":36,"keywordType":"Action","textWithKeyword":"And I click the Submit button","stepMatchArguments":[]},{"pwStepLine":43,"gherkinStepLine":37,"keywordType":"Outcome","textWithKeyword":"Then I should be redirected to the User Management page","stepMatchArguments":[]},{"pwStepLine":44,"gherkinStepLine":38,"keywordType":"Action","textWithKeyword":"When I search for the test user","stepMatchArguments":[]},{"pwStepLine":45,"gherkinStepLine":39,"keywordType":"Outcome","textWithKeyword":"Then the new user should be visible on the list","stepMatchArguments":[]},{"pwStepLine":46,"gherkinStepLine":40,"keywordType":"Action","textWithKeyword":"When I click on the test user profile","stepMatchArguments":[]},{"pwStepLine":47,"gherkinStepLine":41,"keywordType":"Outcome","textWithKeyword":"Then the user should be activated","stepMatchArguments":[]},{"pwStepLine":48,"gherkinStepLine":42,"keywordType":"Outcome","textWithKeyword":"And the user should be admin","stepMatchArguments":[]}]},
  {"pwTestLine":51,"pickleLine":44,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I am on the login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When I fill in the login form with valid admin credentials","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"And I click the Login button","isBg":true,"stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then I should see the User Management page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When I click the Add User button","isBg":true,"stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then I should see the Add User form","isBg":true,"stepMatchArguments":[]},{"pwStepLine":52,"gherkinStepLine":45,"keywordType":"Action","textWithKeyword":"When I fill in the required user fields","stepMatchArguments":[]},{"pwStepLine":53,"gherkinStepLine":46,"keywordType":"Action","textWithKeyword":"And I enter mismatched confirm password","stepMatchArguments":[]},{"pwStepLine":54,"gherkinStepLine":47,"keywordType":"Action","textWithKeyword":"And I click the Submit button","stepMatchArguments":[]},{"pwStepLine":55,"gherkinStepLine":48,"keywordType":"Outcome","textWithKeyword":"Then I should see a password mismatch error","stepMatchArguments":[]}]},
]; // bdd-data-end