'use strict';

angular.module('AnnAuthApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('addNutrition', {
        url: '/addNutrition',
        templateUrl: 'app/nutrition/nutritionprofile/addNutrition.html',
        controller: 'nutritionProfCtrl'
      })
      .state('editNutrition',{
      	url: '/editNutrition',
      	templateUrl: 'app/nutrition/nutritionprofile/editNutrition.html',
      	controller: 'nutritionProfCtrl'
      })
      .state('viewNutrition',{
      	url: '/viewNutrition',
      	templateUrl: 'app/nutrition/nutritionprofile/viewNutrition.html',
      	controller: 'nutritionProfCtrl'
      })
  });