'use strict';

/**
 * @ngdoc directive
 * @name rottenTomatoesAngularProjApp.directive:jljStarRating
 * @description
 * # jljStarRating
 */
angular.module('rottenTomatoesAngularProjApp')
    .directive('jljStarRating', function () {
        return {
            template: '<div></div>',
            restrict: 'E',
            scope: {},
            link: function postLink(scope, element, attrs) {
                var score = 0;
                var htmlStr = [];
                var starElemFill = '<span class="glyphicon glyphicon-star"></span>';
                var starElemEmpty = '<span class="glyphicon glyphicon-star-empty"></span>';
                
                while ((score += 20) <= attrs.rating) {
                    htmlStr.push(starElemFill);
                }
                
                if (htmlStr.length < 3) {
                    element.addClass('danger');
                } else if (htmlStr.length < 4) {
                    element.addClass('warning');
                } else {
                    element.addClass('success');
                }

                while (htmlStr.length < 5) {
                    htmlStr.push(starElemEmpty);
                }
                element.html(htmlStr.join(''));
            }
        };
    });