(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(function(require) {
    var $, Backbone, Thread, _;
    $ = require('jquery');
    _ = require('underscore');
    Backbone = require('backbone');
    (function() {});
    return Thread = (function(_super) {

      __extends(Thread, _super);

      function Thread() {
        return Thread.__super__.constructor.apply(this, arguments);
      }

      Thread.prototype.urlRoot = '/api/1/threads';

      Thread.prototype.defaults = {
        selected: false
      };

      return Thread;

    })(Backbone.Model);
  });

}).call(this);
