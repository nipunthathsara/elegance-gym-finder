'use strict';

angular.module('AnnAuthApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('book', {
        url: '/shelf',
        templateUrl: 'app/book/shelf/shelf.html',
        controller: 'ShelfCtrl'
      });
  });