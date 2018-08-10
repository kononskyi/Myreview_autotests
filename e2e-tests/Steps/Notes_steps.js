let NotesPage = require('../classes/Notes');
let MenuPage = require('../classes/Menu');
let menuPage = new MenuPage;
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

    async openAndfillFields(title, comment) {
        await this.click(menuPage.form);
        await this.fillTitle(title);
        await this.fillComment(comment);
    }

    async clickSave() {
        await this.click(this.saveButton);
        await this.waitUntilElementIsInvisible(this.objectiveDialogWind);
    }

    async checkJustAddedObjective() {

    }


}

module.exports = NotesSteps;