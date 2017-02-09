(function(){
	'use strict';

	angular.module('public')
	.config(Routes);

	Routes.$inject = ['$stateProvider','$urlRouterProvider'];

	function Routes ($stateProvider, $urlRouterProvider) {

    $stateProvider
		.state('home', {
            url: '/',
            templateUrl: 'src/public/templates/home.html'
		})
		.state('roster', {
			url: '/roster/',
			templateUrl: 'src/public/roster/roster.html',
			controller: 'RosterController',
			controllerAs: 'rosterCtrl'
		})
		.state('calendar', {
			url:'/calendar/',
			templateUrl: 'src/public/templates/calendar.html'
		})
		.state('tables', {
			url:'/tables/',
			templateUrl: 'src/public/templates/tables.html'
		})
		.state('forum', {
			url:'/forum/',
			templateUrl:'src/public/templates/forum.html'
		})
		.state('login', {
			url:'/login/',
			templateUrl: 'src/common/login/login.html'
		})
		.state('register', {
			url: '/register',
			templateUrl:'src/common/register/register.html'
		});
	}
})();