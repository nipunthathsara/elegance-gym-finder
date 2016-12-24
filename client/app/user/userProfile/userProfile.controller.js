'use strict';

angular.module('AnnAuthApp')
    .controller('userCtrl', function ($window, $location, $scope, $http, User, $rootScope) {
        $scope.user = {};
        $scope.errors = {};
        // $scope.editUser = {};

        User.listUsers().then(function (data) {
            $scope.usersList = data.data;
        });

        $scope.deleteUser = function (userObj) {
            if (confirm('You sure want to delete this item?')) {
                User.deleteUser(userObj._id).then(function () {
                    $window.location.reload();
                });
            }
        }

        $scope.editUser = function (userObj) {

            $rootScope.editUserObj = userObj;
            $location.path('/editUser');

        }

        $scope.addUser = function (form) {

            User.addUser({
                name:$scope.user.name,
                gender:$scope.user.gender,
                location:$scope.user.location,
                services:$scope.user.services,
                phone:$scope.user.phone,
                price:$scope.user.price,
                certification:$scope.user.certification,
                insureStatus:$scope.user.insureStatus,
                facilityOrHouseCalls:$scope.user.facilityOrHouseCalls,
                rating:$scope.user.rating,
                cover:$scope.file
            })
                .then(function () {
                    $location.path('/listUsers');
                })
                .catch(function (err) {
                    $scope.errors.other = err.message; //not displaying
                    console.log('error occurred while saving user');
                });
        }

        $scope.submitEdit = function (form, id) {

            User.editUser({
                name:$rootScope.editUserObj.name,
                gender:$rootScope.editUserObj.gender,
                location:$rootScope.editUserObj.location,
                services:$rootScope.editUserObj.services,
                phone:$rootScope.editUserObj.phone,
                price:$rootScope.editUserObj.price,
                certification:$rootScope.editUserObj.certification,
                insureStatus:$rootScope.editUserObj.insureStatus,
                facilityOrHouseCalls:$rootScope.editUserObj.facilityOrHouseCalls,
                rating:$rootScope.editUserObj.rating,
                //cover to be added
            }, id)
                .then(function () {
                    $location.path('/listUsers');
                })
                .catch(function (err) {
                    $scope.errors.other = err.message; //not displaying
                    console.log('error ocured while editing user');
                });
        }

    });
