var MenuController = require('./controllers/menu_controller');

var menuItems = [
  { title: 'Teste 1' },
  { title: 'Teste 2' },
  { title: 'Teste 3' },
  { title: 'Teste 4' }
]

var controller = new MenuController(menuItems);
