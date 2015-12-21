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

    this.currentController.setApplication(this);

    this._displayCurrentController();
  };

  App.prototype._displayCurrentController = function() {
    var content = this._loadCurrentControllerContent();
    this.screen.addContent(content);
    this.currentController.onContentLoaded(content);
  };

  App.prototype._loadCurrentControllerContent = function() {
    var viewPath = this._getCurrentControllerViewPath();
    var viewLoader = new ViewLoader(viewPath);
    return viewLoader.load();
  };

  App.prototype._getCurrentControllerViewPath = function() {
    return 'app/js/views/' + this._getCurrentControllerNameFormatted();
  };

  App.prototype._getCurrentControllerNameFormatted = function() {
    var controllerName = this.currentController.constructor.name;
    return controllerName
            .replace(/Controller/, '')
            .replace(/([A-Z])/g, '_$1')
            .substr(1)
            .toLowerCase();
  };

  return App;
})();
