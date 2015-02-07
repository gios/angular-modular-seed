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