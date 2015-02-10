/*global require,module,console,angular */

require("angular/angular");

module.exports = function ($scope, $window) {
    "use strict";
    $scope.hello = "HelloWorld";
    $window.document.title = "Registration";
};