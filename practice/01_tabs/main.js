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
		
		* [] btn disabled 처리
		* [] 무한 < > 녀석 추가

		*/
		// 1. var let 구분하여 사용하기
		// 2. 공통사용되는 함수를 엄격히 구분하기
		// 3. 순수함수라는게 있따. 변화는 파라미터로.. 내부는 순수하게 리턴만을 제공 
		// 4. tabIndext, tabContentsIndex 변수 (state) increaseIndex(value) decrease (value) => value -1/+1

		// const
		var MOVE_STEP = 1;
		// value, state
		var tabIndext = 0;
		var tabContentsIndex = 0;
		//element
    var ctx = document.getElementById("container");
    var tabs = ctx.querySelectorAll(".btn_tab");
    var tabContents = ctx.querySelectorAll(".tab_content");
    var btnPrevEl = ctx.querySelector(".pagenation > .btn_prev");
		var btnNextEl = ctx.querySelector(".pagenation > .btn_next");		

		init();

		//init
		function init() {
			btnNextEl.addEventListener("click", onNextBtnClick);
			btnPrevEl.addEventListener("click", onPrevBtnClick);
			onClickTabs();
		}

		//util
    function addClass(el, className) {
      el.classList.add(className);
		}
		
		function removeClass(el, className) {
			el.classList.remove(className);
    }

		function removeClassAll(elems, classname) {
			elems.forEach(function(el) {
				removeClass(el, classname);
			})
		}		
		
		//movement
		function isAbleToMove(targetIndex) {
			if (!tabs[targetIndex]) return;
			tabIndext = targetIndex;
			tabContentsIndex = targetIndex;
		}

		function moveToNext(tabIndex) {
			var nextIndex = tabIndext + MOVE_STEP;
			isAbleToMove(nextIndex);
		}

		function moveToPrev(tabIndex) {
			var prevIndex = tabIndext - MOVE_STEP;
			isAbleToMove(prevIndex);
		}

		//events
		function onNextBtnClick() {
			removeClassAll(tabs, "on");
			removeClassAll(tabContents, "visible");
			moveToNext(this.tabIndex);
			addClass(tabs[tabIndext], "on");
			addClass(tabContents[tabContentsIndex], 'visible');
		}

		function onPrevBtnClick() {
			removeClassAll(tabs, "on");
			removeClassAll(tabContents, "visible");
			moveToPrev(this.tabIndex);
			addClass(tabs[tabIndext], "on");
			addClass(tabContents[tabContentsIndex], 'visible');
		}

		function onClickTabs() {
			tabs.forEach(function(tab, i) {
				tab.addEventListener("click", function() {
					removeClassAll(tabs, "on");
					removeClassAll(tabContents, "visible");
					addClass(tab, "on");
					addClass(tabContents[i], 'visible');
					tabIndext = i;
					tabContentsIndex = i;
				});
			})	
		}
		
  };
})();
