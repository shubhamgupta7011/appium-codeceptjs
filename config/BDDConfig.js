// In this file you have to add path of all the page file over here.
const include = {
    I: './steps_file.js',

};

const gherkin = {
    features: './src/features/*.feature',
    steps: [
        './src/step_definitions/steps.js',
        './src/step_definitions/catalog_Steps.js'
    ]
};

module.exports = {
    include,
    gherkin,
};
