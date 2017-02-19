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
		.state('public.G1', {
			url: '/roster/npanchuk',
			templateUrl: 'src/public/roster/playerinfo/gol.panchuk.html'
		})
		.state('public.G2', {
			url: '/roster/akozlovskyi',
			templateUrl: 'src/public/roster/playerinfo/gol.kozlovskyi.html'
		})
		.state('public.D1', {
			url: '/roster/skrysiuk',
			templateUrl: 'src/public/roster/playerinfo/def.krysiuk.html'
		})
		.state('public.D2', {
			url: '/roster/rrubaha',
			templateUrl: 'src/public/roster/playerinfo/def.rubaha.html'
		})
		.state('public.D3', {
			url: '/roster/vholovatyi',
			templateUrl: 'src/public/roster/playerinfo/def.holovatyi.html'
		})
		.state('public.D4', {
			url: '/roster/ovoitovych',
			templateUrl: 'src/public/roster/playerinfo/def.voitovych.html'
		})
		.state('public.D5', {
			url: '/roster/omisiurka',
			templateUrl: 'src/public/roster/playerinfo/def.misiurka.html'
		})
		.state('public.D6', {
			url: '/roster/mmyronets',
			templateUrl: 'src/public/roster/playerinfo/def.mmyronets.html'
		})
		.state('public.M1', {
			url: '/roster/pbereziuk',
			templateUrl: 'src/public/roster/playerinfo/mid.bereziuk.html'
		})
		.state('public.M2', {
			url: '/roster/sptasiuk',
			templateUrl: 'src/public/roster/playerinfo/mid.ptasiuk.html'
		})
		.state('public.M3', {
			url: '/roster/vtverdohlib',
			templateUrl: 'src/public/roster/playerinfo/mid.tverdohlib.html'
		})
		.state('public.M4', {
			url: '/roster/vboiko',
			templateUrl: 'src/public/roster/playerinfo/mid.boiko.html'
		})
		.state('public.M5', {
			url: '/roster/oantoniuk',
			templateUrl: 'src/public/roster/playerinfo/mid.antoniuk.html'
		})
		.state('public.M6', {
			url: '/roster/vparubochyi',
			templateUrl: 'src/public/roster/playerinfo/mid.parubochyi.html'
		})
		.state('public.M7', {
			url: '/roster/pmyronets',
			templateUrl: 'src/public/roster/playerinfo/mid.myronets.html'
		})
		.state('public.M8', {
			url: '/roster/yzvarych',
			templateUrl: 'src/public/roster/playerinfo/mid.yzvarych.html'
		})
		.state('public.M9', {
			url: '/roster/tzvarych',
			templateUrl: 'src/public/roster/playerinfo/mid.tzvarych.html'
		})
		.state('public.M10', {
			url: '/roster/mgrytsyshyn',
			templateUrl: 'src/public/roster/playerinfo/mid.grytsyshyn.html'
		})
		.state('public.S1', {
			url: '/roster/omahura',
			templateUrl: 'src/public/roster/playerinfo/str.mahura.html'
		})
		.state('public.S2', {
			url: '/roster/mkuts',
			templateUrl: 'src/public/roster/playerinfo/str.kuts.html'
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