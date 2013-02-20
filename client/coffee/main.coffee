# Sets the require.js configuration for your application.
require.config

    # 3rd party script alias names (Easier to type "jquery" than "libs/jquery-1.7.2.min")
    paths:
        
        # Core Libraries
        modernizr: "libs/modernizr"
        jquery: "libs/jquery"
        underscore: "libs/lodash"
        backbone: "libs/backbone"
        "backbone.validateAll": "plugins/Backbone.validateAll"
        hbs: "libs/hbs" # hbs is how we deal with handlebars templatez
        Handlebars: "libs/Handlebars"
        templates: "../templates"
        "backbone.marionette": "libs/backbone.marionette"
        bmh: "libs/backbone.marionette.handlebars"
  
    # Sets the configuration for your third party scripts that are not AMD compatible
    shim:

        # Twitter Bootstrap jQuery plugins
        backbone:
            deps: ["underscore", "jquery"]
            exports: "Backbone" #attaches "Backbone" to the window object

        # Backbone.validateAll depends on Backbone.
        "backbone.validateAll": ["backbone"]

        "backbone.marionette":
            deps: ["backbone","bmh"]
            exports: "Marionette" # attaches "Marionette" to the window object


    # Settings for the handlebars implementation
    hbs:

        # callback to determine path to look for helpers
        helperPathCallback: (name) ->
            "helpers/all"

        templateExtension: "hbs"

        # if disableI18n is `true` it won't load locales and the i18n helper
        # won't work as well.
        disableI18n: true


# Include Desktop Specific JavaScript files here (or inside of your Desktop router)
require ["app","modernizr", "jquery", "backbone","backbone.marionette","routers/index", "controllers/index"], 
    (app, Modernizr, $, Backbone, Marionette, Router, Controller) ->
    
        app.start()
        new Router({controller:Controller})
        Backbone.history.start
        #@collection.fetch   # update that data!


    # @app

    
    # # class AppRouter extends Marionette.AppRouter
    # #     appRoutes:
    # #         "dashboard":"dashboard"

    
    # # class AppController


    # # masterApp = new Marionette.Application
    # # masterApp.addRegions page:"#page"

    # # masterApp.on "initialize:after", ->
    # #     Backbone.history.start()



    # # Instantiates a new Router
    # @router = new Router()
    
