var expect = require('chai').expect;

var ViewLoader = require('app/lib/view_loader');

describe('ViewLoader', function() {
  var viewLoader;

  it('can be instantiated', function() {
    expect(new ViewLoader()).to.be.instanceof(ViewLoader);
  });

  describe('.load', function() {
    beforeEach(function() {
      viewLoader = new ViewLoader('tests/fixtures');
    });

    it('returns a HTML compiler function', function() {
      var compiler = viewLoader.load('template');

      expect(compiler()).to.be.equal('<div>Test Success!</div>');
    });
  });
});
