'use strict';

describe('Filter: jljRottenTomatoImage', function () {

    // load the filter's module
    beforeEach(module('rottenTomatoesAngularProjApp'));

    // initialize a new instance of the filter before each test
    var jljRottenTomatoImage;
    beforeEach(inject(function ($filter) {
        jljRottenTomatoImage = $filter('jljRottenTomatoImage');
    }));

    it('should return the input prefixed with "jljRottenTomatoeImage filter:"', function () {
        var imgUrl = 'http://resizing.flixster.com/Sp8CtoHrWWrL8eTVD93xbAHFdxw=/54x79/dkpu1ddg7pbsk.cloudfront.net/movie/11/18/07/11180766_ori.jpg';

        expect(jljRottenTomatoImage(imgUrl)).toBe('http://content6.flixster.com/movie/11/18/07/11180766_ori.jpg');
    });

});