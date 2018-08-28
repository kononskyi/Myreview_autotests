const fs = require('fs');
let chai = require('chai');
require('chai');
let chaiAsPromised = require('chai-as-promised');
let expect = chai.expect;
chai.use(chaiAsPromised);

class Helpers {

    async waitUntilElementIsVisible(elem) {
        return browser.wait(ExpectedConditions.visibilityOf(element(elem)), 5000, "Element is not visible");
    }

    async waitUntilElementIsInvisible(elem) {
        return browser.wait(ExpectedConditions.invisibilityOf(element(elem)), 5000, "Element is visible");
    }

    async waitUntilElementIsClickable(elem) {
        return browser.wait(ExpectedConditions.elementToBeClickable(element(elem)), 5000, "Element is not clickable");
    }

    async click(elem) {
        await this.waitUntilElementIsVisible(elem);
        await this.waitUntilElementIsClickable(elem);
        return element(elem).click();
    }

    async finedElementAndSendKeys(elem, key) {
        await this.waitUntilElementIsVisible(elem);
        return element(elem).sendKeys(key);
    }

    async clear(elem) {
        await this.waitUntilElementIsVisible(elem);
        return element(elem).clear();
    }

    async getUrl(url) {
        return browser.get(url);
    }

    async getCurrentUrl() {
        return browser.getCurrentUrl();
    }

    async changeWindowSize() {
        return browser.manage().window().maximize();
    }

    async closeTab() {
        return browser.restart();
    }

    createScreen(data, filename) {
        let stream = fs.createWriteStream(filename);
        stream.write(new Buffer(data, 'base64'));
        stream.end();
    }

    async makeScreen() {
        let screen = await browser.takeScreenshot();
        console.log("Check root forlder, new pnj file should appear!!!! Check password fields(must be in bullets)");
        return this.createScreen(screen, 'screenshot.pnj');
    }

    async checkPresenceOfTextInElement(elem, text) {
        await this.waitUntilElementIsVisible(elem);
        let textFromEl = element(elem).getText();
        await expect(textFromEl).to.eventually.contains(text);
    }

    async browserSleep(ms) {
        return browser.sleep(ms);
    }
}

module.exports = Helpers;