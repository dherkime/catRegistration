angular.module('CatRegistration')
.directive('passwordCharactersValidator', ->
    REQUIRED_PATTERNS = [
      /[a-z]+/, # lowercase
      /[A-Z]+/, # uppercase
      /\d+/,    # digits
      /\W+/,    # special characters
      /^\S+$/   # no whitespace
    ];

    require : 'ngModel',
    link : ($scope, element, attrs, ngModel)  ->
        ngModel.$validators.passwordCharacters = (value) ->
          status = true;
          angular.forEach REQUIRED_PATTERNS, (pattern) ->
            status = status && pattern.test(value)
          status;
  )
