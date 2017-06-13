MyAlbum.controller('albumList', function($scope, $http, $q) {
    $http.get('http://jsonplaceholder.typicode.com/albums').
        then(function(response) {
            $scope.albumDetails = response.data;
        });

    $http.get('http://jsonplaceholder.typicode.com/users').
        then(function(response) {
            $scope.albumUsers = response.data;
       });
	   
	$q.all(['http://jsonplaceholder.typicode.com/albums','http://jsonplaceholder.typicode.com/users',]).
		then(function(response){
			$scope.albumDetails = response[0].data;
			$scope.albumUsers= response[1].data;
    });  
});


MyAlbum.controller('photoList', function($scope, $routeParams, $http) {
	$http.get('http://jsonplaceholder.typicode.com/albums/'+$routeParams.id+'/photos')
	.then(function(response) {
		$scope.PhotoDetails = response.data;
	});
});
