var expect = require('chai').expect;

var ViewLoader = require('src/lib/view_loader');
var jQuery = require('jquery');

describe('ViewLoader', function() {
  it('can be instantiated', function() {
    expect(new ViewLoader()).to.be.instanceof(ViewLoader);
  });

  describe('.load', function() {
    var jadeLoader = new ViewLoader('tests/fixtures/template');

    it('returns a jQuery object', function() {
      var $content = jadeLoader.load();

      expect($content).to.be.instanceof(jQuery);
    });

    it('returns a view file with the content set', function() {
      var context = { text: 'Test Success!' };

      var $content = jadeLoader.load(context);

      expect($content.text()).to.be.equal(context.text);
    })
  });
});
