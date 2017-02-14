(function(){
	"use strict";

	angular.module('public')
	.component('defenderPlayer', {
		templateUrl: 'src/public/roster/player.template.html',
		bindings: {
			player: '<'
		}
	});
})();