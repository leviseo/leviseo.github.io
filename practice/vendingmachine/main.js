(function() {
	"use strict";
  window.onload = function() {
		/* STEP1.
		1. ~돈투입 (1000원)~ 나중에
		2. 음료 선택
		3. '1000원 - 음료 값' 거스름돈 에 적어줌
				예산 0 원
		?? itemCost 중 가장 낮은 거는 어캐 찾음??
		*/
		/* STEP2.
		거스름돈이 100, 500, 1000, 5000, 10000 로 나와야함
		*/

		var BUDGET = 0;
		var CHANGE = 0;
		var itemCost01 = 800;
		var itemCost02 = 700;
		var itemCount01 = 0;
		var itemCount02 = 0;

		var ctx = document.querySelector(".container");
		var tfCoinEl = ctx.querySelector(".tf_coin");
		var btnInsertEl = ctx.querySelector(".btn_insert");
		var machineMoneyEl = ctx.querySelector(".txt_machine");
		var btnItem01El = ctx.querySelector(".btn_item01");
		var btnItem02El = ctx.querySelector(".btn_item02");
		var changeMoneyEl = ctx.querySelector(".txt_change");	
		var countItem01El = ctx.querySelector(".count_item01");	
		var countItem02El = ctx.querySelector(".count_item02");	

		btnInsertEl.addEventListener("click", function() {
			BUDGET += Number(tfCoinEl.value);
			machineMoneyEl.innerHTML = BUDGET;
			tfCoinEl.value = 0;
			if (BUDGET >= itemCost02) {
				btnItem01El.disabled = false;
				btnItem02El.disabled = false;
			} else if (BUDGET >= itemCost01) {
				btnItem02El.disabled = false;
			}
		})

		btnItem01El.addEventListener("click", function() {
			itemCount01 += 1;
			countItem01El.innerHTML = itemCount01;
			BUDGET -= itemCost01;
			machineMoneyEl.innerHTML = BUDGET;
			if (BUDGET < itemCost02) {
				CHANGE = BUDGET;
				changeMoneyEl.innerHTML = CHANGE;
				BUDGET = 0;
				machineMoneyEl.innerHTML = 0;
				btnItem01El.disabled = true;
				btnItem02El.disabled = true;
			}
		});

		btnItem02El.addEventListener("click", function() {
			itemCount02 += 1;
			countItem02El.innerHTML = itemCount02;
			BUDGET -= itemCost02;
			machineMoneyEl.innerHTML = BUDGET;
			if (BUDGET < itemCost02) {
				CHANGE = BUDGET;
				changeMoneyEl.innerHTML = CHANGE;
				BUDGET = 0;
				machineMoneyEl.innerHTML = 0;
				btnItem01El.disabled = true;
				btnItem02El.disabled = true;
			}
		});
		
	}
})();