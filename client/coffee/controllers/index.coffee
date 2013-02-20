define (require) ->
    vent  = require 'vent'
    ->

    { someFunction: (param) ->
        vent.trigger 'namespace:action', param
    }
