let LogOutPage = require('../classes/Logout');
let logOutPage = new LogOutPage;
let LoginSteps = require('../Steps/Login_steps');
let loginSteps = new LoginSteps;
let chai = require('chai');
require('chai');
let chaiAsPromised = require('chai-as-promised');
let expect = chai.expect;
chai.use(chaiAsPromised);

class LogOutSteps extends LogOutPage {

    async logOut() {
        await this.logOutAction();
    }

    async checkLogOutAction() {
        await this.waitUntilElementIsVisible(loginSteps.loginPanelInfo);
        await expect(this.getCurrentUrl()).to.become('http://ep-ubuntu.levi9.com/app_dev.php/login');
    }

    async userIsLogged(login, password) {
        await loginSteps.before();
        await loginSteps.loginDownloading();
        await loginSteps.fillLogin(login);
        await loginSteps.fillPassword(password);
        await loginSteps.clickLoginButton();
        await loginSteps.checkIfUserIsLoggedSuccessfully(login);
    }

}

module.exports = LogOutSteps;