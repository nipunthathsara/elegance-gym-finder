'use strict';

angular.module('AnnAuthApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('trainerProfile', {
        url: '/trainer',
        templateUrl: 'app/Trainer/trainerProfile/trainerProfile.html',
        controller: 'trainerProfileCtrl'
      });
  });