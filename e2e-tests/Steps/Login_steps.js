let LoginPage = require('../classes/Login');
let loginPage = new LoginPage();
let chai = require('chai');
require('chai');
let chaiAsPromised = require('chai-as-promised');
let expect = chai.expect;
chai.use(chaiAsPromised);

class LoginSteps extends LoginPage {

    async before() {
        browser.ignoreSynchronization = true;
        await this.getUrl('http://ep-ubuntu.levi9.com/app_dev.php');
        await this.changeWindowSize();
    }

    async after() {
        await this.closeTab();
    }

    async loginDownloading() {
        await expect(browser.getTitle()).to.become('MyReview');
        await this.waitUntilElementIsVisible(this.logo);
        await this.waitUntilElementIsVisible(this.loginPanelInfo);
    }

    async fillLoginAndPasswordFields(login, paswrd) {
        await this.clear(this.username);
        await this.finedElementAndSendKeys(this.username, login);
        await this.clear(this.password);
        await this.finedElementAndSendKeys(this.password, paswrd);
    }

    async fillLogin(login) {
        await this.clear(this.username);
        await this.finedElementAndSendKeys(this.username, login);
    }

    async fillPassword(password) {
        await this.clear(this.password);
        await this.finedElementAndSendKeys(this.password, password);
    }

    async clickLoginButton() {
        await this.click(this.loginButton);
    }

    async checkIfUserIsLoggedSuccessfully(username) {
        await expect(loginPage.checkLoginResult(this.hintUsername)).to.become(username.toLowerCase());
        await this.waitUntilElementIsVisible(this.navbarMenu);
    }

    async checkIfUserIsntLoggedSuccessfully() {
        await expect(browser.getCurrentUrl()).to.become('http://ep-ubuntu.levi9.com/app_dev.php/login');
        await this.checkIfUserIsntLogged(this.errorMessage, this.navbarMenu);
    }

    async checkIfUserIsntLoggedSuccessfullyNoError() {
        await expect(browser.getCurrentUrl()).to.become('http://ep-ubuntu.levi9.com/app_dev.php/login');
    }

    async clearPassword() {
        await this.clear(this.password);
    }

    async clearLogin() {
        await this.clear(this.username);
    }

    async checkUsernameAndPasswordMaxLength() {
        await this.usernameMaxInput(this.username);
        await this.passwordMaxInput(this.password);
    }

    async copyAndPasteFromField() {
        await this.sendKey(this.password, protractor.Key.chord(protractor.Key.CONTROL, "a"));
        await this.sendKey(this.password, protractor.Key.chord(protractor.Key.CONTROL, "c"));
        await this.sendKey(this.username, protractor.Key.chord(protractor.Key.CONTROL, "v"));
    }

    async checkCopiedText(elem) {
        await expect(element(elem).getAttribute('value')).to.not.become("HelloHelloHello");
    }

    async clickLogo() {
        await this.click(this.logo);
    }

    async checkRefreshedPage() {
        await this.checkIfUserIsntLoggedSuccessfullyNoError();
        await this.waitUntilElementIsVisible(this.logo);
        await this.waitUntilElementIsVisible(this.loginPanelInfo);
    }

}

module.exports = LoginSteps;