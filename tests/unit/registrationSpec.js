/*jshint jasmine: true*/
/*global angular,inject*/

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

describe('PasswordController', function () {
    beforeEach(angular.mock.module('app'));

    var $controller;

    beforeEach(inject(function (_$controller_) {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
    }));

    describe('$scope.grade', function () {
        it('sets the strength to "strong" if the password length is >8 chars', function () {
            var $scope = {};
            var controller = $controller('PasswordController', {
                $scope: $scope
            });
            $scope.password = 'longerthaneightchars';
            $scope.grade();
            expect($scope.strength).toEqual('strong');
        });
    });
});