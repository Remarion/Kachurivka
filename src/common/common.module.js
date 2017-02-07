(function(){
	'use strict';

	angular.module('common', [])
	.config(Config);

	Config.$inject = ['$httpProvider'];
	function Config ($httpProvider) {
		$httpProvider.interceptors.push('LoadingInterceptorFactory');
	} 

	
})();