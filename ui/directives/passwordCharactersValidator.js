(function() {
  angular.module('CatRegistration').directive('passwordCharactersValidator', function() {
    var REQUIRED_PATTERNS;
    REQUIRED_PATTERNS = [/[a-z]+/, /[A-Z]+/, /\d+/, /\W+/, /^\S+$/];
    return {
      require: 'ngModel',
      link: function($scope, element, attrs, ngModel) {
        return ngModel.$validators.passwordCharacters = function(value) {
          var status;
          status = true;
          angular.forEach(REQUIRED_PATTERNS, function(pattern) {
            return status = status && pattern.test(value);
          });
          return status;
        };
      }
    };
  });

}).call(this);
