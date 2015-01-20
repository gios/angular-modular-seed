/*global require,module,console,angular */
require("angular/angular");
require("angular-route/angular-route");

angular.module("GeneralApp", ["ngRoute"]);
angular.module("GeneralApp").controller("GeneralCtrl", require("./components/general/controller"));

angular.module("MainApp", [
    "GeneralApp"
]);

angular.module("MainApp").config(["$routeProvider", require("./app.routes")]);