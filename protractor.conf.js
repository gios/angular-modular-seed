/*jshint node: true */

exports.config = {
    framework: "mocha",
    seleniumAddress: "http://localhost:4444/wd/hub",
    specs: ["tests/e2e/*Spec.js"],
    mochaOpts: {
        reporter: "spec",
        slow: 3000,
        enableTimeouts: false
    },
    capabilities: {
        browserName: "chrome"
    }
};