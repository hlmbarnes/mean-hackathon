console.log('lock/load');

var eventApp = angular.module('eventApp', []);

eventApp.controller('HomeCtrl', ['$scope', '$http', function($scope, $http){

  $scope.conn = "yes";

}]);