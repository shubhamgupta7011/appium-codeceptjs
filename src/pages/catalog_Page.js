const {I} = inject();
const {assert} = require('chai');

module.exports = {
    fields: {
        alertViews: "//XCUIElementTypeStaticText[@name=\"Alert Views\"]",
        activityIndicators: "//XCUIElementTypeStaticText[@name=\"Activity Indicators\"]",
        Simple: "//XCUIElementTypeStaticText[@name=\"Simple\"]",
        textEntry: "//XCUIElementTypeStaticText[@name=\"Text Entry\"]",
        OkayAndCancel: "//XCUIElementTypeStaticText[@name=\"Okay / Cancel\"]",
        header: "//XCUIElementTypeStaticText[@name=\"UIKitCatalog\"]",
        OK: "//XCUIElementTypeButton[@name=\"OK\"]",
        popupTitle: "//XCUIElementTypeStaticText[@name=\"A Short Title Is Best\"]",
        popupSubTitle: "//XCUIElementTypeStaticText[@name=\"A message should be a short, complete sentence.\"]",
        okAndCancelPopupTitle: "//XCUIElementTypeStaticText[@name=\"A Short Title Is Best\"]",
        okAndCancelPopupSubTitle: "//XCUIElementTypeStaticText[@name=\"A message should be a short, complete sentence.\"]",
        textEnterPopupSubTitle: "//XCUIElementTypeStaticText[@name=\"A message should be a short, complete sentence.\"]",
        aShortTitleIsBest: "//XCUIElementTypeStaticText[@name=\"A Short Title Is Best\"]",
        textAreaInAlert: "//XCUIElementTypeAlert[@name=\"A Short Title Is Best\"]/..//*//XCUIElementTypeTextField",
        activityIndicatorsHeader: "//XCUIElementTypeNavigationBar[@name=\"Activity Indicators\"]",
    },

    clickOnAlertViews() {
        I.waitForVisible(this.fields.alertViews,20);
        I.tap(this.fields.alertViews)
    },

    clickOnSimple() {
        I.waitForVisible(this.fields.Simple,20);
        I.tap(this.fields.Simple)
    },

    clickOnOk() {
        I.waitForVisible(this.fields.OK,20);
        I.tap(this.fields.OK)
    },

    verifyPopUp() {
        I.waitForVisible(this.fields.popupTitle,20);
        I.seeElement(this.fields.popupTitle)
        I.waitForVisible(this.fields.popupSubTitle,20);
        I.seeElement(this.fields.popupSubTitle)
    },

    userOnCatalogPage() {
        I.waitForVisible(this.fields.header,20);
        I.seeElement(this.fields.header)
    },

    clickOnOkAndCancel() {
        I.waitForVisible(this.fields.OkayAndCancel,20);
        I.tap(this.fields.OkayAndCancel)
    },

    verifyOkAndCancelAlert() {
        I.waitForVisible(this.fields.okAndCancelPopupTitle,20);
        I.seeElement(this.fields.okAndCancelPopupTitle);
        I.waitForVisible(this.fields.okAndCancelPopupSubTitle,20);
        I.seeElement(this.fields.okAndCancelPopupSubTitle);
    },

    clickOnTextEnterAlert() {
        I.waitForVisible(this.fields.textEntry,20);
        I.tap(this.fields.textEntry)
    },

    verifyTextEnterAlert() {
        I.waitForVisible(this.fields.aShortTitleIsBest,20);
        I.seeElement(this.fields.aShortTitleIsBest)
        I.waitForVisible(this.fields.textEnterPopupSubTitle,20);
        I.seeElement(this.fields.textEnterPopupSubTitle)
    },

    typeInAlert() {
        I.waitForVisible(this.fields.activityIndicators,20);
        I.fillField(this.fields.activityIndicators,"Shubham Gupta")
    },

    TapOnActivityIndicator() {
        I.waitForVisible(this.fields.activityIndicators,20);
        I.tap(this.fields.activityIndicators);
    },

    verifyActivityIndicatorPage() {
        I.waitForVisible(this.fields.activityIndicatorsHeader,20);
        I.seeElement(this.fields.activityIndicatorsHeader)
    },
}