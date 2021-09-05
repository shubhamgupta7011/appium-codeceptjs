const catalog=require('../pages/catalog_Page');

Given(/^user is on catalog list page$/, function () {
    catalog.userOnCatalogPage();
});

Given(/^user tap on Activity indicator$/, function () {
    catalog.TapOnActivityIndicator();
});

Then(/^verify Activity indicator page and loader$/, function () {
    catalog.verifyActivityIndicatorPage();
});

Given(/^user tap on Alert View$/, function () {
    catalog.clickOnAlertViews();
});

Given(/^user tap on Simple Alert$/, function () {
    catalog.clickOnSimple();
});

Then(/^verify Simple Alert$/, function () {
    catalog.verifyPopUp();
});

Then(/^click on alert ok button$/, function () {
    catalog.clickOnOk();
});

Given(/^user tap on Okay and Cancel Alert$/, function () {
    catalog.clickOnOkAndCancel();
});

Then(/^verify Okay and Cancel Alert$/, function () {
    catalog.verifyOkAndCancelAlert();
});

Given(/^user tap on text enter alert$/, function () {
    catalog.clickOnTextEnterAlert();
});

Given(/^Type in it$/, function () {
    catalog.typeInAlert();
});

Then(/^verify text enter alert$/, function () {
    catalog.verifyTextEnterAlert();
});