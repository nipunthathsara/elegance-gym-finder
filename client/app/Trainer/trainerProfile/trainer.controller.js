'use strict';

angular.module('AnnAuthApp')
    .controller('trainerCtrl', function($window, $location, $scope, $http, Trainer,$rootScope) {
        $scope.trainer = {};
        $scope.errors = {};
        // $scope.editTrainer = {};

        Trainer.listTrainers().then(function(data) {
            $scope.trainersList = data.data;
        });

        $scope.deleteTrainer = function(trainerObj){
            if(confirm('You sure want to delete this item?')){
                Trainer.deleteTrainer(trainerObj._id).then(function(){
                    $window.location.reload();
                });
            }
        }

        $scope.editTrainer = function(trainerObj) {
          
            $rootScope.editTrainerObj = trainerObj;
              $location.path('/editTrainer');
           
        }


        $scope.addTrainer = function(form) {

            Trainer.addTrainer({
                name: $scope.trainer.name,
                location: $scope.trainer.location,
                services: $scope.trainer.services,
                phone: $scope.trainer.phone,
                price: $scope.trainer.price,
                certification: $scope.trainer.certification,
                insured: $scope.trainer.insured,
                facilityOrHouseCalls: $scope.trainer.facilityOrHouseCalls,
                cover: $scope.file
            })
                .then(function() {
                    $location.path('/listTrainers');
                })
                .catch(function(err) {
                    $scope.errors.other = err.message; //not displaying
                    console.log('error occurred while saving trainer');
                });
        }

        $scope.submitEdit = function(form, id) {

            Trainer.editTrainer({
                name: $rootScope.editTrainerObj.name,
                location: $rootScope.editTrainerObj.location,
                services: $rootScope.editTrainerObj.services,
                phone: $rootScope.editTrainerObj.phone,
                price: $rootScope.editTrainerObj.price,
                certification: $rootScope.editTrainerObj.certification,
                insured: $rootScope.editTrainerObj.insured,
                facilityOrHouseCalls: $rootScope.editTrainerObj.facilityOrHouseCalls,
                //cover to be added
            },id)
                .then(function() {
                    $location.path('/listTrainers');
                })
                .catch(function(err) {
                    $scope.errors.other = err.message; //not displaying
                    console.log('error ocured while editing trainer');
                });
        }

    });
