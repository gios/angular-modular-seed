/*jshint node: true */

exports.config = {
    seleniumAddress: "http://localhost:4444/wd/hub",
    specs: ["tests/e2e/*Spec.js"],
    capabilities: {
        browserName: "chrome"
    }
};