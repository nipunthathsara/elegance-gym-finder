'use strict';

angular.module('AnnAuthApp')
    .controller('ShelfCtrl', function($window, $location, $scope, $http, Shelf, $rootScope) {
        $scope.gym = {};
        $scope.errors = {};
        // $scope.editGym = {};

        Shelf.listGyms().then(function(data) {
            $scope.gymlist = data.data;
        });

        $scope.deleteGym = function(gymObj){
            if(confirm('You sure want to delete this item?')){
                Shelf.deleteGym(gymObj._id).then(function(){
                    $window.location.reload();
                });
            }
        }

        $scope.editGym = function(gymObj) {
            $rootScope.editGymObj = gymObj;
            $location.path('/editGym');
        }

        $scope.addGym = function(form) {
            Shelf.addGym({
                    name:$scope.gym.name,
                    latitude:$scope.gym.latitude,
                    longitude:$scope.gym.longitude,
                    type:$scope.gym.type,
                    address:{
                        no:$scope.gym.number,
                        street:$scope.gym.street,
                        city:$scope.gym.city,
                    },
                    phone:$scope.gym.phone,
                    price:$scope.gym.price,
                    weekDayHours:$scope.gym.weekDayHours,
                    saturdayHours:$scope.gym.saturdayHours,
                    sundayHours:$scope.gym.sundayHours,
                    webSite:$scope.gym.webSite,
                    cover:$scope.file
                })
                .then(function() {
                    $location.path('/listGyms');
                })
                .catch(function(err) {
                    $scope.errors.other = err.message; //not displaying
                    console.log('error ocured while saving gym');
                });
        }

        $scope.submitEdit = function(form, id) {

            Shelf.editGym({
                    name:$rootScope.editGymObj.name,
                    latitude:$rootScope.editGymObj.latitude,
                    longitude:$rootScope.editGymObj.longitude,
                    address:{
                        no:$rootScope.editGymObj.number,
                        street:$rootScope.editGymObj.street,
                        city:$rootScope.editGymObj.city,
                    },
                    weekDayHours:$rootScope.editGymObj.weekDayHours,
                    saturdayHours:$rootScope.editGymObj.saturdayHours,
                    sundayHours:$rootScope.editGymObj.sundayHours,
                    phone:$rootScope.editGymObj.phone,
                    price:$rootScope.editGymObj.price
                    //cover to be added
                }, id)
                .then(function() {
                    $location.path('/listGyms');
                })
                .catch(function(err) {
                    $scope.errors.other = err.message; //not displaying
                    console.log('error occurred while editing gym');
                });
        }

    });
