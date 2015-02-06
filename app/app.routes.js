/*global require,module,console,angular */
require("angular/angular");

module.exports = function ($routeProvider, $locationProvider) {
    "use strict";
    $routeProvider
        .when("/registration", {
            templateUrl: "app/components/registration/views/index.html",
            controller: "RegistrationCtrl"
        })
        .otherwise({
            redirectTo: "/registration"
        });

//    $locationProvider.html5Mode({
//        enabled: true,
//        requireBase: false
//    });
};