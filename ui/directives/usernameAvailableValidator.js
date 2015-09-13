angular.module('CatRegistration')
  .directive('usernameAvailableValidator', ['$http', function($http) {
    return {
      require : 'ngModel',
      link : function($scope, element, attrs, ngModel) {
        ngModel.$asyncValidators.usernameAvailable = function(username) {
          return $http.get('/api/check-username?username='+ username);
        };
      }
    }
  }])