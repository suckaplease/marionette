(function() {

  define(function(require) {
    var Marionette;
    Marionette = require('backbone.marionette');
    return function() {
      return new Marionette.EventAggregator;
    };
  });

}).call(this);
