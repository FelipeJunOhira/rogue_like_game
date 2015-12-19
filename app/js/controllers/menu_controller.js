var Screen = require('../../lib/screen').getInstance();
var ViewLoader = require('../../lib/view_loader');

module.exports = (function() {
  var viewLoader = new ViewLoader('app/js/views/menu');

  function MenuController() {
    var loader = viewLoader.load();
    this._content = loader();
    Screen.addContent(this._content);
  };

  return MenuController;
})();
