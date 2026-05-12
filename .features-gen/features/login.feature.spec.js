// Generated from: features\login.feature
import { test } from "playwright-bdd";

test.describe('Login', () => {

  test('Successful login as admin', async ({ Given, When, Then, And, page }) => { 
    await Given('I am on the login page', null, { page }); 
    await When('I fill in the login form with valid admin credentials', null, { page }); 
    await And('I click the Login button', null, { page }); 
    await Then('I should see the User Management page', null, { page }); 
  });

  test('Successful login as non-admin user', async ({ Given, When, Then, And, page }) => { 
    await Given('I am on the login page', null, { page }); 
    await When('I fill in the login form with valid user credentials', null, { page }); 
    await And('I click the Login button', null, { page }); 
    await Then('I should see the User Details page', null, { page }); 
  });

  test('Failed login with deactivated account', async ({ Given, When, Then, And, page }) => { 
    await Given('I am on the login page', null, { page }); 
    await When('I fill in the login form with deactivated account credentials', null, { page }); 
    await And('I click the Login button', null, { page }); 
    await Then('I should see the deactivated account message', null, { page }); 
  });

  test('Failed login with wrong password', async ({ Given, When, Then, And, page }) => { 
    await Given('I am on the login page', null, { page }); 
    await When('I fill in the login form with wrong password', null, { page }); 
    await And('I click the Login button', null, { page }); 
    await Then('I should see an error message', null, { page }); 
  });

  test('Failed login with empty fields', async ({ Given, When, Then, page }) => { 
    await Given('I am on the login page', null, { page }); 
    await When('I click the Login button', null, { page }); 
    await Then('I should see validation errors', null, { page }); 
  });

  test('Failed login with empty password', async ({ Given, When, Then, And, page }) => { 
    await Given('I am on the login page', null, { page }); 
    await When('I fill in the email field', null, { page }); 
    await And('I click the Login button', null, { page }); 
    await Then('I should see validation errors', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I am on the login page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When I fill in the login form with valid admin credentials","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"And I click the Login button","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then I should see the User Management page","stepMatchArguments":[]}]},
  {"pwTestLine":13,"pickleLine":9,"tags":[],"steps":[{"pwStepLine":14,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given I am on the login page","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When I fill in the login form with valid user credentials","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"And I click the Login button","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then I should see the User Details page","stepMatchArguments":[]}]},
  {"pwTestLine":20,"pickleLine":15,"tags":[],"steps":[{"pwStepLine":21,"gherkinStepLine":16,"keywordType":"Context","textWithKeyword":"Given I am on the login page","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"When I fill in the login form with deactivated account credentials","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"And I click the Login button","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"Then I should see the deactivated account message","stepMatchArguments":[]}]},
  {"pwTestLine":27,"pickleLine":21,"tags":[],"steps":[{"pwStepLine":28,"gherkinStepLine":22,"keywordType":"Context","textWithKeyword":"Given I am on the login page","stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"When I fill in the login form with wrong password","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":24,"keywordType":"Action","textWithKeyword":"And I click the Login button","stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":25,"keywordType":"Outcome","textWithKeyword":"Then I should see an error message","stepMatchArguments":[]}]},
  {"pwTestLine":34,"pickleLine":27,"tags":[],"steps":[{"pwStepLine":35,"gherkinStepLine":28,"keywordType":"Context","textWithKeyword":"Given I am on the login page","stepMatchArguments":[]},{"pwStepLine":36,"gherkinStepLine":29,"keywordType":"Action","textWithKeyword":"When I click the Login button","stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":30,"keywordType":"Outcome","textWithKeyword":"Then I should see validation errors","stepMatchArguments":[]}]},
  {"pwTestLine":40,"pickleLine":32,"tags":[],"steps":[{"pwStepLine":41,"gherkinStepLine":33,"keywordType":"Context","textWithKeyword":"Given I am on the login page","stepMatchArguments":[]},{"pwStepLine":42,"gherkinStepLine":34,"keywordType":"Action","textWithKeyword":"When I fill in the email field","stepMatchArguments":[]},{"pwStepLine":43,"gherkinStepLine":35,"keywordType":"Action","textWithKeyword":"And I click the Login button","stepMatchArguments":[]},{"pwStepLine":44,"gherkinStepLine":36,"keywordType":"Outcome","textWithKeyword":"Then I should see validation errors","stepMatchArguments":[]}]},
]; // bdd-data-end