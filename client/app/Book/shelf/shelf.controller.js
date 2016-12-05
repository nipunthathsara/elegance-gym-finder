'use strict';

angular.module('AnnAuthApp')
    .controller('ShelfCtrl', function($location, $scope, $http, Shelf) {
        $scope.book = {};
        $scope.errors = {};

        $scope.addBook = function(form){
           Shelf.addBook({
                        name: $scope.book.name,
                        author: $scope.book.author,
                        isbn: $scope.book.isbn
                    })
                    .then(function() { 
                        $location.path('/shelf');
                    })
                    .catch(function(err) {
                        $scope.errors.other = err.message; //not displaying
                        console.log('error ocured while saving book');
                    });
        }

    });