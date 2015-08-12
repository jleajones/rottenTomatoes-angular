'use strict';

/**
 * @ngdoc filter
 * @name rottenTomatoesAngularProjApp.filter:jljEncodeUri
 * @function
 * @description
 * # jljEncodeUri
 * Filter in the rottenTomatoesAngularProjApp.
 */
angular.module('rottenTomatoesAngularProjApp')
  .filter('jljEncodeUri', function ($window) {
    return function (input) {
      return $window.encodeURIComponent(input);
    };
  });
