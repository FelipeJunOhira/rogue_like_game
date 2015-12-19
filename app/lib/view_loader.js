module.exports = (function() {

  function ViewLoader(basePath) {
    this.basePath = basePath;
  };

  ViewLoader.prototype.load = function(relativePath) {
    return require('../../' + this._getPath(relativePath) + '.jade');
  };

  ViewLoader.prototype._getPath = function(relativePath) {
    return this.basePath + '/' + relativePath;
  };

  ViewLoader.prototype.loadTemplate = function(templateName) {
    return require('../templates/' + templateName + ".jade");
  };

  ViewLoader.prototype.loadView = function(viewName) {
    return require('../js/views/' + viewName + ".jade");
  };

  return ViewLoader;
})();
