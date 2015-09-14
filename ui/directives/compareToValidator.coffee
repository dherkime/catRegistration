angular.module('CatRegistration')
  .directive('compareToValidator', ->
      require : 'ngModel'
      link: (scope, element, attrs, ngModel) ->
        scope.$watch attrs.compareToValidator,  ->
          ngModel.$validate()
        ngModel.$validators.compareTo = (value) ->
          other = scope.$eval(attrs.compareToValidator)
          !value || !other || value == other

  )
  
