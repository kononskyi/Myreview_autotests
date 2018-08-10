//jshint strict: false
exports.config = {

    frameworkPath: require.resolve('protractor-cucumber-framework'),

    allScriptsTimeout: 11000,

    specs: [
        'e2e-tests/Login.feature',
        'e2e-tests/Logout.feature',
        'e2e-tests/Menu.feature'
       // 'e2e-tests/Notes.feature',
    ],

    capabilities: {
        browserName: 'chrome'
    },

    baseUrl: 'http://localhost:8000/',

    framework: 'custom',

    cucumberOpts: {
        require: [
            'e2e-tests/step_definitions/Login_steps_def.js',
            'e2e-tests/step_definitions/Logout_steps_def.js',
            'e2e-tests/step_definitions/Menu_steps_def.js'
            //'e2e-tests/step_definitions/Notes_steps_def.js',
        ],
        tags: [],
        strict: true,
        compiler: []
    }
};
