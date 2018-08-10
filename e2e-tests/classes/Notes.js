let Helpers = require('../helpers/Helpers');

class Notes extends Helpers {

    constructor() {
        super();
        this.addObjectiveButton = by.css("button[ng-click='vm.openNewGoalModal()']");
        this.objectiveDialogWind = by.css("md-dialog[aria-label='Edit']");
        this.titleField = by.css("[name='title']");
        this.commentField = by.css("[name='Comment by employee']");
        this.deadlineField = by.css("input[class='md-datepicker-input md-input']");
        this.saveButton = by.css("button[ng-click='vm.save()']");
        this.formHasBeenSent = by.css("div[class='md-whiteframe-4dp form-status']");
    }

    async fillTitle(text) {
        await this.waitUntilElementIsInvisible(this.titleField);
        await element(this.titleField).sendKeys(text);
    }

    async fillComment(text) {
        await this.waitUntilElementIsInvisible(this.commentField);
        await element(this.commentField).sendKeys(text);
    }


}

module.exports = Notes;