(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(function(require) {
    var $, Backbone, HeaderView, Marionette, tmplHeader, _;
    $ = require('jquery');
    _ = require('underscore');
    Backbone = require('backbone');
    Marionette = require('backbone.marionette');
    tmplHeader = require('hbs!templates/header');
    (function() {});
    HeaderView = (function(_super) {

      __extends(HeaderView, _super);

      function HeaderView() {
        return HeaderView.__super__.constructor.apply(this, arguments);
      }

      HeaderView.prototype.template = tmplHeader;

      HeaderView.prototype.initialize = function(opts) {
        return _.bindAll(this);
      };

      HeaderView.prototype.onRender = function() {
        return this;
      };

      return HeaderView;

    })(Marionette.ItemView);
    return HeaderView;
  });

}).call(this);
