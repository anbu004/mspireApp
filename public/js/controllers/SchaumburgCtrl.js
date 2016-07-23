'use strict';

/**
 * @ngdoc function
 * @name MaterialApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of MaterialApp
 */
angular.module('MaterialApp')
  .controller('SchaumburgCtrl', function($scope,$http,schaumburgService) {
	  $scope.getSchaumburgData = {
			paginationPageSizes: [15, 50, 75],
			paginationPageSize: 15,
			columnDefs: [
			             { field: 'Product',displayName:'Product'},
			             { field: 'Location',displayName:'Location'},
			             { field: 'DlvryStatus',displayName:'Delivery Status' },
			             { field: 'NSAD', displayName:'NSAD' },
			             { field: 'Quantity',displayName:'Quantity' },
			             { field: 'temp', displayName:'Temp' }
			             ]
	};
	 
	  $scope.getSchaumburg = function(){
		  schaumburgService.getSchaumburgData($scope.factory, $scope.showTotalLines, $scope.unshippableOrders)
	    .then(function(response) {
	    	$scope.getSchaumburgData = response.data;
	    });
	  }  
	
	  
	  $scope.getSamsungReport = function () {
		  $scope.getSchaumburg();
	  };
  });	
