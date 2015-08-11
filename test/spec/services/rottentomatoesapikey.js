'use strict';

describe('Service: rottenTomatoesApiKey', function () {

  // load the service's module
  beforeEach(module('rottenTomatoesAngularProjApp'));

  // instantiate service
  var rottenTomatoesApiKey;
  beforeEach(inject(function (_rottenTomatoesApiKey_) {
    rottenTomatoesApiKey = _rottenTomatoesApiKey_;
  }));

  it('should do something', function () {
    expect(!!rottenTomatoesApiKey).toBe(true);
  });

});
