let Helpers = require('../helpers/Helpers');
let LogOutPage = require('../classes/Logout');
let logOutPage = new LogOutPage;
let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
let expect = chai.expect;
chai.use(chaiAsPromised);

class Menu extends Helpers {

    constructor() {
        super();
        this.navbarLogo = by.css("div[class='navbar-header']");
        this.notes = by.css("a[ui-sref='notes']");
        this.form = by.css("a[ui-sref='form']");
        this.history = by.css("a[ng-click='vm.openHistory()']");
        this.feedback = by.css("a[ui-sref='feedbacks']");
        this.department = by.css("a[ui-sref='department']");
        this.tools = by.css("#navbar>ul>li:nth-child(6)");
        this.notesObjectivesHeader = by.css("#objectives");
        this.notesGoalHeaders = by.css("#overallComment>div:nth-child(8)");
        this.formRejectReasonHeader = by.css("#overallComment>div:nth-child(1)");
        this.formOverallCommentsHeader = by.css("#overallComment>div:nth-child(3)");
        this.formSettingObjectivesHeader = by.css("#overallComment>div:nth-child(7)");
        this.formPerformanceEvaluation = by.css("#overallComment>div:nth-child(9)");
        this.departDepartmentManagerHeader = by.css("div[class='paneHeader']");
        this.departSearchField = by.css("input[ng-model='vm.searchReq']");
        this.navScope = by.css("div[class='panel-group']");
        this.departFormProgress = by.css("div[class='statusSorting']");
        this.toolsMenuElements = $$("#navbar>ul>li.btn-group.dropdown.open>ul>li[aria-hidden='false'] *");
        this.toolsMenu = by.css("#navbar>ul>li.btn-group.dropdown.open>a");
        this.dropDownMenu = by.css("#navbar>ul>li.btn-group.dropdown.open>ul");
        this.formExample = by.css("a[ui-sref='example']");
        this.formExampleImg = by.css("img[src='/uploads/example.png']");
        this.aboutMyreview = by.css("a[ui-sref='about']");
        this.about = by.css("div[class='about']");
        this.sendFeedbackButton = by.css("li[ng-click='vm.openFeedbackWindow()']");
        this.sendFeeedbackdialog = by.css("md-dialog[role='dialog']");
    }

    async checkNavigationMenu(username) {
        switch (username) {
            case 'eptester1':
                await this.checkPresenceOfTextInElement(this.notes, "Notes");
                await this.checkPresenceOfTextInElement(this.form, "Form");
                await this.checkPresenceOfTextInElement(this.history, "History");
                await expect(this.waitUntilElementIsInvisible(this.department));
                await expect(this.waitUntilElementIsInvisible(this.tools));
                await expect(this.waitUntilElementIsInvisible(this.feedback));
                await this.waitUntilElementIsVisible(logOutPage.dropDownButton);
                await this.waitUntilElementIsVisible(this.navbarLogo);
                console.log("tester");
                break;
            case 'eptesterdm':
                console.log("dm");
                await this.checkPresenceOfTextInElement(this.notes, "Notes");
                await this.checkPresenceOfTextInElement(this.form, "Form");
                await this.checkPresenceOfTextInElement(this.history, "History");
                await this.checkPresenceOfTextInElement(this.department, "Department");
                await expect(this.waitUntilElementIsInvisible(this.tools));
                await expect(this.waitUntilElementIsInvisible(this.feedback));
                await this.waitUntilElementIsVisible(logOutPage.dropDownButton);
                await this.waitUntilElementIsVisible(this.navbarLogo);
                break;
            default:
                console.log("ForAll");
                await this.checkPresenceOfTextInElement(this.notes, "Notes");
                await this.checkPresenceOfTextInElement(this.form, "Form");
                await this.checkPresenceOfTextInElement(this.history, "History");
                await this.checkPresenceOfTextInElement(this.department, "Department");
                await this.checkPresenceOfTextInElement(this.tools, "Tools");
                await expect(this.waitUntilElementIsInvisible(this.feedback));
                await this.waitUntilElementIsVisible(logOutPage.dropDownButton);
                await this.waitUntilElementIsVisible(this.navbarLogo);
                break;
        }
    }

    async checkListCount(count) {
        let toolsItems = this.toolsMenuElements.filter(async (elem) => {
            return (await elem);
        });
        let countTools = toolsItems.count();
        await expect(countTools).to.become(count);
        return toolsItems;
    }

    async checkLisText(text, count) {
        let toolsItems = this.toolsMenuElements.filter(async (elem) => {
            return (await elem);
        });
        await expect(toolsItems.get(count - 1).getText()).to.become(text);
        return toolsItems;
    }

    async checkToolsMenu(username) {
        switch (username) {
            case "ephr":
                console.log("ForHR");
                await this.waitUntilElementIsVisible(this.toolsMenu);
                await this.checkListCount(1);
                await this.checkLisText("Assign employee to Talent Manager", 1);
                break;
            case "epsm":
                console.log("ForSM");
                await this.waitUntilElementIsVisible(this.toolsMenu);
                await this.checkListCount(1);
                await this.checkLisText("Assign employee to Delivery (Service) Manager", 1);
                break;
            case "epdelivery1":
                console.log("ForSM");
                await this.waitUntilElementIsVisible(this.toolsMenu);
                await this.checkListCount(1);
                await this.checkLisText("Assign employee to Delivery (Service) Manager", 1);
                break;
            case "ephrdm":
                console.log("ForHHR");
                await this.waitUntilElementIsVisible(this.toolsMenu);
                await this.checkListCount(2);
                await this.checkLisText("Assign employee to Talent Manager", 1);
                await this.checkLisText("Assign employee to Delivery (Service) Manager", 2);
                break;
        }
    }

    async checkMenu(username) {
        switch (username) {
            case "eptester1":
                await expect(this.getCurrentUrl()).to.become("http://ep-ubuntu.levi9.com/app_dev.php/#/notes");
                break;
            default:
                await expect(this.getCurrentUrl()).to.become("http://ep-ubuntu.levi9.com/app_dev.php/#/department");
        }
    }

}

module.exports = Menu;