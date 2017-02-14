(function(){
	'use strict';

	angular.module('common')
	.factory('LoadingInterceptorFactory', LoadingInterceptorFactory);

	LoadingInterceptorFactory.$inject = ['$rootScope', '$q'];

	function LoadingInterceptorFactory ($rootScope, $q) {

		var loadingCounter = 0;
		var loadingEventName = 'spinner: activate';

		return {
			request: function (config){
				if (++loadingCounter === 1) {
					$rootScope.$broadcast(loadingEventName, {on: true})
				}
				return config;
			},
			response: function (response) {
				if (--loadingCounter === 0) {
					$rootScope.$broadcast(loadingEventName, {on: false})
				}
				return response;
			},
			responseError: function (response) {
				if(--loadingCounter === 0) {
					$rootScope.$broadcast(loadingEventName, {on: false})
				}
				return $q.reject(response);
			}

		};
	}

})();