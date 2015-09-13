angular.module('CatRegistration', ['ngMessages', 'ngAnimate', 'ngRoute', 'ngPasswordStrength'])

.config(['$routeProvider',
   function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: './form.html',
      controller: 'FormCtrl as form'
    });
    $routeProvider.when('/completed', {
      templateUrl: './completed.html',
    });
  }])
