(function() {

  define(function(require) {
    var vent;
    vent = require('vent');
    (function() {});
    return {
      someFunction: function(param) {
        return vent.trigger('namespace:action', param);
      }
    };
  });

}).call(this);
