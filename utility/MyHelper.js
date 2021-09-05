// This js file contains some helpers which is use to find out the status of the locator
const Helper = codecept_helper;

class MyHelper extends Helper {

    async isEnable(textOrLocator, timeout) {
        const helper = this.helpers['Appium'];
        try {
            await helper.waitForEnabled(textOrLocator, timeout || 5);
            return true;
        } catch (err) {
            return false;
        }
    }

    async isPresent(textOrLocator, timeout) {
        const helper = this.helpers['Appium'];
        try {
            await helper.waitForElement(textOrLocator, timeout || 5);
            return true;
        } catch (err) {
            return false;
        }
    }

    async isTextPresent(text, timeout) {
        const helper = this.helpers['Appium'];
        try {
            await helper.waitForText(text, timeout || 5);
            return true;
        } catch (err) {
            return false;
        }
    }

    async isElementVisible(textOrLocator, timeout) {
        const helper = this.helpers['Appium'];
        try {
            await helper.waitForVisible(textOrLocator, timeout || 5);
            return true;
        } catch (err) {
            return false;
        }
    }
}

module.exports = MyHelper;
