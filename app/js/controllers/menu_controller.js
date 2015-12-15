var Screen = require('../../lib/screen').getInstance();
var ViewLoader = require('../../lib/view_loader');

var $ = require('jquery');

module.exports = (function() {
  var viewLoader = new ViewLoader();

  function MenuController() {
    var loader = viewLoader.loadView('menu');
    this._content = loader();
    Screen.addContent(this._content);
  };

  return MenuController;
})();
