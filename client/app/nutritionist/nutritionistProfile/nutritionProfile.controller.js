'use strict';

angular.module('AnnAuthApp')
    .controller('nutritionistProfCtrl', function ($window, $location, $scope, $http, NutritionistService, $rootScope) {
        $scope.nutritionist = {};
        $scope.errors = {};


        NutritionistService.viewNutritionists().then(function (data) {
            $scope.nutritionists = data.data;
        });

        $scope.deleteNutritionist = function (nutritionist) {
            if (confirm('You sure want to delete this item?')) {
                NutritionistService.deleteNutritionist(nutritionist._id).then(function () {
                    $window.location.reload();
                });
            }
        }

        $scope.editNutritionist = function (nutritionist) {

            $rootScope.tempNutritionist = nutritionist;
            // NutritionistService.checkFun(3);
            $location.path('/editNutritionist');
        }


        $scope.addNutritionist = function (form) {
            NutritionistService.addNutritionist({
                name:$scope.nutritionist.name,
                gender:$scope.nutritionist.gender,
                phone:$scope.nutritionist.phone,
                address:{
                    no:$scope.nutritionist.number,
                    street:$scope.nutritionist.street,
                    city:$scope.nutritionist.city,
                },
                availability:$scope.nutritionist.availability,
                rating:$scope.nutritionist.rating,
            })
                .then(function () {
                    $location.path('/viewNutritionists');
                })
                .catch(function (err) {
                    $scope.errors.other = err.message; //not displaying
                    console.log('error ocured while saving nutritionist');
                });
        }

        $scope.submitEdit = function (form, id) {

            NutritionistService.editNutritionist({
                name:$rootScope.tempNutritionist.name,
                gender:$rootScope.tempNutritionist.gender,
                phone:$rootScope.tempNutritionist.phone,
                address:{
                    no:$rootScope.tempNutritionist.number,
                    street:$rootScope.tempNutritionist.street,
                    city:$rootScope.tempNutritionist.city,
                },
                availability:$rootScope.tempNutritionist.availability,
                rating:$rootScope.tempNutritionist.rating,

            }, id)
                .then(function () {
                    $location.path('/viewNutritionists');
                })
                .catch(function (err) {
                    $scope.errors.other = err.message; //not displaying
                    console.log('error ocured while editing nutritionist');
                });
        }

    });



