'use strict';

/**
 * @ngdoc directive
 * @name rottenTomatoesAngularProjApp.directive:jljMovieBase
 * @description
 * # jljMovieBase
 */
(function (angular, holder) {
    function MovieBase($animate) {

        return {
            template: '<figure class="card large" ng-click="clickHandler($event)"><div class="row">' +
                '<a ng-href="#/movies/{{ movie.title | jljEncodeUri }}"><img ng-src="{{ movie.posters.original | jljRottenTomatoImage }}" width="130" class="poster"/>' +
                '</a>' +

                '<figcaption>' +
                '<header class="col-xs-12 "><div ng-if="movie.release_dates.theater"><h3>' +

                '<small ng-switch="released">' +
                '<s ng-switch-when="true"><b class="uppercase"><i> opens {{ movie.release_dates.theater | date:\'EEEE\' }}</i></b>' +
                '&nbsp;&nbsp;{{ movie.release_dates.theater | date:\'MMMM d, yyyy\' }}</s>' +

                '<span ng-switch-when="false"><b class="uppercase"><i> opens {{ movie.release_dates.theater | date:\'EEEE\' }}</i></b>' +
                '&nbsp;&nbsp;{{ movie.release_dates.theater | date:\'MMMM d, yyyy\' }}</span>' +
                '</small></h3></div>' +

                '<h3><a ng-href="#/title/{{ movie.title | jljEncodeUri }}">{{ movie.title }}</a> <a href=""><span class="glyphicon glyphicon-heart-empty"></span></a></h3>' +
                '<p><i>{{ movie.mpaa_rating }}, {{ movie.runtime | jljHumanTime:\'mm\':\'hhh mmm\':false }}</i></p></header>' +

                '<div class="col-md-6 col-xs-12"><p><b class="capitalize">audience rating: </b>' +
                '<jlj-star-rating rating="{{ movie.ratings.audience_score }}"></jlj-star-rating></p></div>' +
                '<div class="col-md-6 col-xs-12"><p><b class="capitalize">critic rating: </b>' +
                '<jlj-star-rating rating="{{ movie.ratings.critics_score }}">' +
                '</p></div>' +
                '<div class="col-xs-12"><p>{{ movie.synopsis | limitTo: 150}}...</p>' +
                '<p><a ng-href="#/title/{{ movie.title | jljEncodeUri }}">Read More</a></p></div>' +
                '</figcaption></div>' +
                '<div class="content"><div class="row"><div class="col-xs-12 col-md-4">' +
                '<h5 class="capitalize"><span class="glyphicon glyphicon-user"></span> cast</h5><ul class="list-unstyled"><li ng-repeat="member in movie.abridged_cast"><a href="">{{ member.name }}</a> <small ng-if="member.characters.length > 0">playing <b ng-repeat="part in member.characters">{{ part }}</span></b></small></li>' +
                '</div><div class="col-xs-12 col-md-8">' +
                '<h5 class="capitalize"><span class="glyphicon glyphicon-film"></span> clips</h5>' +

                '<div class="row">' +

                '<div class="col-xs-6 col-md-3">' +
                '<a href="" class="thumbnail"><img class="clip-poster" data-src="holder.js/100px100?theme=industrial"/></a>' +
                '</div>' +

                '<div class="col-xs-6 col-md-3">' +
                '<a href="" class="thumbnail"><img class="clip-poster" data-src="holder.js/100px100?theme=industrial"/></a>' +
                '</div>' +

                '<div class="col-xs-6 col-md-3">' +
                '<a href="" class="thumbnail"><img class="clip-poster" data-src="holder.js/100px100?theme=industrial"/></a>' +
                '</div>' +

                '<div class="col-xs-6 col-md-3">' +
                '<a href="" class="thumbnail"><img class="clip-poster" data-src="holder.js/100px100?theme=industrial"/></a>' +
                '</div>' +

                '</div></div></div>' +
                '<div class="row"><div class="col-xs-6"><button type="button" class="btn btn-success btn-lg btn-block capitalize"><span class="glyphicon glyphicon-thumbs-up"></span> good</button></div>' +
                '<div class="col-xs-6"><button type="button" class="btn btn-danger btn-lg btn-block capitalize"><span class="glyphicon glyphicon-thumbs-down"></span> bad</button></div></div>' +
                '</div></div>' +
                '</figure>',
            restrict: 'E',
            scope: {
                movie: '='
            },
            replace: true,
            link: function postLink(scope, elem, attrs) {
                holder.run({
                    'images': '.clip-poster'
                });
                scope.released = attrs.released || false;

                var expand = function () {
                    $animate.addClass(elem, 'expand');
                };

                var collapse = function () {
                    $animate.removeClass(elem, 'expand');
                };

                scope.clickHandler = function () {
                    angular.forEach(elem.parent().siblings(), function (value) {
                        var node = angular.element(value).children();
                        if (node.hasClass('expand')) {
                            $animate.removeClass(node, 'expand');
                        }
                    });

                    if (elem.hasClass('expand')) {
                        collapse();
                    } else {
                        expand();
                    }
                };
            }
        };
    }

    angular.module('rottenTomatoesAngularProjApp')
        .directive('jljMovieBase', MovieBase);
}(angular, window.Holder));