;(function($){
	var myApp=angular.module("myApp",[]);
		myApp.controller("ctr",["$scope","$http",function($scope,$http){
			$http.get("data/data.json")
				.success(function(data){
					console.log(data)
					$scope.jditem=data.jditem;
					
				})
		}])
})(Zepto)