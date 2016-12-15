'use strict';

angular.module('AnnAuthApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('trainerProfile', {
                url: '/trainer',
                templateUrl: 'app/Trainer/trainerProfile/trainerProfile.html',
                controller: 'trainerCtrl'
            })
            .state('addTrainer', {
                url: '/addTrainer',
                templateUrl: 'app/Trainer/trainerProfile/addTrainer.html',
                controller: 'trainerCtrl'
            })
            .state('editTrainer', {
                url: '/editTrainer',
                templateUrl: 'app/Trainer/trainerProfile/editTrainer.html',
                controller: 'trainerCtrl'
            })
            .state('listTrainers', {
                url: '/listTrainers',
                templateUrl: 'app/Trainer/trainerProfile/listTrainers.html',
                controller: 'trainerCtrl'
            })
    });