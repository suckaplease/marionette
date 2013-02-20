define (require) ->

    $           = require 'jquery'
    _           = require 'underscore'
    Backbone    = require 'backbone'
    Marionette  = require 'backbone.marionette'
    MainView    = require 'views/main'
    
    ->

    class MainController extends Marionette.Controller
        initilize: (options) ->
            _.bindAll @
            alert "controllers/main"
            @region = options.region

        show: ->
            @view = new MainView
            @region.show(@view)

    MainController