var $ = require('jquery');
var _ = require('underscore');
var MenuListItem = require('../views/menu_list_item');

module.exports = (function() {

  function MenuController(items) {
    this.items = items;
    this._bindViewElements();
    this._setupList();
  };

  MenuController.prototype._bindViewElements = function() {
    var self = this;
    this.listView = $('#MenuController').find('#item-list');
  };

  MenuController.prototype._setupList = function() {
    var self = this;
    _.each(this.items, function(item, index) {
      var menuListItem = new MenuListItem(item);
      menuListItem.click(function() {
        self.onItemClicked(index);
      });
      self.listView.append(menuListItem);
    });
    debugger
  };

  MenuController.prototype.onItemClicked = function(itemIndex) {
    console.log(itemIndex);
  };

  return MenuController;
})();
