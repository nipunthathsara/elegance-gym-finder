'use strict';

angular.module('AnnAuthApp')
    .factory('NutritionistService', function nutritionist($http) {

        return {

            addNutritionist: function (nutritionist) {
                return $http.post('/api/nutritionist', nutritionist);
            },

            viewNutritionists: function () {
                return $http.get('/api/nutritionist')
            },

            editNutritionist: function (nutritionist, id) {
                return $http.put('/api/nutritionist/' + id, nutritionist)//send id as params to update

            },

            deleteNutritionist: function (id) {
                return $http.delete('/api/nutritionist/' + id);
            }
            // ,

            // checkFun: function(id){
            //   return $http.post('/api/nutritionist/check/' + id);
            // }

        };
    });

