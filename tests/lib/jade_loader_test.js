var expect = require('chai').expect;

var JadeLoader = require('src/lib/jade_loader');

describe('JadeLoader', function() {
  it('can be instantiated', function() {
    expect(new JadeLoader()).to.be.instanceof(JadeLoader);
  });

  describe('.load', function() {
    it('returns a HTML compiler function', function() {
      var jadeLoader = new JadeLoader('tests/fixtures/template');
      var compiler = jadeLoader.load();

      expect(compiler()).to.be.equal('<div>Test Success!</div>');
    });
  });
});
