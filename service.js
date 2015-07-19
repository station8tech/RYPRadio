app.factory('ryp', ['$http', function($http) { 
  return $http.get('http://www.zippod.net/RYP/jsonCurrent.php') 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);
