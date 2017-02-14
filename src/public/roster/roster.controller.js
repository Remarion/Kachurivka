(function(){
	'use strict';

	angular.module('public')
	.controller('RosterController', RosterController);

    RosterController.$inject = ['teamGoalkeepers','teamDefenders', 'teamMidfielders', 'teamStrikers'];
	function RosterController (teamGoalkeepers, teamDefenders, teamMidfielders, teamStrikers) {
		var rosterCtrl = this;
		rosterCtrl.teamGoalkeepers = teamGoalkeepers;
		rosterCtrl.teamDefenders = teamDefenders;
		rosterCtrl.teamMidfielders = teamMidfielders;
		rosterCtrl.teamStrikers = teamStrikers;
	}
})();