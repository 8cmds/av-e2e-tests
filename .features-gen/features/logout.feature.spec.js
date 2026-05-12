// Generated from: features\logout.feature
import { test } from "playwright-bdd";

test.describe('Logout', () => {

  test('Successful logout', async ({ Given, When, Then, And, page }) => { 
    await Given('I am on the login page', null, { page }); 
    await When('I fill in the login form with valid admin credentials', null, { page }); 
    await And('I click the Login button', null, { page }); 
    await Then('I should see the User Management page', null, { page }); 
    await When('I click the Logout link', null, { page }); 
    await Then('I should see the login page', null, { page }); 
  });

  test('Successful logout via Logout link', async ({ Given, When, Then, And, page }) => { 
    await Given('I am on the login page', null, { page }); 
    await When('I fill in the login form with valid user credentials', null, { page }); 
    await And('I click the Login button', null, { page }); 
    await Then('I should see the User Details page', null, { page }); 
    await When('I click the Logout link', null, { page }); 
    await Then('I should see the login page', null, { page }); 
  });

  test('Successful logout via Back button', async ({ Given, When, Then, And, page }) => { 
    await Given('I am on the login page', null, { page }); 
    await When('I fill in the login form with valid user credentials', null, { page }); 
    await And('I click the Login button', null, { page }); 
    await Then('I should see the User Details page', null, { page }); 
    await When('I click the Back button', null, { page }); 
    await Then('I should see the login page', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\logout.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I am on the login page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When I fill in the login form with valid admin credentials","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"And I click the Login button","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then I should see the User Management page","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When I click the Logout link","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then I should see the login page","stepMatchArguments":[]}]},
  {"pwTestLine":15,"pickleLine":11,"tags":[],"steps":[{"pwStepLine":16,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Given I am on the login page","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When I fill in the login form with valid user credentials","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"And I click the Login button","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then I should see the User Details page","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"When I click the Logout link","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then I should see the login page","stepMatchArguments":[]}]},
  {"pwTestLine":24,"pickleLine":19,"tags":[],"steps":[{"pwStepLine":25,"gherkinStepLine":20,"keywordType":"Context","textWithKeyword":"Given I am on the login page","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"When I fill in the login form with valid user credentials","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":22,"keywordType":"Action","textWithKeyword":"And I click the Login button","stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":23,"keywordType":"Outcome","textWithKeyword":"Then I should see the User Details page","stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":24,"keywordType":"Action","textWithKeyword":"When I click the Back button","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":25,"keywordType":"Outcome","textWithKeyword":"Then I should see the login page","stepMatchArguments":[]}]},
]; // bdd-data-end