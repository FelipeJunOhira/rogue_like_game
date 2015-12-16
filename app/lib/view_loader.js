module.exports = (function() {

  function ViewLoader() {
  };

  ViewLoader.prototype.loadTemplate = function(templateName) {
    return require('../templates/' + templateName + ".jade");
  };

  ViewLoader.prototype.loadView = function(viewName) {
    return require('../js/views/' + viewName + ".jade");
  };

  return ViewLoader;
})();
