'use strict';

/**
 * @ngdoc function
 * @name rottenTomatoesAngularProjApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the rottenTomatoesAngularProjApp
 */
angular.module('rottenTomatoesAngularProjApp')
    .controller('MainCtrl', function ($scope, $log, jljRottenTomatoes) {
        jljRottenTomatoes.lists.openingMovies({limit: 10, page: 1}).then(function (response) {
            $scope.openingMovies = response.data.movies;
        });
    
        jljRottenTomatoes.lists.boxOffice({limit: 10}).then(function (response) {
            $scope.topMovies = response.data.movies;
        });
    
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    });