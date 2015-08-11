'use strict';

describe('Directive: jljStarRating', function () {

  // load the directive's module
  beforeEach(module('rottenTomatoesAngularProjApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<jlj-star-rating rating="100"></jlj-star-rating>');
    element = $compile(element)(scope);
    expect(element.html()).toBe('<span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span>');
  }));
});
