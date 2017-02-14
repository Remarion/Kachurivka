(function(){
	'use strict';

	angular.module('common')
	.component('goalkeeperPlayer', {
		templateUrl: 'src/public/roster/player.template.html',
		bindings: {
			player: '<'
		}
	});
})();