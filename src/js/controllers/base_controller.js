module.exports = (function() {

  function BaseController() {
  };

  BaseController.prototype.beforeViewLoad = function() {
  };

  BaseController.prototype.setApplication = function(application) {
    this.__application = application;
  };

  BaseController.prototype.loadController = function(controller) {
    this.__application.loadController(controller);
  };

  BaseController.prototype.dismiss = function() {
    this.__application.dismissController(this);
  };

  return BaseController;
})();
