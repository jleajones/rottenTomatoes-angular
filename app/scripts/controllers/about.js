'use strict';

/**
 * @ngdoc function
 * @name rottenTomatoesAngularProjApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the rottenTomatoesAngularProjApp
 */
angular.module('rottenTomatoesAngularProjApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
