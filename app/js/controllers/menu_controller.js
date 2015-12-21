module.exports = (function() {

  function MenuController() {
  };

  MenuController.prototype.loadContent = function(ViewLoader) {
    var viewLoader = new ViewLoader('app/js/views/menu');
    return viewLoader.load();
  };

  MenuController.prototype.onViewLoaded = function(content) {
    this._content = content;

    this._bindViewElements();
    this._bindViewEvents();
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

  return MenuController;
})();
