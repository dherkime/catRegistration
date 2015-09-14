'use strict'

# Declare module dependencies
dependencies = [
  "ngMessages", 
  "ngAnimate",
  "ngRoute",
  "ngPasswordStrength"
]

config = ($routeProvider) ->
  $routeProvider
  .when '/',
    templateUrl: './form.html'
    controller: 'FormCtrl as form'
  .when '/completed',
    templateUrl: './completed.html'
  .otherwise
    redirectTo: '/'

# Create app module and configure it
angular
.module('CatRegistration', dependencies)
.config [
  '$routeProvider'
  config
]
