/*global require,module,console,angular */

require("angular/angular");
require("angular-route/angular-route");
require("angular-mocks/angular-mocks");

angular.module("RegistrationApp", ["ngRoute", "ngMock"]);
angular.module("RegistrationApp").controller("RegistrationCtrl", require("./components/registration/controller"));
angular.module("RegistrationApp").directive("myRegistration", require("./components/registration/directive"));

angular.module("MainApp", [
    "RegistrationApp"
]);

angular.module("MainApp").config(["$routeProvider", "$locationProvider", require("./app.routes")]);

/* test */
var app = angular.module("APP", []);

app.controller("mainCtrl", ['$scope', function ($scope) {
    $scope.greet = function (name) {
        return "hello " + name;
    };
 }]);