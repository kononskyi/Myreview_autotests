"use strict";

let NotesSteps = require('../Steps/Notes_steps');
let notesSteps = new NotesSteps();
const {Given, When, Then} = require('cucumber');
browser.ignoreSynchronization = true;

When(/^User click on Add objective button$/, async () => {
    await notesSteps.clickAddObjective();
});

When(/^Go to Notes item, enter "([^"]*)" in title and "([^"]*)" in comment field$/, async (title,comment) => {
    await notesSteps.openAndFillFields(title,comment);
});

When(/^Click on Save button$/, async () => {
    await notesSteps.clickSave();
});

Then(/^New objective is created with "([^"]*)" and "([^"]*)"$/, async (title,comment) => {
   await notesSteps.checkJustAddedObjective(title,comment);
   await notesSteps.closeTab();
});

When(/^Go to Notes item, enter "([^"]*)" symbols in title and "([^"]*)" symbols in comment field$/,{timeout: 4 * 5000}, async (symb1,symb2) => {
    await notesSteps.fillLongInFields(symb1,symb2);
});

Then(/^New objective is created with 255 symbols in title and 2500 symbols in comment$/, async () => {
    await notesSteps.checkNewObjectiveLong();
});

Then(/^New objective isn't created with invalid info in title field$/, async () => {
    await notesSteps.objectIsntAddedforTitle();
});

Then(/^New objective isn't created with invalid info in comment field$/, async () => {
    await notesSteps.objectIsntAddedforComment();
    await notesSteps.closeTab();
});

When(/^Click on x button$/, async () => {
    await notesSteps.clickX();
});

Then(/^Objective dialog window is disappeared$/, async () => {
    await notesSteps.checkObjectiveWindClose();
});

When(/^Click on Cancel button$/, async () => {
    await notesSteps.clickCancel();
});

When(/^Clear deadline field$/, async () => {
    await notesSteps.clearDeadline();
});

Then(/^New objective isn't created with empty deadline field$/, async () => {
    await notesSteps.objectIsntAddedforDeadline();
});

Then(/^New objective isn't created with empty deadline field$/, async () => {
    await notesSteps.objectIsntAddedforDeadline();
});

Then(/^New objective isn't created with invalid data in all fields$/, async () => {
    await notesSteps.objectIsntAdded();
});

When(/^User click on Delete button$/, async () => {
    await notesSteps.clickOnDeleteButton();
});

When(/^Confirm deleting$/, async () => {
    await notesSteps.confirmDeleting();
});

Given(/^Notes page is opened for user "([^"]*)"$/, async (login) => {
    await notesSteps.checkbasicPage(login);
});

Then(/^Last objective is deleted$/, async () => {
    await notesSteps.checkDeleting();
});

When(/^Click on Cancel button on Delete objective dialog window$/, async () => {
    await notesSteps.clickOnCancelButton();
});

Then(/^Delete objective window disappeared$/, async () => {
    await this.waitUntilElementIsInvisible(this.deleteObjWindow);
});



