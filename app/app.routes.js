/*global require,module,console,angular */
require("angular/angular");

module.exports = function ($routeProvider) {
    "use strict";
    $routeProvider
        .when("/", {
            templateUrl: "app/components/general/views/index.html",
            controller: "GeneralCtrl"
        });
};