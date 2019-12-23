(function() {
  "use strict";
  window.onload = function() {
    /*
		1. btn_tab[0] 클릭 시
	  - btn_tab[0] 에 on 
		- tab_content[0]에 visible

		2. 1 ~ tabs.length 반복

		3. 페이지네이션...
			prev -= 1, 0이면 배열 마지막으로
			next += 1, 배열 마지막이면 0으로
			
			btn_tab1~3 중에 on 가진 녀석 찾기

		*/
		// 1. var let 구분하여 사용하기
		// 2. 공통사용되는 함수를 엄격히 구분하기
		// 3. 순수함수라는게 있따. 변화는 파라미터로.. 내부는 순수하게 리턴만을 제공 
		// 4. tabIndext, tabContentsIndex 변수 (state) increaseIndex(value) decrease (value) => value -1/+1
    var ctx = document.getElementById("container");
    var tabs = ctx.querySelectorAll(".btn_tab");
    var tabContents = ctx.querySelectorAll(".tab_content");

    var btnPrevEl = ctx.querySelector(".pagenation > .btn_prev");
		var btnNextEl = ctx.querySelector(".pagenation > .btn_next");		

		var tabIndext = 0;
		var tabContentsIndex = 0;


    function addClass(el, className) {
      el.classList.add(className);
    }

		// 정의가 빠진게 있따. 파라미터로 받아서 핸들링 한다는 가정이 우선이 되어야 한다.
    function removeClass() {
      Array.prototype.forEach.call(tabs, function(el) {
        el.classList.remove("on");
      });
      Array.prototype.forEach.call(tabContents, function(el) {
        el.classList.remove("visible");
      });
    }

		// removeAll , addAll - (removeAll -> addClass) => removeAllAndAddOneClass
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].addEventListener("click", function() {
        removeClass();
        addClass(tabs[i], "on");
				addClass(tabContents[i], 'visible');
				tabIndext = i;
				tabContentsIndex = i;
      });
		}

		/* 
		진짜 문제는 현재 on/visible 클래스를 가진 녀석이 tabs[?] 인가..
		tabIndex = ?
		*/

    btnNextEl.addEventListener("click", function() {

			// 1. removeAll(elems, 'on')
			// 2. isAbleToMoveNext(tabIndex) => true / false
			// 3. increase(tabIndex, 1) / decrease(tabIndex, 1) => 1은 var MOVE_STEP = 1
			// 4. addClass(elem, 'on')
			// 5. addClass(elem, 'visible')
			// 6. eventHandler로 만든다. onNextBtnClick
			// 7. btnNextEl.addEventKistener('click', onNextBtnClickHandler)

			removeClass();
			if (tabIndext >= tabs.length -1) {
				tabIndext = 0;
				tabContentsIndex = 0;
			} else {
				tabIndext += 1;
				tabContentsIndex += 1;
			}
			addClass(tabs[tabIndext], "on");
			addClass(tabContents[tabContentsIndex], 'visible');
		});

		btnPrevEl.addEventListener("click", function() {
			removeClass();
			if (tabIndext <= 0) {
				tabIndext = tabs.length -1;
				tabContentsIndex = tabs.length -1;
			} else {
				tabIndext -= 1;
				tabContentsIndex -= 1;
			}
			addClass(tabs[tabIndext], "on");
			addClass(tabContents[tabContentsIndex], 'visible');
		});
		
		
  };
})();
