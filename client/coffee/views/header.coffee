define (require) ->

    $           = require 'jquery'
    _           = require 'underscore'
    Backbone    = require 'backbone'
    Marionette  = require 'backbone.marionette'
    tmplHeader  = require 'hbs!templates/header'
    ->

    class HeaderView extends Marionette.ItemView
        template: tmplHeader

        initialize: (opts) ->
            _.bindAll @

        onRender: ->
            @

    HeaderView