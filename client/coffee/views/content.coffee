define (require) ->

    $           = require 'jquery'
    _           = require 'underscore'
    Backbone    = require 'backbone'
    Marionette  = require 'backbone.marionette'
    tmplContent = require 'hbs!templates/content'
    ->

    class ContentView extends Marionette.ItemView
        template: tmplContent

        initialize: (opts) ->
            _.bindAll @

        onRender: ->
            @

    ContentView