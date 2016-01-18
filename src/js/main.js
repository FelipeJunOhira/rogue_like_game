var Application = require('../lib/application');
var MenuController = require('./controllers/menu_controller.js');

var menuController = new MenuController();

var app = new Application();

app.loadController(menuController);
