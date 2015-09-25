var app = angular.module('myApp', []);

app.controller('MyCtrl', function($scope) {
	
	$scope.subTotal = 0;
	$scope.tip = 0;
	$scope.total = 0;		

	$scope.tipTotal = 0;
	$scope.mealCount = 0;
	$scope.avgTip = 0;
		 
	$scope.submit = function() {
		$scope.subTotal = $scope.price + ($scope.price * ($scope.taxRate / 100));
		$scope.tip = $scope.subTotal * ($scope.tipPercent / 100);
		$scope.total = $scope.subTotal + $scope.tip;

		$scope.tipTotal += $scope.tip;
		$scope.mealCount ++;
		
		$scope.avgTip = $scope.tipTotal / $scope.mealCount;
		$scope.$watch('avgTip'); 
		
		$scope.price = undefined;
		$scope.tipPercent = undefined;
	};

	$scope.cancel = function() {
		$scope.price = undefined;
		$scope.taxRate = undefined;
		$scope.tipPercent = undefined;
		$scope.subTotal = undefined;
		$scope.tip = undefined;
		$scope.total = undefined;

	}

	$scope.reset = function() {
		$scope.price = undefined;
		$scope.taxRate = undefined;
		$scope.tipPercent = undefined;

		$scope.subTotal = 0;
		$scope.tip = 0;
		$scope.total = 0;		

		$scope.tipTotal = 0;
		$scope.mealCount = 0;
		$scope.avgTip = 0;
	}
}); 