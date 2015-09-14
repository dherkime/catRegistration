angular.module('CatRegistration')
  .directive('usernameAvailableValidator', ['$http', ($http) ->
      require : 'ngModel'
      link : ($scope, element, attrs, ngModel) ->
        ngModel.$asyncValidators.usernameAvailable = (username) ->
          $http.get '/api/check-username?username='+ username
  ])