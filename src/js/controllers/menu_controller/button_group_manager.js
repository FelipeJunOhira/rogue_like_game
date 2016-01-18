module.exports = (function() {

  function ButtonGroupManager(buttonGroup) {
    this._buttonGroup = buttonGroup;
    this._index = 0;
    this._selectCurrentButton();
  };

  ButtonGroupManager.prototype.selectNextButton = function() {
    this._index++;
    this._index = this._index % this._buttonGroup.getSize();
    this._selectCurrentButton();
  };

  ButtonGroupManager.prototype.selectPreviousButton = function() {
    this._index--;
    if (this._index < 0) this._index = this._buttonGroup.getSize() - 1;
    this._selectCurrentButton();
  };

  ButtonGroupManager.prototype._selectCurrentButton = function() {
    this._buttonGroup.removeClass('selected');
    this._buttonGroup.addClassByIndex('selected', this._index);
  };

  ButtonGroupManager.prototype.getSelectedIndex = function() {
    return this._index;
  };

  return ButtonGroupManager;
})();
