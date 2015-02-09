/*jshint mocha: true*/
/*jshint node: true */
/*global angular*/

var chai = require('chai'),
    chaiAsPromised = require('chai-as-promised'),
    expect = chai.expect,
    assert = chai.assert;
chai.should();
chai.use(chaiAsPromised);

describe('registration homepage', function () {
    var $scope,
        $controller;

    beforeEach(function () {
        angular.mock.module('RegistrationApp');
    });

    beforeEach(angular.mock.inject(function (_$rootScope_, _$controller_) {
        $scope = _$rootScope_;
        $controller = _$controller_;
    }));

    it('should have an HelloWorld scope', function () {
        $controller('RegistrationCtrl', {
            $scope: $scope,
        });
        expect($scope.hello).to.equal('HelloWorld');
    });
});