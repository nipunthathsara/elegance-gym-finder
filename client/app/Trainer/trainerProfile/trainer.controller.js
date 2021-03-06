'use strict';

angular.module('AnnAuthApp')
    .controller('trainerCtrl', function ($window, $location, $scope, $http, Trainer, $rootScope) {
        $scope.trainer = {};
        $scope.errors = {};
        // $scope.editTrainer = {};

        Trainer.listTrainers().then(function (data) {
            $scope.trainersList = data.data;
        });

        $scope.deleteTrainer = function (trainerObj) {
            if (confirm('You sure want to delete this item?')) {
                Trainer.deleteTrainer(trainerObj._id).then(function () {
                    $window.location.reload();
                });
            }
        }

        $scope.editTrainer = function (trainerObj) {

            $rootScope.editTrainerObj = trainerObj;
            $location.path('/editTrainer');

        }

        $scope.addTrainer = function (form) {

            Trainer.addTrainer({
                name:$scope.trainer.name,
                gender:$scope.trainer.gender,
                location:$scope.trainer.location,
                services:$scope.trainer.services,
                availability:$scope.trainer.availability,
                phone:$scope.trainer.phone,
                price:$scope.trainer.price,
                certification:$scope.trainer.certification,
                insureStatus:$scope.trainer.insureStatus,
                facilityOrHouseCalls:$scope.trainer.facilityOrHouseCalls,
                rating:$scope.trainer.rating,
                latitude:$scope.trainer.latitude,
                longitude:$scope.trainer.longitude,
                cover:$scope.file
            })
                .then(function () {
                    $location.path('/listTrainers');
                })
                .catch(function (err) {
                    $scope.errors.other = err.message; //not displaying
                    console.log('error occurred while saving trainer');
                });
        }

        $scope.submitEdit = function (form, id) {

            Trainer.editTrainer({
                name:$rootScope.editTrainerObj.name,
                gender:$rootScope.editTrainerObj.gender,
                location:$rootScope.editTrainerObj.location,
                services:$rootScope.editTrainerObj.services,
                availability:$rootScope.editTrainerObj.availability,
                phone:$rootScope.editTrainerObj.phone,
                price:$rootScope.editTrainerObj.price,
                certification:$rootScope.editTrainerObj.certification,
                insureStatus:$rootScope.editTrainerObj.insureStatus,
                facilityOrHouseCalls:$rootScope.editTrainerObj.facilityOrHouseCalls,
                rating:$rootScope.editTrainerObj.rating,
                latitude:$scope.editTrainerObj.latitude,
                longitude:$scope.editTrainerObj.longitude,
                //cover to be added
            }, id)
                .then(function () {
                    $location.path('/listTrainers');
                })
                .catch(function (err) {
                    $scope.errors.other = err.message; //not displaying
                    console.log('error ocured while editing trainer');
                });
        }

    });
