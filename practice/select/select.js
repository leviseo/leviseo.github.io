(function() {
	'use strict';
	window.onload = function() {
		// breakfirst 일 때 input/ datalist 사용해보자
		var ctx = document.querySelector('.container');
		var selectQuestionEl = ctx.querySelector('#selectQuestion');
		var answerInpEl = ctx.querySelector('.tf_answer');

		var selectedOption = selectQuestionEl.options[selectQuestionEl.selectedIndex].value;

		console.log(selectedOption);

		selectQuestionEl.addEventListener('change', function() {
			selectedOption = event.target.value;
			if (selectedOption === "password") {
				answerInpEl.type = "password";
				answerInpEl.value = "";
			} else if (selectedOption === "currentDateTime") {
				
			}

			
			console.log(selectedOption);
		})

		function currentTime() {
			var today = new Date();
			var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
			console.log(today);
		}
		
		// setInterval(currentTime, 1000);

	}
})();