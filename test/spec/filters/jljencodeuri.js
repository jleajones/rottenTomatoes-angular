'use strict';

describe('Filter: jljEncodeUri', function () {

  // load the filter's module
  beforeEach(module('rottenTomatoesAngularProjApp'));

  // initialize a new instance of the filter before each test
  var jljEncodeUri;
  beforeEach(inject(function ($filter) {
    jljEncodeUri = $filter('jljEncodeUri');
  }));

  it('should url encode the input', function () {
    var text = 'a cat ran';
    expect(jljEncodeUri(text)).toBe(window.encodeURI(text));
  });

});
