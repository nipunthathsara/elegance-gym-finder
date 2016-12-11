'use strict';

angular.module('AnnAuthApp')
    .controller('DashboardCtrl', function($scope, $http,$location) {

        $scope.addGym = function(){
          $location.path('/addGym');
        }

        $scope.listGyms = function(){
          $location.path('/listGyms')
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
