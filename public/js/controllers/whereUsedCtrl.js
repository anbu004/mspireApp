angular.module('MaterialApp')
  .controller('whereUsedCtrl', function($scope,whereUsedService) {
	 
	  $scope.whereUsedData = {
			  paginationPageSizes: [15, 50, 75],
				paginationPageSize: 15,
				columnDefs: [
				             { field: 'Bom Item'}
				             ]
	  };
	  
	  $scope.getWhereUsedData = function(){
		  whereUsedService.getWhereUsed().then(function(response) {
			  
			  $scope.columnDefQry = [];
			  angular.forEach(response.data.data.headers, function(value, key) {
				  console.log(key + ': ' + value);
				  $scope.columnDefQry.push({field : value.name});
				});
			  
			  console.log("$scope.columnDefQry : " + JSON.stringify($scope.columnDefQry));
			  
			  $scope.whereUsedData.columnDefs = $scope.columnDefQry;
			  $scope.whereUsedData.data = response.data.data.rows;
			  
		  });
	  };
	  $scope.getWhereUsedData();
	  
	  $scope.getWhereUsedReport = function () {
		  console.log(JSON.stringify($scope.whereData));
	  };
	  
  });


