var Screen = require('../lib/screen');
var ViewLoader = require('../lib/view_loader');

var MenuController = require('./controllers/menu_controller.js');

module.exports = (function() {

  function App() {
    this.screen = Screen.getInstance();
    this.controllerStack = [];
  };

  App.prototype.start = function() {
    var menuController = new MenuController();

    this.loadController(menuController);
  };

  App.prototype.loadController = function(controller) {
    this.addControllerToStack(controller);

    this.getCurrentController().setApplication(this);

    this._displayCurrentController();
  };

  App.prototype.addControllerToStack = function(controller) {
    this.controllerStack.push(controller);
  };

  App.prototype.getCurrentController = function() {
    return this.controllerStack[this.controllerStack.length - 1];
  };

  App.prototype.dismissController = function(controller) {
    var controllerIndex = this.controllerStack.indexOf(controller);
    this.controllerStack.splice(controllerIndex, 1);

    var shouldReloadCurrentController =
      controllerIndex == this.controllerStack.length;
    if (shouldReloadCurrentController) {
      this._displayCurrentController();
    }
  };

  App.prototype._displayCurrentController = function() {
    var currentController = this.getCurrentController();
    currentController.content = this._loadCurrentControllerContent();
    currentController.beforeViewLoad();
    this._loadContent(currentController.content);
  };

  App.prototype._loadContent = function(content) {
    this.screen.addContent(content);
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
    var controllerName = this.getCurrentController().constructor.name;
    return controllerName
            .replace(/Controller/, '')
            .replace(/([A-Z])/g, '_$1')
            .substr(1)
            .toLowerCase();
  };

  return App;
})();
