var Screen = require('../lib/screen');
var ViewLoader = require('../lib/view_loader');

var MenuController = require('./controllers/menu_controller.js');

module.exports = (function() {

  function App() {
    this.screen = Screen.getInstance();
    this.currentController = null;
  };

  App.prototype.start = function() {
    var menuController = new MenuController();

    this.loadController(menuController);
  };

  App.prototype.loadController = function(controller) {
    this.currentController = controller;

    this._displayCurrentController();
  };

  App.prototype._displayCurrentController = function() {
    var content = this._loadCurrentControllerContent();
    this.screen.addContent(content);
    this.currentController.onViewLoaded(content);
  };

  App.prototype._loadCurrentControllerContent = function() {
    return this.currentController.loadContent(ViewLoader);
  };

  return App;
})();
