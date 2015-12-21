var ViewLoader = require('../../lib/view_loader');

module.exports = (function() {
  var viewLoader = new ViewLoader('app/js/views/menu');

  function MenuController() {
    this._loadContent();
    this._bindViewElements();
    this._bindViewEvents();
  };

  MenuController.prototype._loadContent = function() {
    this._content = viewLoader.load();
  };

  MenuController.prototype._bindViewElements = function() {
    this.startGameButton = this._content.find('#start-game-button');
    this.highScoreButton = this._content.find('#high-score-button');
  };

  MenuController.prototype._bindViewEvents = function() {
    this.startGameButton.click(function() {
      console.log('Start game button clicked');
    });
    this.highScoreButton.click(function() {
      console.log('High Score button clicked');
    });
  };

  MenuController.prototype.getContent = function() {
    return this._content;
  };

  return MenuController;
})();
