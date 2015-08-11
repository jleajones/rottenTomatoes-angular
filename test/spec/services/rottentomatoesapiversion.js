'use strict';

describe('Service: rottenTomatoesApiVersion', function () {

  // load the service's module
  beforeEach(module('rottenTomatoesAngularProjApp'));

  // instantiate service
  var rottenTomatoesApiVersion;
  beforeEach(inject(function (_rottenTomatoesApiVersion_) {
    rottenTomatoesApiVersion = _rottenTomatoesApiVersion_;
  }));

  it('should do something', function () {
    expect(!!rottenTomatoesApiVersion).toBe(true);
  });

});
