'use strict';

angular.module('AnnAuthApp')
    .controller('ShelfCtrl', function($location, $scope, $http, Shelf) {
        $scope.gym = {};
        $scope.errors = {};
        //$scope.editGym = {};

        Shelf.listGyms().then(function(data) {
            $scope.gymlist = data.data;
        });

        $scope.editGym = function(gymObj) {
            $location.path('/editGym');
//            $scope.name = 'fffff';
            /*editGym.type = gymObj.type;
            editGym = {
                name: gymObj.name,
                location: gymObj.location,
                type: gymObj.type,
                address: gymObj.address,
                phone: gymObj.phone,
                price: gymObj.price,
                hours: gymObj.hours,
                webSite: gymObj.webSite
                //cover field to be added
            };*/
            /*$scope.editGym = gymObj;
            console.log('gggg');
            console.log(editGym);*/
        }


        $scope.addGym = function(form) {

            Shelf.addGym({
                    name: $scope.gym.name,
                    location: $scope.gym.location,
                    type: $scope.gym.type,
                    address: $scope.gym.address,
                    phone: $scope.gym.phone,
                    price: $scope.gym.price,
                    hours: $scope.gym.hours,
                    webSite: $scope.gym.webSite,
                    cover: $scope.file
                })
                .then(function() {
                    $location.path('/listGyms');
                })
                .catch(function(err) {
                    $scope.errors.other = err.message; //not displaying
                    console.log('error ocured while saving gym');
                });
        }

        $scope.editGymWindow = function(form, id) {

            Shelf.editGym({
                    name: $scope.gym.name,
                    location: $scope.gym.location,
                    type: $scope.gym.type,
                    address: $scope.gym.address,
                    phone: $scope.gym.phone,
                    price: $scope.gym.price,
                    hours: $scope.gym.hours,
                    webSite: $scope.gym.webSite,
                    cover: $scope.file
                })
                .then(function() {
                    $location.path('/listGyms');
                })
                .catch(function(err) {
                    $scope.errors.other = err.message; //not displaying
                    console.log('error ocured while editing gym');
                });
        }

    });
