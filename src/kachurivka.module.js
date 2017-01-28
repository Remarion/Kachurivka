(function(){
	'use strict';

	angular.module('kachurivka', ['public'])
	.config(config);

	config.$inject = ['$urlRouterProvider'];
	function config($urlRouterProvider) {

		$urlRouterProvider.otherwise('/');
	}
})();