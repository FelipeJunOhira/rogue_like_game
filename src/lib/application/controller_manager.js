module.exports = (function() {

  function ControllerManager() {
    this._stack = [];
  };

  ControllerManager.prototype.pushController = function(controller) {
    this._stack.push(controller);
  };

  ControllerManager.prototype.popController = function() {
    return this._stack.pop();
  };

  ControllerManager.prototype.hasController = function(controller) {
    return this._stack.indexOf(controller) > -1;
  };

  ControllerManager.prototype.removeController = function(controller) {
    if (!this.hasController(controller)) return undefined;

    var index = this._stack.indexOf(controller);
    return this._stack.splice(index, 1)[0];
  };

  ControllerManager.prototype.getLastController = function() {
    var hasAnyController = this._stack.length > 0;
    return hasAnyController ? this._stack[this._stack.length - 1] : undefined;
  };

  return ControllerManager;
})();
