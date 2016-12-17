'use strict';

angular.module('AnnAuthApp')
    .controller('DashboardCtrl', function ($scope, $http, $location) {

        $scope.addGym = function () {

            $location.path('/addGym');

        }

        $scope.listGyms = function () {
            $location.path('/listGyms');
        }


        $scope.addTrainer = function () {
            $location.path('/addTrainer');
        }

        $scope.listTrainers = function () {
            $location.path('/listTrainers');
        }


        $scope.addNutritionist = function () {

            $location.path('/addNutritionist');

        }

        $scope.viewNutritionists = function () {
            $location.path('/viewNutritionists')
        }

    });
