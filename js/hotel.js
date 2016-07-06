;(function($){
	var myApp=angular.module("myApp",[]);
		myApp.controller("ctr",["$scope","$http",function($scope,$http){
			$http.get("data/hotel.json")
				.success(function(data){
					console.log(data)
					$scope.hotel=data.hotel;
					
				})
		}])
})(Zepto)