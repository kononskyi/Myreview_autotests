let MenuPage = require('../classes/Menu');
let LogOutPage = require('../classes/Logout');
let logOutPage = new LogOutPage;
let chai = require('chai');
require('chai');
let chaiAsPromised = require('chai-as-promised');
let expect = chai.expect;
chai.use(chaiAsPromised);

class MenuSteps extends MenuPage {

    async clickNotes(username) {
        await this.checkNavigationMenu(username);
        await this.click(this.notes);
    }

    async clickForm(username) {
        await this.checkNavigationMenu(username);
        await this.click(this.form);
    }

    async clickDepartment(username) {
        await this.checkNavigationMenu(username);
        await this.click(this.department);
    }

    async clickHistory(username) {
        await this.checkNavigationMenu(username);
        await this.click(this.history);
    }

    async clickTools(username) {
        await this.checkNavigationMenu(username);
        await this.click(this.tools);
    }

    async clickUserIcon(username) {
        await this.checkNavigationMenu(username);
        await this.click(logOutPage.dropDownButton);
    }

    async clickFormExample() {
        await this.click(this.formExample);
    }

    async clickAboutMyreview() {
        await this.click(this.aboutMyreview);
    }

    async clickSendFeedback() {
        await this.click(this.sendFeedbackButton);
    }

    async clickOnMenuItems(username) {
        switch (username) {
            case "eptester1":
                await this.click(this.form);
                await this.click(this.navbarLogo);
                await this.checkMenu(username);
                await this.click(this.notes);
                await this.click(this.navbarLogo);
                await this.checkMenu(username);
                await this.click(this.history);
                await this.click(this.navbarLogo);
                break;
            case "eptesterdm":
                await this.click(this.form);
                await this.click(this.navbarLogo);
                await this.checkMenu(username);
                await this.click(this.notes);
                await this.click(this.navbarLogo);
                await this.checkMenu(username);
                await this.click(this.history);
                await this.click(this.navbarLogo);
                await this.checkMenu(username);
                await this.click(this.department);
                await this.click(this.navbarLogo);
                break;
            default:
                await this.click(this.form);
                await this.click(this.navbarLogo);
                await this.checkMenu(username);
                await this.click(this.notes);
                await this.click(this.navbarLogo);
                await this.checkMenu(username);
                await this.click(this.history);
                await this.click(this.navbarLogo);
                await this.checkMenu(username);
                await this.click(this.department);
                await this.click(this.navbarLogo);
                await this.checkMenu(username);
                await this.click(this.tools);
                await this.click(this.navbarLogo);
        }
    }

    async checkNotes() {
        await expect(this.getCurrentUrl()).to.become("http://ep-ubuntu.levi9.com/app_dev.php/#/notes");
        await this.waitUntilElementIsVisible(this.notesObjectivesHeader);
        await this.waitUntilElementIsVisible(this.notesGoalHeaders);
    }

    async checkForm() {
        await expect(this.getCurrentUrl()).to.become("http://ep-ubuntu.levi9.com/app_dev.php/#/form");
        await this.waitUntilElementIsVisible(this.formOverallCommentsHeader);
        await this.waitUntilElementIsVisible(this.formSettingObjectivesHeader);
        await this.waitUntilElementIsVisible(this.formPerformanceEvaluation);
    }

    async checkDepartment() {
        await expect(this.getCurrentUrl()).to.become("http://ep-ubuntu.levi9.com/app_dev.php/#/department");
        await this.waitUntilElementIsVisible(this.departDepartmentManagerHeader);
        await this.waitUntilElementIsVisible(this.departFormProgress);
    }

    async checkHistory() {
        await this.waitUntilElementIsVisible(this.navScope);
        await expect(this.getCurrentUrl()).to.eventually.contains("http://ep-ubuntu.levi9.com/app_dev.php/#/history");
    }

    async checkTools(username) {
        await this.checkToolsMenu(username)
    }

    async checkDropDownMenu() {
        await this.waitUntilElementIsVisible(this.formExample);
        await this.waitUntilElementIsVisible(this.aboutMyreview);
        await this.waitUntilElementIsVisible(this.sendFeedbackButton);
        await this.waitUntilElementIsVisible(logOutPage.logOutButton);
    }

    async checkFormExample() {
        await this.waitUntilElementIsInvisible(this.dropDownMenu);
        await this.waitUntilElementIsVisible(this.formExampleImg);
        await expect(this.getCurrentUrl()).to.eventually.contains("http://ep-ubuntu.levi9.com/app_dev.php/#/example");
    }

    async checkAboutMyreview() {
        await this.waitUntilElementIsInvisible(this.dropDownMenu);
        await this.waitUntilElementIsVisible(this.about);
        await expect(this.getCurrentUrl()).to.eventually.contains("http://ep-ubuntu.levi9.com/app_dev.php/#/about");
    }

    async checkSendFeedback() {
        await this.waitUntilElementIsInvisible(this.dropDownMenu);
        await this.waitUntilElementIsVisible(this.sendFeeedbackdialog);
    }

}

module.exports = MenuSteps;