'use strict';

angular.module('AnnAuthApp')
    .controller('ShelfCtrl', function($location, $scope, $http, Shelf) {
        $scope.gym = {};
        $scope.errors = {};

        Shelf.listGyms().then(function(data){
            $scope.gymlist = data.data;
        });
        

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
                    $location.path('/shelf');
                })
                .catch(function(err) {
                    $scope.errors.other = err.message; //not displaying
                    console.log('error ocured while saving gym');
                });
        }

    });
