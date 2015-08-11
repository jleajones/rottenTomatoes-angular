'use strict';

describe('Service: jljRottenTomatoes', function () {

  // load the service's module
  beforeEach(module('rottenTomatoesAngularProjApp'));

  // instantiate service
  var jljRottenTomatoes;
  beforeEach(inject(function (_jljRottenTomatoes_) {
    jljRottenTomatoes = _jljRottenTomatoes_;
  }));

  it('should do something', function () {
    expect(!!jljRottenTomatoes).toBe(true);
  });

});
