(function() {
  'use strict';
  var config, dependencies;

  dependencies = ["ngMessages", "ngAnimate", "ngRoute", "ngPasswordStrength"];

  config = function($routeProvider) {
    return $routeProvider.when('/', {
      templateUrl: './form.html',
      controller: 'FormCtrl as form'
    }).when('/completed', {
      templateUrl: './completed.html'
    }).otherwise({
      redirectTo: '/'
    });
  };

  angular.module('CatRegistration', dependencies).config(['$routeProvider', config]);

}).call(this);
