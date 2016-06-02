angular.module('EventCtrls', ['EventsServices'])

eventApp.controller('HomeCtrl', ['$scope', '$http', function($scope, $http){
  // does our api  call
  $http({url: '/api'}).then(function success(data){
    $scope.data = data;
    console.log(data);
  }, function error(error){
    $scope.error = error;
  });

eventApp.controller('EventShowCtrl', ['$scope', '$stateParams', 'Events', 
    function($scope, $stateParams, Events){

  $scope.event = {};

  Events.get({id: $stateParams.id}, function success(data){
    $scope.event = data;
  }, 
    function error(data){
      console.log(data);
    })


  }])

}]);
