'use strict';

angular.module('AnnAuthApp')
    .controller('DashboardCtrl', function($scope, $http,$location) {

        $scope.addGym = function(){
            console.log("paka");
          $location.path('/addGym');
            console.log("dddd");
        }

        $scope.listGyms = function(){
          $location.path('/listGyms');
        }

        $scope.addTrainer = function(){
            $location.path('/addTrainer');
        }

        $scope.listTrainers = function(){
            $location.path('/listTrainers');
        }






         /*$scope.books = $http.get('/api/books/'
         ).
          then(function(books){
          	return books;
          });

          $scope.addBook = function(form){
          	$http.post('api/books/',form.book
          	).
          	then(function())
          };*/

    });
