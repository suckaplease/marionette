define (require) ->

    $           = require 'jquery'
    _           = require 'underscore'
    Backbone    = require 'backbone'    
    ->

    class Thread extends Backbone.Model
        urlRoot: '/api/1/threads'
        defaults:
            selected: false