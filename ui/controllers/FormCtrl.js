angular.module('CatRegistration')
  .controller("FormCtrl", ["$scope", "$http", "$location", function($scope, $http, $location) {
    this.data = {};
    this.data.emails = [""];

    var self = this;
    this.submit = function(valid) {
      if(!valid) return;

      self.submitting = true;

      //we don't if it's valid yet, but the reject will handle this
      $http.post("/api/register", self.data).then(function() {
        self.data = [];
        $location.path('/completed');
      }, function(response) {
        self.submitting = false;
      });
    };
  }])