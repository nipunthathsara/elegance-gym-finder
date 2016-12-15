'use strict';

angular.module('AnnAuthApp')
    .factory('Shelf', function Shelf($http) {

// <<<<<<< HEAD
//       addGym: function(gym) {
//         console.log("bbbb");
//         return $http.post('/api/gyms', gym);
//       },
// =======
        return {
// >>>>>>> e54da9e7bf4a4a4c39ee11ae167de97533c9af6d

            addGym: function (gym) {
                return $http.post('/api/gyms', gym);
            },

            listGyms: function () {
                return $http.get('/api/gyms');
            },

            editGym: function (gym) {
                return $http.put('/api/gyms/:id', gym);//send id as params to update
                //not done
            },

            deleteGym: function (id) {
                return $http.delete('/api/gyms/' + id);
            }

        };
    });