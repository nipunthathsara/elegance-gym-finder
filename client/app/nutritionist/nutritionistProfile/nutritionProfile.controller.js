'use strict';

angular.module('AnnAuthApp')
    .controller('nutritionistProfCtrl', function($window, $location, $scope, $http, NutritionistService, $rootScope) {
        $scope.nutritionist = {};
        $scope.errors = {};

       

        NutritionistService.viewNutritionists().then(function(data) {
            $scope.nutritionists = data.data;
        });

        $scope.deleteNutritionist = function(nutritionist){
            if(confirm('You sure want to delete this item?')){
                NutritionistService.deleteNutritionist(nutritionist._id).then(function(){
                    $window.location.reload();
                });
            }
        }

        $scope.editNutritionist = function(nutritionist) {
          if(nutritionist){
           
              $rootScope.tempNutritionist=nutritionist;
             // NutritionistService.checkFun(3);
              $location.path('/editNutritionist');   
           }
           else{
              $location.path('/viewNutritionists'); 
           }   
        }


        $scope.addNutritionist = function(form) {
            NutritionistService.addNutritionist({
                    name: $scope.nutritionist.name,
                    phone: $scope.nutritionist.phone,
                    address: {no:$scope.nutritionist.address,street:"",city:""},
                    availability: $scope.nutritionist.availability,
                    rating: $scope.nutritionist.rating,
                   })
                .then(function() {
                    $location.path('/viewNutritionists');
                })
                .catch(function(err) {
                    $scope.errors.other = err.message; //not displaying
                    console.log('error ocured while saving nutritionist');
                });
        }

        $scope.submitEdit = function(form, id) {

            NutritionistService.editNutritionist({
                    name: $rootScope.tempNutritionist.name,
                    phone: $rootScope.tempNutritionist.phone,
                    address: {no:$scope.tempNutritionist.address,street:"",city:""},
                    availability: $rootScope.tempNutritionist.availability,
                    rating: $rootScope.tempNutritionist.rating,

                },id)
                .then(function() {
                    $location.path('/viewNutritionists');
                })
                .catch(function(err) {
                    $scope.errors.other = err.message; //not displaying
                    console.log('error ocured while editing nutritionist');
                });
        }

    });



