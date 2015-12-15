module.exports = (function() {

  function ViewLoader() {
  }

  ViewLoader.prototype.loadTemplate = function(templateName) {
    return require('../templates/' + templateName + ".jade");
  }

  return ViewLoader;
})();
