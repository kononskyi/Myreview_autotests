let Helpers = require('../helpers/Helpers');
let chai = require('chai');
require('chai');
let chaiAsPromised = require('chai-as-promised');
let expect = chai.expect;
chai.use(chaiAsPromised);

class Notes extends Helpers {

    constructor() {
        super();
        this.addObjectiveButton = by.css("*[ng-click='vm.openNewGoalModal()']");
        this.objectiveDialogWindHeader = by.css("*[class='md-toolbar-tools']");
        this.objectiveDialogWind = by.css("*[aria-label='Edit']");
        this.leviLogo = by.css("img[class='logo']");
        this.titleField = by.css("input[name='title']");
        this.titleErrorMes = by.css("[ng-show='edit.title.$touched && edit.title.$invalid']");
        this.deadlineErrorMes = by.css("#dialogContent_9>div>div>div:nth-child(6)");
        this.commentErrorMes = by.css("[ng-show='edit[comment.title].$error.maxlength']:first-of-type");
        this.commentField = by.css("textarea[name='Comment by employee']");
        this.deadlineField = by.css("input[class='md-datepicker-input md-input']");
        this.saveButton = by.css("button[ng-click='vm.save()']");
        this.formHasBeenSent = by.css("div[class='md-whiteframe-4dp form-status']");
        this.titleScope = by.css("*[class='col-xs-2 goalTitle ng-binding']");
        this.commentScope = by.css("*[class='employeeComment ng-binding']");
        this.xButton = by.css("button[class='md-icon-button md-button md-ink-ripple']");
        this.cancelButton = by.css("button[class='md-primary md-button md-ink-ripple']");
        this.deadlineField = by.css("input[class='md-datepicker-input md-input']");
        this.deleteObjWindow = by.css("md-dialog[role='dialog']");
        this.elementsNotes = by.css("div[class='clearfix goal']");
        this.deleteObjWindowDelButton = by.css("button[ng-click='vm.submit()']");
        this.cancelDeletingButton = by.css("button[ng-click='vm.cancel()']");
        this.delButtonsScope = by.css("button[ng-click='vm.deleteGoal()']");
    }

    async fillField(elem, text) {
        await this.clear(elem);
        return element(elem).sendKeys(text);
    }

    async objectiveTittleCheck(elm, text) {
        let scopetitle = element.all(elm).filter(async (items) => {
            return items;
        });
        return expect(scopetitle.last().getText()).to.become(text);
    }

    async objectiveCommentCheck(elm, text) {
        let scopeComment = element.all(elm).filter(async (items) => {
            return items;
        });
        return expect(scopeComment.last().getText()).to.become("Employee: " + text);
    }

    async checkJustAddedObjectiveLong() {
        await this.browserSleep(1000);
        let str = '';
        for (let i = 0; i < 255; i++) {
            str = str + 'S';
        }
        let str2 = '';
        for (let j = 0; j < 2500; j++) {
            str2 = str2 + 'S';
        }
        await this.objectiveTittleCheck(str);
        await this.objectiveCommentCheck(str2);
    }

    async openAndFillLongSymbolsInField(symb1, symb2) {
        await this.fillField(this.titleField, this.generateSymbolForTitle(symb1));
        await this.fillField(this.commentField, this.generateSymbolForComment(symb2));
    }

    generateSymbolForTitle(symb1) {
        let str = '';
        for (let i = 0; i < symb1; i++) {
            str = str + 'S';
        }
        return str;
    }

    generateSymbolForComment(symb2) {
        let str2 = '';
        for (let j = 0; j < symb2; j++) {
            str2 = str2 + 'S';
        }
        return str2;
    }

    async selectLastDeleteButtonAndClick() {
        let deleteButtonScope = element.all(this.delButtonsScope).last();
        return deleteButtonScope.click();
    }

    async checkIfNotesListIsEmpty() {
        let elementsScope = await element.all(this.elementsNotes).count();
        if (elementsScope === 0) {
            throw Error("Objective list is empty! Please, add new objective before deleting.");
        }
        return elementsScope;
    }

    async checkIfObjectCount() {
        return await element.all(this.elementsNotes).count();
    }
}

module.exports = Notes;