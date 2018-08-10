"use strict";

let LoginSteps = require('../Steps/Login_steps');
let loginSteps = new LoginSteps();
let MenuSeps = require('../Steps/Menu_steps');
let menuSteps = new MenuSeps;
const {When, Then} = require('cucumber');
browser.ignoreSynchronization = true;

When(/^User "([^"]*)" click on Notes item$/, async (username) => {
    await menuSteps.clickNotes(username);
});

Then(/^Notes page is opened$/, async () => {
    await menuSteps.checkNotes();
    await menuSteps.closeTab();
});

When(/^User "([^"]*)" click on Form item$/, async (username) => {
    await menuSteps.clickForm(username);
});

Then(/^Form page is opened$/, async () => {
    await menuSteps.checkForm();
    await menuSteps.closeTab();
});

When(/^User "([^"]*)" click on Department item$/, async (username) => {
    await menuSteps.clickDepartment(username);
});

Then(/^Department page is opened$/, async () => {
    await menuSteps.checkDepartment();
    await menuSteps.closeTab();
});

When(/^User "([^"]*)" click on History item$/, async (username) => {
    await menuSteps.clickHistory(username);
});

Then(/^History page is opened$/, async () => {
    await menuSteps.checkHistory();
    await menuSteps.closeTab();
});

When(/^User "([^"]*)" click on Tools item$/, async (username) => {
    await menuSteps.clickTools(username);
});

Then(/^Tools page is opened for "([^"]*)"$/, async (username) => {
    await menuSteps.checkTools(username);
    await menuSteps.closeTab();
});

When(/^User "([^"]*)" click on user icon$/, async (username) => {
    await menuSteps.clickUserIcon(username);
});

Then(/^Drop down menu is opened$/, async () => {
    await menuSteps.checkDropDownMenu();
    await menuSteps.closeTab();
});

When(/^click on Form Example item$/, async () => {
    await menuSteps.clickFormExample();
});

Then(/^Form example page is opened$/, async () => {
    await menuSteps.checkFormExample();
    await menuSteps.closeTab();
});

When(/^click on About MyReview item$/, async () => {
    await menuSteps.clickAboutMyreview();
});

Then(/^About MyReview page is opened$/, async () => {
    await menuSteps.checkAboutMyreview();
    await menuSteps.closeTab();
});

When(/^click on Send your feedback item$/, async () => {
    await menuSteps.clickSendFeedback();
});

Then(/^Send your feedback dialog window is opened$/, async () => {
    await menuSteps.checkSendFeedback();
    await menuSteps.closeTab();
});

When(/^User "([^"]*)" click on menu items and Levi9Logo step by step$/, async (username) => {
    await menuSteps.clickOnMenuItems(username);
});

Then(/^"Basic" page is opened$/, async () => {
    await menuSteps.closeTab();
});