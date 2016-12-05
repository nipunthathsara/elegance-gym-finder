'use strict';

angular.module('AnnAuthApp')
  .factory('Shelf', function Shelf($http) {
    
    return {

      addBook: function(book) {
        return $http.post('/api/books', book);
      }

    };
  });
