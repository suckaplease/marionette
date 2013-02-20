(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(function(require) {
    var $, Backbone, MainController, MainView, Marionette, _;
    $ = require('jquery');
    _ = require('underscore');
    Backbone = require('backbone');
    Marionette = require('backbone.marionette');
    MainView = require('views/main');
    (function() {});
    MainController = (function(_super) {

      __extends(MainController, _super);

      function MainController() {
        return MainController.__super__.constructor.apply(this, arguments);
      }

      MainController.prototype.initilize = function(options) {
        _.bindAll(this);
        alert("controllers/main");
        return this.region = options.region;
      };

      MainController.prototype.show = function() {
        this.view = new MainView;
        return this.region.show(this.view);
      };

      return MainController;

    })(Marionette.Controller);
    return MainController;
  });

}).call(this);
