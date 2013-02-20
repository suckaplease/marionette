(function() {

  require.config({
    paths: {
      modernizr: "libs/modernizr",
      jquery: "libs/jquery",
      underscore: "libs/lodash",
      backbone: "libs/backbone",
      "backbone.validateAll": "plugins/Backbone.validateAll",
      hbs: "libs/hbs",
      Handlebars: "libs/Handlebars",
      templates: "../templates",
      "backbone.marionette": "libs/backbone.marionette",
      bmh: "libs/backbone.marionette.handlebars"
    },
    shim: {
      backbone: {
        deps: ["underscore", "jquery"],
        exports: "Backbone"
      },
      "backbone.validateAll": ["backbone"],
      "backbone.marionette": {
        deps: ["backbone", "bmh"],
        exports: "Marionette"
      }
    },
    hbs: {
      helperPathCallback: function(name) {
        return "helpers/all";
      },
      templateExtension: "hbs",
      disableI18n: true
    }
  });

  require(["app", "modernizr", "jquery", "backbone", "backbone.marionette", "routers/index", "controllers/index"], function(app, Modernizr, $, Backbone, Marionette, Router, Controller) {
    app.start();
    new Router({
      controller: Controller
    });
    return Backbone.history.start;
  });

}).call(this);
