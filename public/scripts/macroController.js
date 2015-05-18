'use strict';
(function () {
    myApp.controller('macroControlelr', ['$scope', '$http', '$modal', '$log', function ($scope, $http, $modal, $log) {
        
      $scope.profile = {};

      $scope.height = 0;
      $scope.age = 0;
      $scope.weight = 0;
      $scope.gender= {Male, Female};

      $scope.updateProfile = function(height,age,weight,gender){

        $log.info(height);

      }
    
}());