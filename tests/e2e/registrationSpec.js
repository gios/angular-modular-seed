/*jshint jasmine: true*/
/*global browser, element, by*/

describe('registration homepage', function () {

    beforeEach(function () {
        browser.ignoreSynchronization = true;
        browser.get('localhost:3000/#/registration/');
    });

    it('should have a title', function () {
        expect(browser.getTitle()).toEqual('interestShare - Registration');
    });

    it('should have a 5 form-group', function () {
        var formGroups = element.all(by.css('.form-group'));
        expect(formGroups.count()).toBe(5);
    });

    it('should have a fields name', function () {
        var inputFields = element.all(by.css('.registrationPanel .col-sm-7 input'));
        expect(inputFields.get(0).getAttribute('id')).toEqual('nameRegistrationField');
        expect(inputFields.get(1).getAttribute('id')).toEqual('emailRegistrationField');
        expect(inputFields.get(2).getAttribute('id')).toEqual('passwordRegistrationField');
        expect(inputFields.get(3).getAttribute('id')).toEqual('passwordRepeatField');
    });
});