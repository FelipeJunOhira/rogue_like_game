var MenuController = require('./controllers/menu_controller.js');

module.exports = (function() {

  function App() {
  };

  App.prototype.start = function() {
    var menuController = new MenuController();
  };

  return App;
})();
