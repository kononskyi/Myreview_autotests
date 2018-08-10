"use strict";

let LoginSteps = require('../Steps/Login_steps');
let loginSteps = new LoginSteps();
const {Given, When, Then} = require('cucumber');
browser.ignoreSynchronization = true;

Given(/^Login page is opened$/, async () => {
    await loginSteps.before();
    await loginSteps.loginDownloading();
});

When(/^User type "([^"]*)" into username field$/, async (login) => {
    await loginSteps.fillLogin(login);
});

When(/^User type "([^"]*)" into password field$/, async (password) => {
    await loginSteps.fillPassword(password);
});

When(/^Click on login button$/, async () => {
    await loginSteps.clickLoginButton();
});

Then(/^User - "([^"]*)" should be logged into the system$/, async (username) => {
    await loginSteps.checkIfUserIsLoggedSuccessfully(username);
    await loginSteps.closeTab();
});

Then(/^User shouldn't be logged into the system$/, async () => {
    await loginSteps.checkIfUserIsntLoggedSuccessfully();
    await loginSteps.closeTab();
});

When(/^Leave password field empty$/, async () => {
    await loginSteps.clearPassword();
});

Then(/^User shouldn't be logged into the system with no error$/, async () => {
    await loginSteps.checkIfUserIsntLoggedSuccessfullyNoError();
});

When(/^Leave username field empty$/, async () => {
    await loginSteps.clearLogin();
});

Then(/^Password is displayed in bullets$/, async () => {
    await loginSteps.makeScreen();
});

When(/^User try to type 256 symbols into username field and 65 symbols into password field$/, async () => {
    await loginSteps.checkUsernameAndPasswordMaxLength();
});

When(/^Copy symbols from password field and paste in username field$/, async () => {
    await loginSteps.copyAndPasteFromField();
});

Then(/^No symbols in username field is displayed$/, async () => {
    await loginSteps.checkCopiedText(loginSteps.username);
});

When(/^Click on Levi9 logo$/, async () => {
    await loginSteps.clickLogo();
});

Then(/^Page is refreshed$/, async () => {
    await loginSteps.checkRefreshedPage();
});

