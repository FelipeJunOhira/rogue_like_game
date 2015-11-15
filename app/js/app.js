define(function() {

  var App = (function() {

    function App() {
    };

    App.prototype.start = function() {
      console.log('App started!');
    };

    return App;
  })();

  return App;
});
