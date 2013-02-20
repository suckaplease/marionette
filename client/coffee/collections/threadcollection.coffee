define (require) ->

    $           = require 'jquery'
    _           = require 'underscore'
    Backbone    = require 'backbone'
    Thread      = require 'models/thread'
    ->

    class ThreadCollection extends Backbone.Collection
        model: Thread
        url : "../../api/1/threads/"

        parse: (resp, xhr) -> resp.results