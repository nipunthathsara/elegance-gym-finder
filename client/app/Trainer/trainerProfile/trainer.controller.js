'use strict';

angular.module('AnnAuthApp')
    .controller('trainerProfileCtrl', function($window, $location, $scope, $http, Trainer,$rootScope) {
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
            $location.path('/editTrainer');
            $rootScope.editTrainerObj = trainerObj;
            console.log(trainerObj.name);
        }


        $scope.addTrainer = function(form) {

            Trainer.addTrainer({
                name: $scope.trainer.name,
                location: $scope.trainer.location,
                address: $scope.trainer.address,
                phone: $scope.trainer.phone,
                price: $scope.trainer.price,
                cover: $scope.file
            })
                .then(function() {
                    $location.path('/listTrainers');
                })
                .catch(function(err) {
                    $scope.errors.other = err.message; //not displaying
                    console.log('error ocured while saving trainer');
                });
        }

        $scope.submitEdit = function(form, id) {

            Trainer.editTrainer({
                name: $scope.editTrainer.name,
                location: $scope.editTrainer.location,
                address: $scope.editTrainer.address,
                phone: $scope.editTrainer.phone,
                price: $scope.editTrainer.price
                //cover to be added
            })
                .then(function() {
                    $location.path('/listTrainers');
                })
                .catch(function(err) {
                    $scope.errors.other = err.message; //not displaying
                    console.log('error ocured while editing trainer');
                });
        }

    });
