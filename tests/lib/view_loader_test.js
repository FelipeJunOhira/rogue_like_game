var expect = require('chai').expect;

var ViewLoader = require('app/lib/view_loader');

describe('ViewLoader', function() {
  it('can be instantiated', function() {
    expect(new ViewLoader()).to.be.instanceof(ViewLoader);
  });
});
