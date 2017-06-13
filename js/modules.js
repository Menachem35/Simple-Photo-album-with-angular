var MyAlbum = angular.module("albumModule", ['ngRoute']); 
	
MyAlbum.config(function($routeProvider){
	$routeProvider
		.when('/albums', {
			templateUrl: 'albumList.html', 
			controller: 'albumList'
		})
		.when('/photos/:id', {
			templateUrl: 'albumDetails.html', 
			controller: 'photoList'
		})
		
		.when('/myModal', {
			templateUrl: 'modalContainer', 
			controller: 'photoList'
		})
		
		.otherwise({
			redirectTo: '/albums'
		});
});
