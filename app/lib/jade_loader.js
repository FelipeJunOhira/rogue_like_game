module.exports = (function() {

  function JadeLoader(filePath) {
    this.filePath = filePath;
  };

  JadeLoader.prototype.load = function() {
    return require('../../' + this.filePath + '.jade');
  };

  return JadeLoader;
})();
