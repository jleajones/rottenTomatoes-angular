'use strict';

/**
 * @ngdoc service
 * @name rottenTomatoesAngularProjApp.jljRottenTomatoes
 * @description
 * # jljRottenTomatoes
 * Provider in the rottenTomatoesAngularProjApp.
 */

function RottenTomatoesProvider() {
    // Private variables
    var provider = this;

    provider.key = null;
    provider.version = null;
    provider.apiUrl = 'http://api.rottentomatoes.com/api/public/:version/';

    provider.config = {
        params: {
            apikey: provider.key,
            callback: 'JSON_CALLBACK'
        }
    };

    provider.setKey = function (value) {
        provider.key = provider.config.params.apikey = value;
    };

    provider.setVersion = function (value) {
        provider.version = value;
        provider.apiUrl = provider.apiUrl.replace(/:version/, provider.version);
    };

    // Private constructor
    function RottenTomatoesFactory($http, $log) {
        // Warn if key is missing
        if (!angular.isString(provider.key)) {
            throw 'Missing Rotten Tomatoes API key.';
        }

        var $api = {};
        var factory = {};

        var _snakeCaseKeys = function (src) {
            var dest = {};
            for (var key in src) {
                if (src.hasOwnProperty(key)) {
                    key = key;
                    dest[key.replace(/([A-Z]{1,})/g, '_$1').toLowerCase()] = src[key];
                }
            }
            return dest;
        };

        $api.request = function (path, params) {
            var uri = provider.apiUrl + (path ? path : '');
            var config = angular.copy(provider.config);

            angular.extend(config.params, _snakeCaseKeys(params));
            $log.debug('Requesting ' + uri);

            return $http.jsonp(uri, config).then(function (response) {
                $log.debug(response.status + ' ' + response.config.url);
                return response;
            }, function (error) {
                $log.error(error);
                return error;
            });
        };

        $api.requestId = function (id, urn, params) {
            return $api.request(urn.replace(/:id/, id), params);
        };

        function RottenTomatoesApi($api) {
            var getMovieInfoById;
            var getMovieReviewsById;
            var getMovieCast;
            var getRelatedMovies;
            var getMoiveClips;
            var search;

            var getUpcomingMovies;
            var getOpeningMovies;
            var getInTheaterMovies;
            var getBoxOfficeMovies;
            var getDvdReleases;
            var getTopRentals;
            var getCurrentDvdReleases;
            var getUpcomingDvds;

            getMovieInfoById = function (id) {
                $log.debug('Getting movie by id: ' + id);
                return $api.requestId(id, 'movies/:id.json');
            };

            getMovieReviewsById = function (id, params) {
                $log.debug('Getting movie reviews by id: ' + id);
                return $api.requestId(id, 'movies/:id/reviews.json', params, ['reviewType', 'pageLimit', 'page', 'country']);
            };

            getMovieCast = function (id) {
                $log.debug('Getting movie cast by id: ' + id);
                return $api.requestId(id, 'movies/:id/cast.json');
            };

            getRelatedMovies = function (id, params) {
                $log.debug('Getting movies related to id: ' + id);
                return $api.requestId(id, 'movies/:id/similar.json', params, ['limit']);
            };

            getMoiveClips = function (id) {
                $log.debug('Getting movie clips of id: ' + id);
                return $api.requestId(id, 'movies/:id/clips.json');
            };

            search = function (q, params) {
                $log.debug('Searching for: ' + q);
                angular.extend(params || {}, {
                    q: q
                });

                return $api.request('movies.json', params, ['pageLimit', 'page', 'country']);
            };

            getUpcomingMovies = function (params) {
                $log.debug('Getting the upcoming movies...');
                return $api.request('lists/movies/upcoming.json', params, ['pageLimit', 'page', 'country']);
            };

            getOpeningMovies = function (params) {
                $log.debug('Getting the opening movies...');
                return $api.request('lists/movies/opening.json', params, ['limit', 'country']);
            };

            getInTheaterMovies = function (params) {
                $log.debug('Getting movies in theater...');
                return $api.request('lists/movies/in_theaters.json', params);
            };

            getBoxOfficeMovies = function (params) {
                $log.debug('Getting box office movies...');
                return $api.request('lists/movies/box_office.json', params);
            };

            getDvdReleases = function (params) {
                $log.debug('Getting current dvd releases...');
                return $api.request('lists/dvds/new_releases.json', params, ['pageLimit', 'page', 'country']);
            };

            getTopRentals = function (params) {
                $log.debug('Getting top dvd rentals...');
                return $api.request('lists/dvds/top_rentals.json', params, ['limit', 'country']);
            };

            getCurrentDvdReleases = function (params) {
                $log.debug('Getting current dvds...');
                return $api.request('lists/dvds/current_releases.json', params, ['pageLimit', 'page', 'country']);
            };

            getUpcomingDvds = function (params) {
                $log.debug('Getting upcoming dvds...');
                return $api.request('lists/dvds/upcoming.json', params, ['pageLimit', 'page', 'country']);
            };

            return {
                movies: {
                    getById: getMovieInfoById,
                    getReveiws: getMovieReviewsById,
                    getCast: getMovieCast,
                    getRelated: getRelatedMovies,
                    getClips: getMoiveClips,
                    search: search
                },
                lists: {
                    upcomingMovies: getUpcomingMovies,
                    openingMovies: getOpeningMovies,
                    inTheaters: getInTheaterMovies,
                    boxOffice: getBoxOfficeMovies,
                    newDvds: getDvdReleases,
                    topDvds: getTopRentals,
                    currentDvds: getCurrentDvdReleases,
                    upcomingDvds: getUpcomingDvds
                }
            };
        }

        angular.extend(factory, {
            '$api': $api
        });
        
        angular.extend(factory, new RottenTomatoesApi($api));

        return factory;
    }

    this.$get = ['$http', '$log', RottenTomatoesFactory];
}

angular.module('rottenTomatoesAngularProjApp')
    .provider('jljRottenTomatoes', RottenTomatoesProvider);