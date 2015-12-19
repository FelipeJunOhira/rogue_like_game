var expect = require('chai').expect;

var Application = require('app/lib/application');

describe('Application', function() {
  it('can be instantiated', function() {
    expect(new Application()).to.be.instanceof(Application);
  });
});
