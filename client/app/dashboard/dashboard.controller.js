'use strict';

angular.module('AnnAuthApp')
    .controller('DashboardCtrl', function($scope, $http,$location) {

        $scope.addGym = function(){
          console.log("cccc");
          $location.path('/addGym');
          console.log("aaaaa");
        }

        $scope.listGyms = function(){
          $location.path('/listGyms')
        }

        $scope.addNutritionist = function(){

          $location.path('/addNutritionist');

        }

        $scope.viewNutritionists = function(){
          $location.path('/viewNutritionists')
        }

    });
