'use strict';

/**
 * @ngdoc function
 * @name MaterialApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of MaterialApp
 */
angular.module('MaterialApp')
  .controller('COFCtrl', function($scope,cofService) {
	 
 $scope.cofData = {
				paginationPageSizes: [15, 50, 75],
				paginationPageSize: 15,
				columnDefs: [

				             { field: 'FactoryOrder',displayName:'Factory Order', width: '120'},
				             { field: 'FOline',displayName:'FO line', width: '100'},
				             { field: 'OrdQty',displayName:'Ord Qty', width: '100' },
				             { field: 'ShipQty',displayName:'Ship Qty', width: '110' },
				             { field: 'CRSD',displayName:'CRSD', width: '80' },
				             { field: 'SalesOrder',displayName:'Sales Order', width: '120' },
				             { field: 'SalesOrderLine',displayName:'Sales order line', width: '150' },
				             { field: 'SalesOrderLineDetail',displayName:'Sales Order Line Detail', width: '200' },
				             { field: 'LastUpdateDate',displayName:'Last Update Date', width: '150' },
				             { field: 'DeliveryShipDate',displayName:'Delivery Ship Date', width: '150' },
				             { field: 'ModelLineItem',displayName:'Model/Line Item', width: '150' },
				             { field: 'Description',displayName:'Description', width: '100' },
				             { field: 'APC',displayName:'APC', width: '80' },
				             { field: 'Delivery',displayName:'Delivery', width: '110' },
				             { field: 'DeliveryShipMethod',displayName:'Delivery Ship Method', width: '190' },
				             { field: 'DeliveryDetailStatus',displayName:'Delivery Detail Status', width: '190' },
				             { field: 'TrackingNumber',displayName:'Tracking Number', width: '150' },
				             { field: 'CheckCarrier',displayName:'Check Carrier', width: '150' }

				             ]
		};
	  $scope.getCOF = function(){
		  cofService.getCofData($scope.cofOrderNumb)
	    .then(function(response) {
	    	$scope.cofData = response.data;
	    });
	  }  
	  
	  $scope.getCOFResult = function () {
		  $scope.getCOF();  
	  }
	  
	 
	  /*$scope.show_element = false;
	  $scope.element_class = "hidden";
	  $scope.toggleShow = function(element) {
	    
	      $scope.element_class = "show";
	  
	      
	  };*/
  });	
