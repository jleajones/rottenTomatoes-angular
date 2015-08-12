'use strict';

describe('Directive: jljMovieBase', function () {

    // load the directive's module
    beforeEach(module('rottenTomatoesAngularProjApp'));

    var element,
        scope;

    beforeEach(inject(function ($rootScope) {
        scope = $rootScope.$new();
    }));

    it('should make hidden element visible', inject(function ($compile) {
        element = angular.element('<jlj-movie-base></jlj-movie-base>');
        element = $compile(element)(scope);
    }));
});