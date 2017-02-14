(function(){
	"use strict";

	angular.module('common')
	.service('KachurivkaService', KachurivkaService);

	KachurivkaService.$inject = ['$http'];
	function KachurivkaService($http) {
		var service = this;

		service.getGoalkeepers = function () {
			return $http.get('src/public/goalkeepers.json').then(function (response) {
				return response.data;
			});
		};

		service.getDefenders = function () {
			return $http.get('src/public/roster/defenders/defenders.json').then(function (response) {
				return response.data;
			});
		};
		service.getMidfielders = function () {
			return $http.get('src/public/roster/midfielders/midfielders.json').then(function (response) {
				return response.data;
			});
		};
		service.getStrikers = function () {
            return $http.get('src/public/roster/strikers/strikers.json').then(function (response) {
				return response.data;
			});
		}
	}
})();