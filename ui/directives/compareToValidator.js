(function() {
  angular.module('CatRegistration').directive('compareToValidator', function() {
    return {
      require: 'ngModel',
      link: function(scope, element, attrs, ngModel) {
        scope.$watch(attrs.compareToValidator, function() {
          return ngModel.$validate();
        });
        return ngModel.$validators.compareTo = function(value) {
          var other;
          other = scope.$eval(attrs.compareToValidator);
          return !value || !other || value === other;
        };
      }
    };
  });

}).call(this);
