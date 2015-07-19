app.controller('MainController', ['$scope', 'ryp', function($scope, ryp) {
  ryp.success(function(data) {
    $scope.rider = data;
  });
}]);
