'use strict';

angular.module('AnnAuthApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('login', {
                url: '/login',
                // url:'/',
                templateUrl: 'app/account/login/login.html',
                controller: 'LoginCtrl'
            })
            .state('signup', {
                url: '/signup',
                templateUrl: 'app/account/signup/signup.html',
                controller: 'SignupCtrl'
            });
    });