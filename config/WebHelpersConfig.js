const path = require('path')
const app = path.join(__dirname, '../app');

const Appium = {
    app: app + '/UIKitCatalog.app',

    // desiredCapabilities: {
    //     port: '4723',

    //     platformName: "Android",
    //     platformVersion: "11",
    //     deviceName: "000b0488f7ce",
    //     udid: "000b0488f7ce",
    //     automationName: "uiautomator2",
    //
    //     app: app + '/13_29_5_2020_com.workorder.mobile.apk',
    //     appActivity: "md5adaa709a36162bac6be0860c7c3af4f7.SplashActivity",
    //     autoGrantPermissions: "true"
    //     appPackage: "com.workorder.mobile",
    // },

    desiredCapabilities: {
        "port": '4723',
        "platformName": "iOS",
        "platformVersion": "14.5",
        "deviceName": "iPhone 12 Pro Max",
        "udid": "BAC303D4-F4C9-4D5C-94A0-811864169E6F",
        "automationName": "XCUITest",

        "app": './app/UIKitCatalog.app',
        //     autoGrantPermissions: "true"
    }

};


module.exports = {Appium};
