function Hello($scope, $http) {
  $http.get('https://api.github.com/users').
    success(function(data) {
      $scope.users = data;
    });
}
