(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(function(require) {
    var $, Backbone, Thread, ThreadCollection, _;
    $ = require('jquery');
    _ = require('underscore');
    Backbone = require('backbone');
    Thread = require('models/thread');
    (function() {});
    return ThreadCollection = (function(_super) {

      __extends(ThreadCollection, _super);

      function ThreadCollection() {
        return ThreadCollection.__super__.constructor.apply(this, arguments);
      }

      ThreadCollection.prototype.model = Thread;

      ThreadCollection.prototype.url = "../../api/1/threads/";

      ThreadCollection.prototype.parse = function(resp, xhr) {
        return resp.results;
      };

      return ThreadCollection;

    })(Backbone.Collection);
  });

}).call(this);
