var ControllerManager = require('./application/controller_manager');

module.exports = (function() {

  function Application() {
    this._controllerManager = new ControllerManager();
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

  return Application;
})();
