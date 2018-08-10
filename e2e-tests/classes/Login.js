let Helpers = require('../helpers/Helpers');
let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
let expect = chai.expect;
chai.use(chaiAsPromised);

class LoginPage extends Helpers {
    constructor() {
        super();
        this.logo = by.css("a[class='navbar-brand']:first-of-type");
        this.loginPanelInfo = by.css("div[class='panel panel-info']");
        this.username = by.css("#username");
        this.password = by.css("#password");
        this.loginButton = by.css("input[value='Login']");
        this.hintUsername = by.css("#navbar>ul>li:nth-child(7)>a");
        this.navbarMenu = by.css("#navbar>ul");
        this.errorMessage = by.css("div[class='alert alert-danger col-sm-12']");
    }

    async checkLoginResult(elem) {
        await this.waitUntilElementIsVisible(elem);
        const word = /Username:/g;
        let array = [];
        let data = element(elem).getAttribute('aria-label');
        array = (await data).split(' ').join('').replace(word, '');
        return array;
    }

    async checkIfUserIsntLogged(elem, elem2) {
        await this.waitUntilElementIsVisible(elem);
        await expect(element(elem).getText()).to.eventually.oneOf(['Invalid credentials.', 'Username could not be found.']);
        return this.waitUntilElementIsInvisible(elem2);
    }

    async usernameMaxInput(elem) {
        let str = '';
        for (let i = 0; i < 256; i++) {
            str = str + "A";
        }
        await this.fillLogin(str);
        let textFromFiled = await element(elem).getAttribute('value');
        if (str.length - 1 !== textFromFiled.length) {
            throw Error('Check username field');
        }
    }

    async passwordMaxInput(elem) {
        let str = '';
        for (let i = 0; i < 65; i++) {
            str = str + "A";
        }
        await this.fillLogin(str);
        let textFromFiled = await element(elem).getAttribute('value');
        if (str.length - 1 !== textFromFiled.length) {
            throw Error('Check password field');
        }
    }

    async sendKey(elem, key) {
        return element(elem).sendKeys(key);
    }
}

module.exports = LoginPage;