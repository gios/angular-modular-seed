var angular = require("angular");
angular
	.module('test', [])
	.controller('gg', ['$scope', function($scope){
		$scope.text = "Hello World!";
	}]);