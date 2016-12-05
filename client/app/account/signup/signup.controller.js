'use strict';

angular.module('AnnAuthApp')
    .controller('SignupCtrl', function($scope, Auth, $location, $window) {
        $scope.user = {};
        $scope.errors = {};

		$scope.signup = function(form) {
            $scope.submitted = true;

            if (form.$valid) {
                Auth.createUser({
                        email: $scope.user.email,
                        password: $scope.user.password,
                        name: $scope.user.name
                    })
                    .then(function() { 
                        $location.path('/');
                    })
                    .catch(function(err) {
                        $scope.errors.other = err.message;
                    });
            }
        }; 
	});