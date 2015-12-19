var $ = require('jquery')
var JadeLoader = require('./jade_loader');

module.exports = (function() {

  function ViewLoader(filePath) {
    this.loader = new JadeLoader(filePath);
  };

  ViewLoader.prototype.load = function(context) {
    var compiler = this.loader.load();
    return $(compiler(context));
  };

  return ViewLoader;
})();
