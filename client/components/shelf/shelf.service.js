'use strict';

angular.module('AnnAuthApp')
  .factory('Shelf', function Shelf($http) {
    
    return {

      addGym: function(gym) {
        return $http.post('/api/gyms', gym);
      },

      listGyms: function(){
      	return $http.get('/api/gyms')
      },

      editGym: function(gym){
      	return $http.put('/api/gyms/:id', gym)//send id as params to update
      	//not done
      },

      deleteGym: function(id){
      	return $http.delete('/api/gyms/' + id);
      }

    };
  });