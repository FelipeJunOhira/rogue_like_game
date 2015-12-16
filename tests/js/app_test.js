var expect = require('chai').expect;

var App = require('app/js/app.js');

describe('App', function() {
  it('can be instantiated', function() {
    var instance = new App();
    expect(instance).to.be.instanceof(App);
  });
});
