let NotesPage = require('../classes/Notes');
let MenuSteps = require('../classes/Menu')
let menuSteps = new MenuSteps();
let chai = require('chai');
require('chai');
let chaiAsPromised = require('chai-as-promised');
let expect = chai.expect;
chai.use(chaiAsPromised);

class NotesSteps extends NotesPage {

    async clickAddObjective() {
        await this.click(this.addObjectiveButton);
        await this.waitUntilElementIsVisible(this.objectiveDialogWind);
    }

    async openAndFillFields(title, comment) {
        //await this.click(menuPage.notes);
        await this.fillField(this.titleField, title);
        await this.fillField(this.commentField, comment);
    }

    async fillLongInFields(symb1, symb2) {
        await this.openAndFillLongSymbolsInField(symb1, symb2);
    }

    async clickSave() {
        await this.click(this.saveButton);
        await this.waitUntilElementIsInvisible(this.objectiveDialogWind);
    }

    async clickX() {
        await this.click(this.xButton);
    }

    async clickCancel() {
        await this.click(this.cancelButton);
    }

    async checkObjectiveWindClose() {
        await this.waitUntilElementIsInvisible(this.objectiveDialogWind);
    }

    async checkJustAddedObjective(title, comment) {
        await this.browserSleep(1000);
        await this.objectiveTittleCheck(this.titleScope, title);
        await this.objectiveCommentCheck(this.commentScope, comment);
    }

    async checkNewObjectiveLong() {
        await this.checkJustAddedObjectiveLong();
    }

    async objectIsntAddedforTitle() {
        await expect(element(this.saveButton).isEnabled()).to.eventually.false;
        await this.waitUntilElementIsVisible(this.objectiveDialogWind);
        await this.click(this.objectiveDialogWindHeader);
        await this.waitUntilElementIsVisible(this.titleErrorMes);
        await expect(element(this.titleErrorMes).getText()).to.become("Objective title must be at least 10 and up to 255 characters long");
    }

    async objectIsntAddedforComment() {
        await this.waitUntilElementIsVisible(this.objectiveDialogWind);
        await this.click(this.objectiveDialogWindHeader);
        await expect(element(this.saveButton).isEnabled()).to.eventually.false;
        await this.waitUntilElementIsVisible(this.commentErrorMes);
        await expect(element(this.commentErrorMes).getText()).to.become("Comment text should contain not more than 2500 characters");
    }

    async objectIsntAddedforDeadline() {
        await this.click(this.objectiveDialogWindHeader);
        await this.waitUntilElementIsVisible(this.deadlineErrorMes);
        await this.click(this.commentField);
        await expect(element(this.saveButton).isEnabled()).to.eventually.false;
        await this.waitUntilElementIsVisible(this.objectiveDialogWind);
        await expect(element(this.deadlineErrorMes).getText()).to.become("Please provide a valid deadline (at least one week from today)");
    }

    async objectIsntAdded() {
        await this.objectIsntAddedforTitle();
        await this.objectIsntAddedforComment();
        await this.objectIsntAddedforDeadline();
    }

    async clearDeadline() {
        await this.clear(this.deadlineField);
        await this.finedElementAndSendKeys(this.deadlineField, 1);
        await this.clear(this.deadlineField);
    }

    async clickOnDeleteButton() {
        await this.selectLastDeleteButtonAndClick();
        await this.waitUntilElementIsVisible(this.deleteObjWindow);

    }

    async confirmDeleting() {
        let beforedel = this.checkIfNotesListIsEmpty();
        await this.click(this.deleteObjWindowDelButton);
        await this.waitUntilElementIsInvisible(this.deleteObjWindow);
        if (await this.checkIfObjectCount() === await beforedel) {
            throw Error("Check last objective, error deleting!")
        }
    }

    async clickOnCancelButton() {
        let beforedel = this.checkIfNotesListIsEmpty();
        await this.clickOnDeleteButton();
        await this.click(this.cancelDeletingButton);
        if (await this.checkIfObjectCount() !== await beforedel) {
            throw Error("Check last objective, error deleting!")
        }
    }

    async checkbasicPage(login) {
        switch (login) {
            case "eptester1":
                break;
            case "eptester2":
                break;
            case "epphp1":
                break;
            case "epphp2":
                break;
            default:
                await this.click(menuSteps.notes);
                break;
        }
    }

    async checkDeleting() {
        await this.waitUntilElementIsInvisible(this.deleteObjWindow);
    }
}

module.exports = NotesSteps;