let Helpers = require('../helpers/Helpers');

class Logout extends Helpers {

    constructor() {
        super();
        this.dropDownButton = by.css("#navbar>ul>li:nth-child(7)");
        this.logOutButton = by.css("a[ng-click='vm.logOut()']");
    }

    async logOutAction() {
        await this.click(this.dropDownButton);
        await this.click(this.logOutButton);
    }
}

module.exports = Logout;