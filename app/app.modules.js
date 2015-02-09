/*global require,module,console,angular */

require("angular/angular");
require("angular-route/angular-route");

angular.module("RegistrationApp", ["ngRoute"]);
angular.module("RegistrationApp").controller("RegistrationCtrl", require("./components/registration/controller"));
angular.module("RegistrationApp").directive("myRegistration", require("./components/registration/directive"));

angular.module("MainApp", [
    "RegistrationApp"
]);

angular.module("MainApp").config(["$routeProvider", "$locationProvider", require("./app.routes")]);

/* test */
angular.module('app', [])
    .controller('PasswordController', function PasswordController($scope) {
        $scope.password = '';
        $scope.grade = function () {
            var size = $scope.password.length;
            if (size > 8) {
                $scope.strength = 'strong';
            } else if (size > 3) {
                $scope.strength = 'medium';
            } else {
                $scope.strength = 'weak';
            }
        };
    });