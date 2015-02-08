/*jshint mocha: true*/
/*global browser,element,by,module,inject,require*/

var chai = require('chai'),
    assert = chai.assert,
    expect = chai.expect,
    should = chai.should();

//describe('registration homepage', function () {
//    var $scope,
//        ctrl;
//
//    beforeEach(function () {
//        angular.mock.module('RegistrationApp');
//        module('MainApp', ['RegistrationApp']);
//    });
//
//    beforeEach(angular.mock.inject(function ($rootScope, $controller) {
//        $scope = $rootScope.new();
//        ctrl = $controller('RegistrationCtrl', {
//            $scope: $scope,
//        });
//    }));
//
//    it('should exist', function () {
//        expect(ctrl).to.exist;
//    });
//
//    //    it('should have an empty events array', function () {
//    //        expect($scope.hello).toBe("HelloWorld");
//    //    });
//});

describe('Person', function () {
    var controller, $scope;

    beforeEach(function () {
        angular.mock.module("APP");
    });

    beforeEach(angular.mock.inject(function ($rootScope, $controller) {
        $scope = $rootScope.$new();
        controller = $controller('mainCtrl', {
            $scope: $scope
        });
    }));


    it('should exist', function () {
        expect(controller).to.exist;
    });
});