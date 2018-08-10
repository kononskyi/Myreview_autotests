"use strict";

let NotesSteps = require('../Steps/Notes_steps');
let notesSteps = new NotesSteps();
const {When, Then} = require('cucumber');
browser.ignoreSynchronization = true;

When(/^User click on Add objective button$/, async () => {
    await notesSteps.clickAddObjective();
});

When(/^Go to Notes item, enter "([^"]*)" in title and "([^"]*)" in comment field$/, async (title,comment) => {
    await notesSteps.openAndfillFields(title,comment);
});

When(/^Click on Save button$/, async () => {
    await notesSteps.clickSave();
});

Then(/^New objective is created$/, async () => {
 // await notesSteps.checkJustAddedObjective();
});
