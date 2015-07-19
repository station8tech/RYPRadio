app.controller('MainController', ['$scope', 'ryp', function($scope, ryp) {
  ryp.success(function(data) {
    $scope.rider = data;
    
    $scope.openLink = function(infoLink){
	  
	  window.open(infoLink,'_blank','location=yes,toolbar=yes,allowInlineMediaPlayback=yes')
	  
    
  };
    
  });
}]);
