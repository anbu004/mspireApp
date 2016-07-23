angular.module('merServices', [])

.factory('schaumburgService', function($http){
return{
		getSchaumburgData : function(factory, unshippableOrders, showTotalLines){
			return $http.get("http://10.40.42.52:8001/sbrresult/generateSBRReport/"+factory+"/"+unshippableOrders+"/"+showTotalLines);
		}
	}
	
})

.factory('scogService', function($http){
return{
	
		getScogData : function(xactSONumber, COFFONumber){
			if (angular.isUndefined(xactSONumber)) {
				xactSONumber = 'null'; //7 or greater
		}			
		if (angular.isUndefined(COFFONumber)) {
				COFFONumber = 'null'; // 13 or greater
		}			
		console.log("COFOrderNumber>>>>>>>>>>>>>>>>"+xactSONumber + " --- " + COFFONumber);
		return $http.get("http://10.40.42.52:8001/scogresult/generateSCOGReport/"+xactSONumber+"/"+COFFONumber);
		}
	}
	
})

.factory('cofService', function($http){
return{
		getCofData : function(COFOrderNumber){
			console.log("COFOrderNumber>>>>>>>>>>>>>>>>"+COFOrderNumber);
			return $http.get("http://10.40.42.52:8001/cofresult/generateCOFReport/"+COFOrderNumber);
		}
	}
	
})

.factory('LoginService', function ($http) {
	return {
		
		authenticate : function(userData) {
			console.log("tokenService"+JSON.stringify(userData));
			return $http({
				url: 'http://10.40.42.52:8001/authenticate',
				method	: 'POST',
				headers	: { 'Access-Control-Request-Headers': 'accept, content-type','Access-Control-Request-Method': 'POST,PUT,DELETE'},
				dataType: 'json',
				data : userData
			});
		}
		
	}
})

.factory('whereUsedService', function ($http){
	return{
		getWhereUsed : function(){
			return $http.get("../JSON/whereUsed.json")
		}
	}
})

