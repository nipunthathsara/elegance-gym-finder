'use strict';

angular.module('AnnAuthApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('userProfile', {
                url: '/user',
                templateUrl: 'app/user/userProfile/userProfile.html',
                controller: 'userCtrl'
            })
            .state('addUser', {
                url: '/addUser',
                templateUrl: 'app/user/userProfile/addUser.html',
                controller: 'userCtrl'
            })
            .state('editUser', {
                url: '/editUser',
                templateUrl: 'app/user/userProfile/editUser.html',
                controller: 'userCtrl'
            })
            .state('listUsers', {
                url: '/listUsers',
                templateUrl: 'app/user/userProfile/listUsers.html',
                controller: 'userCtrl'
            })
    });