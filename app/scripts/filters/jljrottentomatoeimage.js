'use strict';

/**
 * @ngdoc filter
 * @name rottenTomatoesAngularProjApp.filter:jljRottenTomatoeImage
 * @function
 * @description
 * # jljRottenTomatoeImage
 * Filter in the rottenTomatoesAngularProjApp.
 */
angular.module('rottenTomatoesAngularProjApp')
    .filter('jljRottenTomatoImage', function () {
        return function (input) {
            return 'http://content6.flixster.com/' + input.slice(input.indexOf('movie/'));
        };
    });