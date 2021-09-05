const I = actor();
const {assert}  = require('chai');

module.exports = {
    fields: {
        userName: "#com.workorder.mobile:id/edittext_email",
        password: "#com.workorder.mobile:id/edittext_password",
        signinButton: "#com.workorder.mobile:id/button_login",
        menuIcon: "#com.workorder.mobile:id/imageview_navigation_menu",
        editProfileButton: "#com.workorder.mobile:id/button_edit_profile",
        chnagePswdButton: "#com.workorder.mobile:id/button_change_password",
        nameField: "#com.workorder.mobile:id/editText_edit_profile_name",
        contactNoField: "#com.workorder.mobile:id/editText_edit_profile_contact_number",
        saveButton: "#com.workorder.mobile:id/button_edit_profile_save",
        logoutButton: "#com.workorder.mobile:id/button_logout_my_profile",
        myProfileName: "#com.workorder.mobile:id/editText_my_profile_name",
        myProfileContact: "#com.workorder.mobile:id/editText_profile_contact_number",
        validationMessage: "#android:id/message",
        okButtonPopup: "#android:id/button1",
    },

    async enterCredentials(userEmail, pwd) {
        await I.isPresent(this.fields.userName,20).then((status)=>{
            if(status){
              this.enterUserNameAndPass(userEmail, pwd);
            }
        });
    },

    enterUserNameAndPass(userEmail, pwd){
        I.waitForVisible(this.fields.userName, 20);
        I.clearField(this.fields.userName);
        I.fillField(this.fields.userName, userEmail);
        I.waitForVisible(this.fields.password, 20);
        I.clearField(this.fields.password);
        I.fillField(this.fields.password, pwd);
        I.tap(this.fields.signinButton);
    },

    verifyWorkOrderDashboard() {
        this.userGoToProfilePage();
        I.waitForVisible(this.fields.logoutButton, 20);
        I.tap(this.fields.logoutButton);
        I.waitForVisible(this.fields.userName, 20);
        I.seeElement(this.fields.userName);
    },

    userGoToProfilePage() {
        I.waitForVisible(this.fields.menuIcon, 20);
        I.tap(this.fields.menuIcon);
    },

    tapOnEditButton() {
        I.waitForVisible(this.fields.editProfileButton, 20);
        I.tap(this.fields.editProfileButton);
    },

    clickOnSaveButton() {
        I.waitForVisible(this.fields.saveButton, 20);
        I.tap(this.fields.saveButton);
    },

    editProfile(name, number) {
        I.waitForVisible(this.fields.nameField, 20);
        I.clearField(this.fields.nameField);
        I.fillField(this.fields.nameField, name);
        I.waitForVisible(this.fields.contactNoField, 20);
        I.clearField(this.fields.contactNoField);
        I.fillField(this.fields.contactNoField, number);
    },

    async verifyEditDetails(name, number) {
        I.waitForVisible(this.fields.myProfileName,20);
        let profileName = await I.grabTextFrom(this.fields.myProfileName);
        assert.equal(profileName, name);
        let profileContact = await I.grabTextFrom(this.fields.myProfileContact);
        assert.equal(profileContact, number);
    },

    async verifyValidationMessage(arg0) {
        I.waitForVisible(this.fields.validationMessage, 20);
        let validationMessage = await I.grabTextFrom(this.fields.validationMessage);
        assert.equal(validationMessage, arg0);
    },

    tapOnOkButtonOnPopup() {
        I.waitForVisible(this.fields.okButtonPopup, 20);
        I.tap(this.fields.okButtonPopup);
    }

};
