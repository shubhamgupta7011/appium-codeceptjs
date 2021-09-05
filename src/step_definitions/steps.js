const I = actor();
const genericFunction = require('../../utility/GenericFuctions');
const workOrderPage = require('../pages/login');
let NameOfUser,NumberOfUser;
// Add in your custom step files

Given('I have a defined step', () => {
    I.waitForVisible("#com.workorder.mobile:id/edittext_email", 20);
    I.fillField("#com.workorder.mobile:id/edittext_email", "payal.gaur@successive.tech");
    I.waitForVisible("#com.workorder.mobile:id/edittext_password", 20);
    I.fillField("#com.workorder.mobile:id/edittext_password", "1234567890");
    I.tap("#com.workorder.mobile:id/button_login");
    I.waitForVisible("#com.workorder.mobile:id/imageview_navigation_menu", 40);
});

When(/^User enter credentials and tap on the sign in button$/,  function (input) {
    const table = genericFunction.transformTable(input);
    const {userEmail, password} = table[0];
    workOrderPage.enterUserNameAndPass(userEmail,password)
});

Then(/^User successfully logged in and Dashboard page displayed$/, function () {
    workOrderPage.verifyWorkOrderDashboard();
});

Then(/^Error message "([^"]*)" is displayed$/,async function (arg0) {
   await workOrderPage.verifyValidationMessage(arg0);
    workOrderPage.tapOnOkButtonOnPopup();
});

Given(/^User sign in with valid credential of client user$/, async function () {
    await workOrderPage.enterCredentials("payal.gaur@successive.tech", "1234567890");
});

When(/^User reaches to the edit profile screen$/, function () {
    try {
        workOrderPage.userGoToProfilePage();
        workOrderPage.tapOnEditButton();
    }catch (e){}
});

When(/^User enters the data in inbox field to edit$/, function (input) {
    const table = genericFunction.transformTable(input);
    const {Name, Number} = table[0];
    NameOfUser=Name;
    NumberOfUser=Number;
    workOrderPage.editProfile(Name,Number);
});

When(/^User tap on the save button$/, function () {
    workOrderPage.clickOnSaveButton();
});

Then(/^verify changes$/, async function () {
    await workOrderPage.verifyEditDetails(NameOfUser,NumberOfUser);
});
