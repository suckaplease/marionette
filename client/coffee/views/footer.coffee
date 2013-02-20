define (require) ->

    $           = require 'jquery'
    _           = require 'underscore'
    Backbone    = require 'backbone'
    Marionette  = require 'backbone.marionette'
    tmplFooter  = require 'hbs!templates/footer'
    ->

    class FooterView extends Marionette.ItemView
        template: tmplFooter

        initialize: (opts) ->
            _.bindAll @
            
        onRender: ->
            @

    FooterView