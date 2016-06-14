function MyController($scope, $http) {
    
    $scope.people = [];
    $scope.color = '';
    $scope.message = '';
    
    $scope.postData = function() {
        $http.post('/api/v1/postData', {color: $scope.color}).then(function(response) {
            $scope.message = response.data.message;
        });
        $scope.color = '';
    };
    
    $scope.getData = function() {
        $http.get('/api/v1/getData').then(function(response) {
            $scope.people = response.data;
        })
    };
}
