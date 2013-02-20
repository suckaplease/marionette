(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(function(require) {
    var $, Backbone, ContentView, Marionette, tmplContent, _;
    $ = require('jquery');
    _ = require('underscore');
    Backbone = require('backbone');
    Marionette = require('backbone.marionette');
    tmplContent = require('hbs!templates/content');
    (function() {});
    ContentView = (function(_super) {

      __extends(ContentView, _super);

      function ContentView() {
        return ContentView.__super__.constructor.apply(this, arguments);
      }

      ContentView.prototype.template = tmplContent;

      ContentView.prototype.initialize = function(opts) {
        return _.bindAll(this);
      };

      ContentView.prototype.onRender = function() {
        return this;
      };

      return ContentView;

    })(Marionette.ItemView);
    return ContentView;
  });

}).call(this);
