var ControllerManager = require('./application/controller_manager');
var KeyboardEventEmitter = require('./application/keyboard_event_emitter');
var ControllerEventDispatcher = require('./application/controller_event_dispatcher');

module.exports = (function() {

  function Application() {
    this._controllerManager = new ControllerManager();
    this._keyboardEventEmitter = new KeyboardEventEmitter(this);
  };

  Application.prototype.loadController = function(controller) {
    this._controllerManager.pushController(controller);
    controller.setApplication(this);
    controller.load();
  };

  Application.prototype.dismissController = function(controller) {
    if (this._controllerManager.getLastController() === controller) {
      this.dismissLastController();
    } else {
      this._controllerManager.removeController(controller);
    }
  };

  Application.prototype.dismissLastController = function() {
    var lastController = this._controllerManager.getLastController();
    this._controllerManager.removeController(lastController);

    var controller = this._controllerManager.getLastController();
    controller.load();
  };

  Application.prototype.onKeyBoardEvent = function(event) {
    if (this._controllerManager.hasAnyController()) this._dispatchEvent(event);
  };

  Application.prototype._dispatchEvent = function(event) {
    var controller = this._controllerManager.getLastController();
    ControllerEventDispatcher
      .withController(controller)
      .dispatchEvent(event);
  };

  return Application;
})();
