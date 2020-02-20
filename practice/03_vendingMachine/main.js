(function() {
	"use strict";
  window.onload = function() {
		/*
		1. ~돈투입 (1000원)~ 나중에
		2. 음료 선택
		3. '1000원 - 음료 값' 거스름돈 에 적어줌
				예산 0 원
		*/

		var ctx = document.querySelector(".container");
		var btnInsertEl = ctx.querySelector(".btn_insert");
		var btnItem01El = ctx.querySelector(".btn_item01");
		var btnItem02El = ctx.querySelector(".btn_item02");
		var budgetEl = ctx.querySelector(".txt_budget");
		var changeEl = ctx.querySelector(".txt_change");

		var budget = 1000;
		var change = 0;

		budgetEl.innerHTML = budget;

		btnItem01El.addEventListener("click", function() {
			change = budget - 800;
			budget = budget - 800;
			budgetEl.innerHTML = 0;
			changeEl.innerHTML = change;
			if (budget < 700) {
				btnItem01El.disabled = true;
				btnItem02El.disabled = true;
			}
		});

		btnItem02El.addEventListener("click", function() {
			change = budget - 700;
			budget = budget - 700;
			budgetEl.innerHTML = 0;
			changeEl.innerHTML = change;
			if (budget < 700) {
				btnItem01El.disabled = true;
				btnItem02El.disabled = true;
			}
		});
		
	}
})();