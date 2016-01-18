var BaseController = require('./base_controller');

module.exports = (function() {

  function HighScoreController() {};

  HighScoreController.prototype = Object.create(BaseController.prototype);
  HighScoreController.prototype.constructor = HighScoreController;

  HighScoreController.prototype.viewPath = '/templates/high_score';

  HighScoreController.prototype.beforeLoadView = function() {
    this._bindViewElements();
    this._bindViewEvents();
  };

  HighScoreController.prototype._bindViewElements = function() {
    var content = this.getContent();
    this.backButton = content.find('#back-button');
  };

  HighScoreController.prototype._bindViewEvents = function() {
    var self = this;
    self.backButton.click(function() {
      self.dismiss();
    });
  };

  return HighScoreController;
})();
