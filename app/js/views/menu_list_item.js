var $ = require('jquery');

module.exports = (function() {
  var template = '<div>{{title}}<div>';

  function MenuListItem(item) {
    return compileTemplate(item);
  };

  function compileTemplate(object) {
    var compiledTemplate = template.replace(/\{\{title\}\}/, object.title);
    return $(compiledTemplate);
  };

  return MenuListItem;
})();
