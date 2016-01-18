var $ = require('jquery');

module.exports = (function() {

  function ButtonGroup(content) {
    this._content = $(content);
  };

  ButtonGroup.prototype.addClassByIndex = function(className, index) {
    var selectedChild = this._content.children()[index];
    $(selectedChild).addClass(className);
  };

  ButtonGroup.prototype.removeClass = function(className) {
    this._content.children().removeClass(className);
  };

  ButtonGroup.prototype.getSize = function() {
    return this._content.children().length;
  };

  return ButtonGroup;
})();
