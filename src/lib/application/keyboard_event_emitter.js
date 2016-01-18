var $ = require('jquery');

module.exports = (function() {

  function KeyboardEventEmitter(listener) {
    this.listener = listener;

    $(document).keydown(this.dispatchEvent.bind(this));
  };

  KeyboardEventEmitter.prototype.dispatchEvent = function(event) {
    this.listener.onKeyBoardEvent(event);
  };

  return KeyboardEventEmitter;
})();
