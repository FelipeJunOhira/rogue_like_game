var HighScoreController = require('./high_score_controller');
var BaseController = require('./base_controller');

var ButtonGroup = require('../views/components/button_group');

var ButtonGroupManager = require('./menu_controller/button_group_manager');

module.exports = (function() {
  var START_GAME_BUTTON_INDEX = 0;
  var HIGH_SCORE_BUTTON_INDEX = 1;

  function MenuController() {};

  MenuController.prototype = Object.create(BaseController.prototype);
  MenuController.prototype.constructor = MenuController;

  MenuController.prototype.viewPath = '/templates/menu';

  MenuController.prototype.beforeLoadView = function() {
    this._bindViewElements();
  };

  MenuController.prototype._bindViewElements = function() {
    var content = this.getContent();
    var buttonGroupContent = content.find('#button-group');
    var buttonGroup = new ButtonGroup(buttonGroupContent);
    this.buttonGroupManager = new ButtonGroupManager(buttonGroup);
  };

  MenuController.prototype.onKeyUpPressed = function() {
    this.buttonGroupManager.selectPreviousButton();
  };

  MenuController.prototype.onKeyDownPressed = function() {
    this.buttonGroupManager.selectNextButton();
  };

  MenuController.prototype.onKeyEnterPressed = function() {
    this._dispatchButtonClickedEvent();
  };

  MenuController.prototype._dispatchButtonClickedEvent = function() {
    var selectedIndex = this.buttonGroupManager.getSelectedIndex();
    switch (selectedIndex) {
      case START_GAME_BUTTON_INDEX:
        this.onStartGameButtonClick();
        break;
      case HIGH_SCORE_BUTTON_INDEX:
        this.onHighScoreButtonClick();
        break;
    }
  };

  MenuController.prototype.onStartGameButtonClick = function() {
    console.log('Start game button clicked');
  };

  MenuController.prototype.onHighScoreButtonClick = function() {
    var application = this.getApplication();
    var highScoreController = new HighScoreController();

    application.loadController(highScoreController);
  };

  return MenuController;
})();
