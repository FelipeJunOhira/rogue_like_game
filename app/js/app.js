var Screen = require('../lib/screen');

var MenuController = require('./controllers/menu_controller.js');

module.exports = (function() {

  function App() {
    this.screen = Screen.getInstance();
  };

  App.prototype.start = function() {
    var menuController = new MenuController();

    this.loadController(menuController);
  };

  App.prototype.loadController = function(controller) {
    this.screen.addContent(controller.getContent());
  };

  return App;
})();
