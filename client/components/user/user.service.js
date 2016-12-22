//There is another User service alreeady, this won't be needed. 
//uncommenting this service makes erros

/*'use strict';

angular.module('AnnAuthApp')
    .factory('User', function User($http) {

        return {

            addUser: function (user) {
                return $http.post('/api/users', user);
            },

            listUsers: function () {
                return $http.get('/api/users');
            },

            editUser: function (user, id) {
                return $http.put('/api/users/' + id, user);//send id as params to update
                //not done
            },

            deleteUser: function (id) {
                return $http.delete('/api/users/' + id);
            }

        };
    });*/
