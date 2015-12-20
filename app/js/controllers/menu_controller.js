var Screen = require('../../lib/screen');
var ViewLoader = require('../../lib/view_loader');

module.exports = (function() {
  var viewLoader = new ViewLoader('app/js/views/menu');

  function MenuController() {
    var loader = viewLoader.load();
    this._content = loader();
    this.screen = Screen.getInstance();
    this.screen.addContent(this._content);
  };

  return MenuController;
})();
