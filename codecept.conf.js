const {include, gherkin} = require('./config/BDDConfig');
const {Appium} = require('./config/WebHelpersConfig');

exports.config = {
    output: './output',
    helpers: {
        Appium,
        customHelper: {require: './utility/MyHelper.js'},
    },

    mocha: {},
    bootstrap: null,
    teardown: null,
    hooks: [],

    include,
    gherkin,

    plugins: {
        screenshotOnFail: {enabled: true},
        allure: {enabled: true},
        retryFailedStep: {enabled: true}
    },
    tests: './*_test.js',
    name: 'appium-codeceptjs'
};