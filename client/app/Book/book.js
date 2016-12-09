'use strict';

angular.module('AnnAuthApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('book', {
        url: '/addGym',
        templateUrl: 'app/book/shelf/addgym.html',
        controller: 'ShelfCtrl'
      })
      .state('listGyms',{
      	url: '/listGyms',
      	templateUrl: 'app/book/shelf/gymlist.html',
      	controller: 'ShelfCtrl'
      })
      .state('editGym',{
      	url: '/editGym',
      	templateUrl: 'app/book/shelf/gymedit.html',
      	controller: 'ShelfCtrl'
      })
  });