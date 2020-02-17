(function() {
	'use strict';
	window.onload = function() {
		var ctx = document.querySelector('.container');
		var selectQuestionEl = ctx.querySelector('#selectQuestion');
		var optionQuestionEl = selectQuestionEl.getElementsByTagName('option');

		var selectValue = optionQuestionEl[selectQuestionEl.selectedIndex].value;

		console.log(selectValue);

	}
})();