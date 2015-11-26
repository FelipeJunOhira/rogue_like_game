var $ = require('jquery');

module.exports = (function($) {
  function ListView(element) {
    this.$body = $(element);
  };

  ListView.prototype.appendItem = function(itemElement) {
    this.$body.append(itemElement);
  };

  return ListView;
})($);
