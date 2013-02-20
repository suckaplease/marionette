(function() {

  define(function(require) {
    var $, Backbone, ContentView, FooterView, HeaderView, Marionette, app, _;
    $ = require('jquery');
    _ = require('underscore');
    Backbone = require('backbone');
    Marionette = require('backbone.marionette');
    HeaderView = require('views/header');
    ContentView = require('views/content');
    FooterView = require('views/footer');
    (function() {});
    app = new Marionette.Application;
    app.addRegions({
      header: "#header",
      content: "#content",
      footer: "#footer"
    });
    app.addInitializer(function() {
      app.header.show(new HeaderView);
      app.content.show(new ContentView);
      return app.footer.show(new FooterView);
    });
    return app;
  });

}).call(this);
