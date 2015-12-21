var HighScoreController = require('./high_score_controller');

module.exports = (function() {

  function MenuController() {
  };

  MenuController.prototype.onContentLoaded = function(content) {
    this._content = content;

    this._bindViewElements();
    this._bindViewEvents();
  };

  MenuController.prototype._bindViewElements = function() {
    this.startGameButton = this._content.find('#start-game-button');
    this.highScoreButton = this._content.find('#high-score-button');
  };

  MenuController.prototype._bindViewEvents = function() {
    var self = this;
    this.startGameButton.click(function() {
      console.log('Start game button clicked');
    });
    this.highScoreButton.click(function() {
      var highScoreController = new HighScoreController();
      self._application.loadController(highScoreController);
    });
  };

  MenuController.prototype.setApplication = function(application) {
    this._application = application;
  };

  return MenuController;
})();
