(function(){
	'use strict';

	angular.module('public')
	.config(Routes);

	Routes.$inject = ['$stateProvider','$urlRouterProvider'];

	function Routes ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('public', {
        	abstract: true,
        	templateUrl: 'src/public/public.html'
        })
		.state('public.home', {
            url: '/',
            templateUrl: 'src/public/templates/home.html'
		})
		.state('public.roster', {
			url: '/roster',
			templateUrl: 'src/public/roster/roster.html',
			controller: 'RosterController',
			controllerAs: 'rosterCtrl',
			resolve: {
				teamGoalkeepers: ['KachurivkaService', function(KachurivkaService){
					return KachurivkaService.getGoalkeepers();
				}],
				teamDefenders: ['KachurivkaService', function(KachurivkaService){
					return KachurivkaService.getDefenders();
				}],
				teamMidfielders: ['KachurivkaService', function(KachurivkaService){
					return KachurivkaService.getMidfielders();
				}],
				teamStrikers: ['KachurivkaService', function(KachurivkaService){
					return KachurivkaService.getStrikers();
				}]
			}
		})
		.state('public.player', {
			url: '/player',
			templateUrl: 'src/public/roster/playerinfo/playerinfo.html'
		})
		.state('public.calendar', {
			url:'/calendar/',
			templateUrl: 'src/public/templates/calendar.html'
		})
		.state('public.tables', {
			url:'/tables/',
			templateUrl: 'src/public/templates/tables.html'
		})
		.state('public.forum', {
			url:'/forum/',
			templateUrl:'src/public/templates/forum.html'
		})
		.state('public.login', {
			url:'/login/',
			templateUrl: 'src/common/login/login.html'
		})
		.state('register', {
			url: '/register',
			templateUrl:'src/common/register/register.html'
		});
	}
})();