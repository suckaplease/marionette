(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(function(require) {
    var $, Backbone, FooterView, Marionette, tmplFooter, _;
    $ = require('jquery');
    _ = require('underscore');
    Backbone = require('backbone');
    Marionette = require('backbone.marionette');
    tmplFooter = require('hbs!templates/footer');
    (function() {});
    FooterView = (function(_super) {

      __extends(FooterView, _super);

      function FooterView() {
        return FooterView.__super__.constructor.apply(this, arguments);
      }

      FooterView.prototype.template = tmplFooter;

      FooterView.prototype.initialize = function(opts) {
        return _.bindAll(this);
      };

      FooterView.prototype.onRender = function() {
        return this;
      };

      return FooterView;

    })(Marionette.ItemView);
    return FooterView;
  });

}).call(this);
