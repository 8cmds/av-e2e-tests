// Generated from: features\userActions.feature
import { test } from "playwright-bdd";

test.describe('User Actions', () => {

  test('Deactivate an active user', async ({ Given, When, Then, And, page }) => { 
    await Given('I am on the login page', null, { page }); 
    await When('I fill in the login form with valid admin credentials', null, { page }); 
    await And('I click the Login button', null, { page }); 
    await Then('I should see the User Management page', null, { page }); 
    await When('I click the Add User button', null, { page }); 
    await Then('I should see the Add User form', null, { page }); 
    await When('I fill in all user fields', null, { page }); 
    await And('I check the Is Activated checkbox', null, { page }); 
    await And('I click the Submit button', null, { page }); 
    await Then('I should be redirected to the User Management page', null, { page }); 
    await When('I search for the test user', null, { page }); 
    await And('I click the Deactivate button for the test user', null, { page }); 
    await And('I click on the test user profile', null, { page }); 
    await Then('the user should not be activated', null, { page }); 
  });

  test('Activate an inactive user', async ({ Given, When, Then, And, page }) => { 
    await Given('I am on the login page', null, { page }); 
    await When('I fill in the login form with valid admin credentials', null, { page }); 
    await And('I click the Login button', null, { page }); 
    await Then('I should see the User Management page', null, { page }); 
    await When('I click the Add User button', null, { page }); 
    await Then('I should see the Add User form', null, { page }); 
    await When('I fill in the required user fields', null, { page }); 
    await And('I click the Submit button', null, { page }); 
    await Then('I should be redirected to the User Management page', null, { page }); 
    await When('I search for the test user', null, { page }); 
    await And('I click the Activate button for the test user', null, { page }); 
    await And('I click on the test user profile', null, { page }); 
    await Then('the user should be activated', null, { page }); 
  });

  test('Delete a user', async ({ Given, When, Then, And, page }) => { 
    await Given('I am on the login page', null, { page }); 
    await When('I fill in the login form with valid admin credentials', null, { page }); 
    await And('I click the Login button', null, { page }); 
    await Then('I should see the User Management page', null, { page }); 
    await When('I click the Add User button', null, { page }); 
    await Then('I should see the Add User form', null, { page }); 
    await When('I fill in the required user fields', null, { page }); 
    await And('I click the Submit button', null, { page }); 
    await Then('I should be redirected to the User Management page', null, { page }); 
    await When('I search for the test user', null, { page }); 
    await And('I click the Delete button for the test user', null, { page }); 
    await And('I confirm the deletion', null, { page }); 
    await When('I search for the test user', null, { page }); 
    await Then('the test user should no longer be visible on the list', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\userActions.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I am on the login page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When I fill in the login form with valid admin credentials","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"And I click the Login button","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then I should see the User Management page","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When I click the Add User button","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then I should see the Add User form","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"When I fill in all user fields","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"And I check the Is Activated checkbox","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"And I click the Submit button","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then I should be redirected to the User Management page","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"When I search for the test user","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"And I click the Deactivate button for the test user","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"And I click on the test user profile","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then the user should not be activated","stepMatchArguments":[]}]},
  {"pwTestLine":23,"pickleLine":19,"tags":[],"steps":[{"pwStepLine":24,"gherkinStepLine":20,"keywordType":"Context","textWithKeyword":"Given I am on the login page","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"When I fill in the login form with valid admin credentials","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":22,"keywordType":"Action","textWithKeyword":"And I click the Login button","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":23,"keywordType":"Outcome","textWithKeyword":"Then I should see the User Management page","stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":24,"keywordType":"Action","textWithKeyword":"When I click the Add User button","stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":25,"keywordType":"Outcome","textWithKeyword":"Then I should see the Add User form","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":26,"keywordType":"Action","textWithKeyword":"When I fill in the required user fields","stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":27,"keywordType":"Action","textWithKeyword":"And I click the Submit button","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":28,"keywordType":"Outcome","textWithKeyword":"Then I should be redirected to the User Management page","stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":29,"keywordType":"Action","textWithKeyword":"When I search for the test user","stepMatchArguments":[]},{"pwStepLine":34,"gherkinStepLine":30,"keywordType":"Action","textWithKeyword":"And I click the Activate button for the test user","stepMatchArguments":[]},{"pwStepLine":35,"gherkinStepLine":31,"keywordType":"Action","textWithKeyword":"And I click on the test user profile","stepMatchArguments":[]},{"pwStepLine":36,"gherkinStepLine":32,"keywordType":"Outcome","textWithKeyword":"Then the user should be activated","stepMatchArguments":[]}]},
  {"pwTestLine":39,"pickleLine":34,"tags":[],"steps":[{"pwStepLine":40,"gherkinStepLine":35,"keywordType":"Context","textWithKeyword":"Given I am on the login page","stepMatchArguments":[]},{"pwStepLine":41,"gherkinStepLine":36,"keywordType":"Action","textWithKeyword":"When I fill in the login form with valid admin credentials","stepMatchArguments":[]},{"pwStepLine":42,"gherkinStepLine":37,"keywordType":"Action","textWithKeyword":"And I click the Login button","stepMatchArguments":[]},{"pwStepLine":43,"gherkinStepLine":38,"keywordType":"Outcome","textWithKeyword":"Then I should see the User Management page","stepMatchArguments":[]},{"pwStepLine":44,"gherkinStepLine":39,"keywordType":"Action","textWithKeyword":"When I click the Add User button","stepMatchArguments":[]},{"pwStepLine":45,"gherkinStepLine":40,"keywordType":"Outcome","textWithKeyword":"Then I should see the Add User form","stepMatchArguments":[]},{"pwStepLine":46,"gherkinStepLine":41,"keywordType":"Action","textWithKeyword":"When I fill in the required user fields","stepMatchArguments":[]},{"pwStepLine":47,"gherkinStepLine":42,"keywordType":"Action","textWithKeyword":"And I click the Submit button","stepMatchArguments":[]},{"pwStepLine":48,"gherkinStepLine":43,"keywordType":"Outcome","textWithKeyword":"Then I should be redirected to the User Management page","stepMatchArguments":[]},{"pwStepLine":49,"gherkinStepLine":44,"keywordType":"Action","textWithKeyword":"When I search for the test user","stepMatchArguments":[]},{"pwStepLine":50,"gherkinStepLine":45,"keywordType":"Action","textWithKeyword":"And I click the Delete button for the test user","stepMatchArguments":[]},{"pwStepLine":51,"gherkinStepLine":46,"keywordType":"Action","textWithKeyword":"And I confirm the deletion","stepMatchArguments":[]},{"pwStepLine":52,"gherkinStepLine":47,"keywordType":"Action","textWithKeyword":"When I search for the test user","stepMatchArguments":[]},{"pwStepLine":53,"gherkinStepLine":48,"keywordType":"Outcome","textWithKeyword":"Then the test user should no longer be visible on the list","stepMatchArguments":[]}]},
]; // bdd-data-end