var HighScoreController = require('./high_score_controller');
var BaseController = require('./base_controller');

module.exports = (function() {

  function MenuController() {};

  MenuController.prototype = Object.create(BaseController.prototype);
  MenuController.prototype.constructor = MenuController;

  MenuController.prototype.viewPath = '/templates/menu';

  MenuController.prototype.beforeLoadView = function() {
    this._bindViewElements();
    this._bindViewEvents();
  };

  MenuController.prototype._bindViewElements = function() {
    var content = this.getContent();
    this.startGameButton = content.find('#start-game-button');
    this.highScoreButton = content.find('#high-score-button');
  };

  MenuController.prototype._bindViewEvents = function() {
    this.startGameButton.click(this.onStartGameButtonClick.bind(this));
    this.highScoreButton.click(this.onHighScoreButtonClick.bind(this));
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
