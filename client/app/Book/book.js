'use strict';

angular.module('AnnAuthApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('book', {
        url: '/addGym',
        templateUrl: 'app/Book/shelf/addgym.html',
        controller: 'ShelfCtrl'
      })
      .state('listGyms',{
      	url: '/listGyms',
      	templateUrl: 'app/Book/shelf/gymlist.html',
      	controller: 'ShelfCtrl'
      })
      .state('editGym',{
      	url: '/editGym',
      	templateUrl: 'app/Book/shelf/gymedit.html',
      	controller: 'ShelfCtrl'
      })
  });