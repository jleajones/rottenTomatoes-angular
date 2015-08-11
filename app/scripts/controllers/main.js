'use strict';

/**
 * @ngdoc function
 * @name rottenTomatoesAngularProjApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the rottenTomatoesAngularProjApp
 */
angular.module('rottenTomatoesAngularProjApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
