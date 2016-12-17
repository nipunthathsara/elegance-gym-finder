'use strict';

angular.module('AnnAuthApp')
    .factory('Trainer', function Trainer($http) {

        return {

            addTrainer: function (trainer) {
                return $http.post('/api/trainers', trainer);
            },

            listTrainers: function () {
                return $http.get('/api/trainers');
            },

            editTrainer: function (trainer, id) {
                return $http.put('/api/trainers/' + id, trainer);//send id as params to update
                //not done
            },

            deleteTrainer: function (id) {
                return $http.delete('/api/trainers/' + id);
            }

        };
    });