'use strict';

angular.module('AnnAuthApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('addNutritionist', {
        url: '/addNutritionist',
        templateUrl: 'app/nutritionist/nutritionistProfile/addNutritionist.html',
        controller: 'nutritionistProfCtrl'
      })
      .state('editNutritionist',{
      	url: '/editNutritionist',
      	templateUrl: 'app/nutritionist/nutritionistProfile/editNutritionist.html',
      	controller: 'nutritionistProfCtrl'
      })
      .state('viewNutritionists',{
      	url: '/viewNutritionists',
      	templateUrl: 'app/nutritionist/nutritionistProfile/viewNutritionists.html',
      	controller: 'nutritionistProfCtrl'
      })
  });