'use strict';

angular.module('AnnAuthApp')
  .factory('Shelf', function Shelf($http) {
    
    return {

      addGym: function(gym) {
        return $http.post('/api/gyms', gym);
      }

    };
  });
