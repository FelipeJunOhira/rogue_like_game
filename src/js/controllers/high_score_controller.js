module.exports = (function() {

  function HighScoreController() {
  };

  HighScoreController.prototype.beforeViewLoad = function() {
    this._bindViewElements();
    this._bindViewEvents();
  };

  HighScoreController.prototype._bindViewElements = function() {
    this.backButton = this.content.find('#back-button');
  };

  HighScoreController.prototype._bindViewEvents = function() {
    var self = this;
    this.backButton.click(function() {
      self.dismiss();
    });
  };

  HighScoreController.prototype.setApplication = function(application) {
    this._application = application;
  };

  HighScoreController.prototype.dismiss = function() {
    this._application.dismissController(this);
  };

  return HighScoreController;
})();
