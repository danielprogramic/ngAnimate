var app = angular.module('meuApp', ['ngAnimate']);
app.controller('myCtrl', function($scope) {
   $scope.priNome= "Gusmão";
   $scope.segNome= "da Silva Sauro";
   
   $scope.data = { active: false };
  
    $scope.toggle = function () {
      $scope.data.active = !$scope.data.active;
    };	
	
});