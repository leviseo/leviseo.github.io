(function() {
	"use strict";
  window.onload = function() {
		/*
		1. ~돈투입 (1000원)~ 나중에
		2. 음료 선택
		3. '1000원 - 음료 값' 거스름돈 에 적어줌
				예산 0 원
		?? itemCost 중 가장 낮은 거는 어캐 찾음??
		*/

		var budget = 0;
		var change = 0;
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
			budget += Number(tfCoinEl.value);
			machineMoneyEl.innerHTML = budget;
			tfCoinEl.value = 0;
			if (budget >= itemCost02) {
				btnItem01El.disabled = false;
				btnItem02El.disabled = false;
			} else if (budget >= itemCost01) {
				btnItem02El.disabled = false;
			}
		})

		btnItem01El.addEventListener("click", function() {
			itemCount01 += 1;
			countItem01El.innerHTML = itemCount01;
			budget -= itemCost01;
			machineMoneyEl.innerHTML = budget;
			if (budget < itemCost02) {
				change = budget;
				changeMoneyEl.innerHTML = change;
				machineMoneyEl.innerHTML = 0;
				btnItem01El.disabled = true;
				btnItem02El.disabled = true;
			}
		});

		btnItem02El.addEventListener("click", function() {
			itemCount02 += 1;
			countItem02El.innerHTML = itemCount02;
			budget -= itemCost02;
			machineMoneyEl.innerHTML = budget;
			if (budget < itemCost02) {
				change = budget;
				changeMoneyEl.innerHTML = change;
				machineMoneyEl.innerHTML = 0;
				btnItem01El.disabled = true;
				btnItem02El.disabled = true;
			}
		});
		
	}
})();