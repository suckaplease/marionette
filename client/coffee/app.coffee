define (require) ->

    $           = require 'jquery'
    _           = require 'underscore'
    Backbone    = require 'backbone'
    Marionette  = require 'backbone.marionette'
    #tmplMain    = require 'hbs!templates/main'
    HeaderView  = require 'views/header'
    ContentView = require 'views/content'
    FooterView  = require 'views/footer'
    ->

    app = new Marionette.Application

    app.addRegions({
        header: "#header",
        content:"#content",
        footer:"#footer"
        })

    app.addInitializer () ->
        app.header.show new HeaderView
        app.content.show new ContentView
        app.footer.show new FooterView

    app