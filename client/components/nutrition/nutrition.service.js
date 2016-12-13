'use strict';

angular.module('AnnAuthApp')
  .factory('Nutritions', function nutritions($http) {
    
    return {

      addNutrition: function(nutrition) {
        return $http.post('/api/nutritions', nutrition);
      },

      viewNutritions: function(){
      	return $http.get('/api/nutritions')
      },

      editNutrition: function(nutrition){
      	return $http.put('/api/nutritions/:id', nutrition)//send id as params to update
      	//not done
      },

      deleteNutrition: function(id){
      	return $http.delete('/api/nutritions/' + id);
      }

    };
  });

