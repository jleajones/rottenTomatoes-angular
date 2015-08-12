'use strict';

describe('Filter: jljHumanTime', function () {

  // load the filter's module
  beforeEach(module('rottenTomatoesAngularProjApp'));

  // initialize a new instance of the filter before each test
  var jljHumanTime;
  beforeEach(inject(function ($filter) {
    jljHumanTime = $filter('jljHumanTime');
  }));

  it('should return the input prefixed with "jljHumanTime filter:"', function () {
    var text = '130';
    expect(jljHumanTime(text, 'mm', 'hhh mmm', false)).toBe('2h 10m');
  });

});
