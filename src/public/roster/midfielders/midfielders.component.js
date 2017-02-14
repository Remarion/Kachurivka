(function(){
	"use strict";

	angular.module('public')
	.component('midfielderPlayer', {
		templateUrl: 'src/public/roster/player.template.html',
		bindings: {
			player: '<'
		}
	});
})();