var $ = require('jquery');

module.exports = (function() {
  var instance;

  function Screen() {
    this._screenElement = _getScreenElement();
  }

  function _getScreenElement() {
    return $('#screen');
  }

  Screen.getInstance = function() {
    if (!instance) instance = new Screen();
    return instance;
  }

  Screen.prototype.addContent = function(content) {
    this._screenElement.html(content);
  }

  return Screen;
})();
