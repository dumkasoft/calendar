
require.config({
  "baseUrl" : "./",
  "paths"   : {
    "jquery"        : "./bower_components/jquery/dist/jquery",
    "react"         : "./bower_components/react/react-with-addons",
    "JSXTransformer": "./bower_components/react/JSXTransformer",
    "jsx"           : "./bower_components/require-jsx/jsx",
    "underscore"    : "./bower_components/underscore/underscore",
    'backbone'      : './bower_components/backbone/backbone',
    "bootstrap"     : "./bower_components/bootstrap/dist/js/bootstrap",
    "ripples"       : "./bower_components/bootstrap-material-design/dist/js/ripples",
    "material"      : "./bower_components/bootstrap-material-design/dist/js/material"
  },
  "shim" : {
    "backbone" : {
      "deps" : [
        "jquery",
        "underscore"
      ],
      "exports" : "Backbone"
    },
    "jquery" : {
      "exports" : "$"
    },
    "underscore" : {
      "exports" : "_"
    },
     "ripples" : {
        "exports" : "ripples",
        "deps" : [
          "jquery"
        ]
     },
     "bootstrap": {
      "exports": "bootstrap",
      "deps" : [
        "jquery"
      ]
     },
      "material": {
        "exports" : "material",
        "deps" : [
          "jquery"
        ]
      },
      "JSXTransformer": {
          "exports": "JSXTransformer"
      }
  }
});

define(["react", "JSXTransformer", "jsx!app/Router/Router", "backbone", "jquery", "bootstrap", "ripples", "material",],
 function(React, JSXTransformer, Router, Backbone, $, bootstrap, ripples, material){

    window.AppRouter = new Router;

    Backbone.history.start();
    window.AppRouter.navigate("registration",{trigger:true});

    $(document).ready(function() {
      $.material.init();
    });
});

