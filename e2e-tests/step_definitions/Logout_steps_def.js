"use strict";
let LogOutSteps = require('../Steps/Logout_steps');
let logOutSteps = new LogOutSteps;
const {Given, When, Then} = require('cucumber');
browser.ignoreSynchronization = true;


Given(/^User "([^"]*)" is logged successfully$/, async (login) => {
    await logOutSteps.userIsLogged(login, "Levi9Pro");
});

When(/^User click on drop-down button and choose logout item$/, async () => {
    await logOutSteps.logOut();
});

Then(/^User is logged out$/, async () => {
    await logOutSteps.checkLogOutAction();
});




