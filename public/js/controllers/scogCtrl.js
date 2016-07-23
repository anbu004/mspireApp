'use strict';

/**
 * @ngdoc function
 * @name MaterialApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of MaterialApp
 */
angular.module('MaterialApp')
  .controller('scogCtrl', function($scope,scogService) {
	$scope.getScogData = {
				paginationPageSizes: [15, 50, 75],
				paginationPageSize: 15,
				columnDefs: [
				             { field: 'cof_order_number',displayName:'COF FO Number',width: '15%'},
				             { field: 'order_number',displayName:'Oracle Order Number',width: '18%'},
				             { field: 'name',displayName:'Order Source',width: '10%'},
				             { field: 'SE',displayName:'Ship Early',width: '12%'},
				             { field: 'SP',displayName:'Ship Partial',width: '12%'},
				             { field: 'EXP',displayName:'Exp Code',width: '12%'},
				             { field: 'hiperLink',displayName:'Show Lines',width: '13%'},
				             { field: 'flow_status_code',displayName:'Status',width: '15%'},
				             { field: 'creation_date',displayName:'Created',width: '15%'},
				             { field: 'cof_order_number',displayName:'COF FO',width: '10%'},
				             { field: 'order_number',displayName:'Order',width: '8%'},
				             { field: 'name',displayName:'Name',width: '10%'},
				             { field: 'SE',displayName:'Ship Early',width: '9%'},
				             { field: 'SP',displayName:'Ship Partial',width: '9%'},
				             { field: 'EXP',displayName:'Exp Code',width: '7%'},
				             //{ field: 'hiperLink',displayName:'Detail',width: '5%'},
				             { field: 'flow_status_code',displayName:'Status',width: '8%'},
				             { field: 'creation_date',displayName:'Creation Date',width: '12%'}
				             ]

		};
	  $scope.getScog = function(){
		  scogService.getScogData($scope.exactSONumber, $scope.cofFoNumber)
	    .then(function(response) {
	    	$scope.getScogData = response.data;
	    	$scope.isSamsungReport=true;
	    });
	  }  
	  
	 
	  $scope.getScogReport = function () {
		  $scope.getScog();
	  };

  });	
