'use strict';

angular.module('AnnAuthApp')
    .controller('nutritionsCtrl', function($window, $location, $scope, $http, Nutritions) {
        $scope.nutrition = {};
        $scope.errors = {};
        $scope.editNutrition = {};

        Nutritions.viewNutritions().then(function(data) {
            $scope.nutritions = data.data;
        });

        $scope.deleteNutrition = function(nutrition){
            if(confirm('You sure want to delete this item?')){
                Nutritions.deleteGym(nutrition._id).then(function(){
                    $window.location.reload();
                });
            }
        }

        $scope.editNutrition = function(nutrition) {
            $location.path('/editGym');
            console.log(nutrition);
            $scope.editgym.name=nutrition.name;//not binding

           
        }


        $scope.addNutrition = function(form) {

            Nutritions.addNutrition({
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

            Nutritions.editNutrition({
                    name: $scope.editGym.name,
                    location: $scope.editGym.location,
                    type: $scope.editGym.type,
                    address: $scope.editGym.address,
                    phone: $scope.editGym.phone,
                    price: $scope.editGym.price,
                    hours: $scope.editGym.hours,
                    webSite: $scope.editGym.webSite
                    //cover to be added
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



