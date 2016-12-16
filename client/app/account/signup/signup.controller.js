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
                        confirmedPassword:$scope.user.confirmedPassword,
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

        $scope.goToLogin = function() {
            $location.path('/login');
        };

        $scope.validatePassword = function(password, confirmedPassword) {
            if(password == confirmedPassword){

            }
            else {
                return "Passwords do not match.Please Try again";
            }
        };

	});