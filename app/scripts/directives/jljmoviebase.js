'use strict';

/**
 * @ngdoc directive
 * @name rottenTomatoesAngularProjApp.directive:jljMovieBase
 * @description
 * # jljMovieBase
 */
(function (angular) {
    function MovieBase($animate) {

        return {
            template: '<figure class="card large" ng-mouseenter="expand($event)" ng-mouseleave="collapse($event)">' +
                '<a ng-href="#/movies/{{ movie.title | jljEncodeUri }}"><img ng-src="{{ movie.posters.original | jljRottenTomatoImage }}" width="130" />' +
                '</a>' +

                '<figcaption>' +
                '<div class="col-xs-12"><div ng-if="movie.release_dates.theater">' +
                '<p class="uppercase"><b><i>{{ released ? "released" : "opens" }} {{ movie.release_dates.theater | date:\'EEEE\' }}</i></b>' +
                '&nbsp;&nbsp;{{ movie.release_dates.theater | date:\'MMMM d, yyyy\' }}</p>' +
                '</div>' +

                '<h3><a ng-href="#/movies/{{ movie.title | jljEncodeUri }}">{{ movie.title }}</a> <a href=""><span class="glyphicon glyphicon-heart-empty"></span></a></h3>' +
                '<p><i>{{ movie.mpaa_rating }}, {{ movie.runtime | jljHumanTime:\'mm\':\'hhh mmm\':false }}</i></p></div>' +

                '<div class="col-md-6 col-xs-12"><p><b class="capitalize">audience rating: </b>' +
                '<jlj-star-rating rating="{{ movie.ratings.audience_score }}"></jlj-star-rating></p></div>' +
                '<div class="col-md-6 col-xs-12"><p><b class="capitalize">critic rating: </b>' +
                '<jlj-star-rating rating="{{ movie.ratings.critics_score }}">' +
                '</p></div>' +
                '<div class="col-xs-12"><p>{{ movie.synopsis | limitTo: 150}}...</p>' +
                '<p><a ng-href="#/movies/{{ movie.title | jljEncodeUri }}">Read More</a></p></div>' +
                '</figcaption>' +
                '<div class="content"><div class="row"><div class="col-xs-12 col-md-3">' +
                '<h5 class="capitalize"><span class="glyphicon glyphicon-user"></span> cast</h5><ul class="list-unstyled"><li ng-repeat="member in movie.abridged_cast"><a href="">{{ member.name }}</a> <small>playing <b ng-repeat="part in member.characters">{{ part }}</span></b></small></li>' +
                '</div><div class="col-xs-12 col-md-6">' +
                '<h5 class="capitalize"><span class="glyphicon glyphicon-film"></span> clips</h5></div></div>' +
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
                scope.released = attrs.released || false;

                scope.expand = function () {
                    $animate.addClass(elem, 'expand');
                };

                scope.collapse = function () {
                    $animate.removeClass(elem, 'expand');
                };
            }
        };
    }

    angular.module('rottenTomatoesAngularProjApp')
        .directive('jljMovieBase', MovieBase);
}(angular));