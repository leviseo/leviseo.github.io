(function() {
  "use strict";
  window.onload = function() {

		//element
    var ctx = document.querySelector(".container");
    var tabs = ctx.querySelectorAll(".btn_tab");

		init();

		//init
		function init() {
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

		//events
		function onClickTabs() {
			tabs.forEach(function(tab, i) {
				tab.addEventListener("click", function() {
					removeClassAll(tabs, "on");
					addClass(tab, "on");
				});
			})	
		}
		
  };
})();
