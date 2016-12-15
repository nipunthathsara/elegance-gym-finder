'use strict';

angular.module('AnnAuthApp')
    .controller('ShelfCtrl', function($window, $location, $scope, $http, Shelf, $rootScope) {
        $scope.gym = {};
        $scope.errors = {};
        $scope.editGym = {};

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
            $rootScope.gimObject=gymObj;
            $location.path('/editGym');
            $rootScope.editGymObj = gymObj;
            console.log(gymObj.name);

        }


        $scope.addGym = function(form) {
console.log("aaa");
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

        $scope.submitEdit = function(form, id) {

            Shelf.editGym({
                    name: $scope.editGym.name,
                    location: $scope.editGym.location,
                    address: $scope.editGym.address,
                    phone: $scope.editGym.phone,
                    price: $scope.editGym.price
                    //cover to be added
                })
                .then(function() {
                    $location.path('/listGyms');
                })
                .catch(function(err) {
                    $scope.errors.other = err.message; //not displaying
                    console.log('error occurred while editing gym');
                });
        }

    });
