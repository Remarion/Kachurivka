(function(){
	"use strict";

	angular.module('public')
	.component('strikerPlayer', {
		templateUrl: 'src/public/roster/player.template.html',
		bindings: {
			player: '<'
		}
	});
})();