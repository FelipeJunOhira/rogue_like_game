var ViewLoader = require('../../lib/view_loader');
var Screen = require('../../lib/screen');

module.exports = (function() {
  var EMPTY_FUNCTION = function() {};

  function BaseController() {};

  BaseController.prototype.getContent = function() {
    return this._content;
  };

  BaseController.prototype.setContent = function(content) {
    this._content = content;
  };

  BaseController.prototype.getApplication = function() {
    return this.application;
  }

  BaseController.prototype.setApplication = function(application) {
    this.application = application;
  }

  BaseController.prototype.load = function() {
    this._setupContentIfNeeded();
    this.beforeLoadView();
    this.loadView();
  };

  BaseController.prototype._setupContentIfNeeded = function() {
    if (this._content) return;
    var viewLoader = new ViewLoader('src/js/views' + this.viewPath);
    this.setContent(viewLoader.load());
  };

  BaseController.prototype.beforeLoadView = function() {};

  BaseController.prototype.loadView = function() {
    Screen.getInstance().addContent(this.getContent());
  };

  BaseController.prototype.dismiss = function() {
    var application = this.getApplication();
    application.dismissController(this);
  };

  BaseController.prototype.onKeyEnterPressed = EMPTY_FUNCTION;
  BaseController.prototype.onKeyLeftPressed = EMPTY_FUNCTION;
  BaseController.prototype.onKeyUpPressed = EMPTY_FUNCTION;
  BaseController.prototype.onKeyRightPressed = EMPTY_FUNCTION;
  BaseController.prototype.onKeyDownPressed = EMPTY_FUNCTION;

  return BaseController;
})();
