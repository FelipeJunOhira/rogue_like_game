module.exports = (function() {

  function HighScoreController() {
  };

  HighScoreController.prototype.onContentLoaded = function(content) {
    this._content = content;

    this._bindViewElements();
    this._bindViewEvents();
  };

  HighScoreController.prototype._bindViewElements = function() {
  };

  HighScoreController.prototype._bindViewEvents = function() {
  };

  HighScoreController.prototype.setApplication = function(application) {
    this._application = application;
  };

  return HighScoreController;
})();
