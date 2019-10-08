'use strict';

angular.module('wcagReporter')
.filter('rdfToLabel', function($filter) {
	var rdfToLabel;
	var keymap = {
		'earl:passed': 'EARL.PASSED',
		'earl:failed': 'EARL.FAILED',
		'earl:cantTell': 'EARL.CANT_TELL',
		'earl:inapplicable': 'EARL.NOT_PRESENT',
		'earl:untested': 'EARL.NOT_CHECKED',
		'A': 'EARL.LEVEL_A',
		'AA': 'EARL.LEVEL_AA',
		'AAA': 'EARL.LEVEL_AAA',
		'wai:WCAG2A-Conformance': 'EARL.LEVEL_A',
		'wai:WCAG2AA-Conformance': 'EARL.LEVEL_AA',
		'wai:WCAG2AAA-Conformance': 'EARL.LEVEL_AAA',
    'app:web': 'SCOPE.WEB_APP',
    'app:mobile': 'SCOPE.MOBILE_APP',
    'report:simple': 'SCOPE.SIMPLE_REPORT',
    'report:advanced': 'SCOPE.ADVANCED_REPORT'
	};

	rdfToLabel = function(rdf) {
		return $filter('translate')(keymap[rdf]);
	};
	rdfToLabel.keymap = keymap;
	rdfToLabel.$stateful = true;

	return rdfToLabel;
});
