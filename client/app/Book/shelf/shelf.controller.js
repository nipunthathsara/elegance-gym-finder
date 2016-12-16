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
                    name: $scope.gym.name,
                    location: $scope.gym.location,
                    type: $scope.gym.type,
                    address: {
                        no: $scope.gym.number,
                        street: $scope.gym.street,
                        city: $scope.gym.city,
                    },
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

        $scope.submitEdit = function(form, id) {
            
            Shelf.editGym({
                    name: $rootScope.editGymObj.name,
                    location: $rootScope.editGymObj.location,
                    address: {
                        no: $rootScope.editGymObj.number,
                        street: $rootScope.editGymObj.street,
                        city: $rootScope.editGymObj.city,
                    },
                    phone: $rootScope.editGymObj.phone,
                    price: $rootScope.editGymObj.price
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
