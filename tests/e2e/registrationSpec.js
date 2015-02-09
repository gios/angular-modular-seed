/*jshint mocha: true*/
/*jshint node: true */
/*global browser,element,by*/

var chai = require('chai'),
    chaiAsPromised = require('chai-as-promised'),
    expect = chai.expect,
    assert = chai.assert;
chai.should();
chai.use(chaiAsPromised);

describe('registration homepage', function () {

    beforeEach(function () {
        browser.ignoreSynchronization = true;
        browser.get('localhost:3000/#/registration/');
    });

    it('should have a title', function () {
        expect(browser.getTitle()).to.eventually.equal('interestShare - Registration');
    });

    it('should have a 5 form-group', function () {
        element.all(by.css('.form-group')).count().then(function (formGroupCount) {
            formGroupCount.should.equal(5);
        });
    });

    it('should have a fields name', function () {
        element.all(by.css('.registrationPanel .col-sm-7 input')).get(0).getAttribute('id').then(function (inputFields) {
            inputFields.should.equal('nameRegistrationField');
        });

        element.all(by.css('.registrationPanel .col-sm-7 input')).get(1).getAttribute('id').then(function (inputFields) {
            inputFields.should.equal('emailRegistrationField');
        });

        element.all(by.css('.registrationPanel .col-sm-7 input')).get(2).getAttribute('id').then(function (inputFields) {
            inputFields.should.equal('passwordRegistrationField');
        });

        element.all(by.css('.registrationPanel .col-sm-7 input')).get(3).getAttribute('id').then(function (inputFields) {
            inputFields.should.equal('passwordRepeatField');
        });
    });
});