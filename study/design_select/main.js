/*
1단계 - 마크업 주석을 참고하여 '지역선택' 버튼 클릭시 옵션이 펼쳐지게 합니다. 선택된 옵션엔 클래스 on 부여합니다. 
2단계 - <a href="#none" class="ico_comm link_selected">지역선택<span class="screen_out">선택됨</span></a>  옵션선택시 위 코드에서 '지역선택' 대신 선택한 지역으로 바꿉니다. 
3단계 - 나중에 선택한 값을 백엔드 api data로 보내야합니다. 이건 나중에 하고, 우선 선택한 값을 alert으로 띄워봅니다. 
*/
(function() {
  "use strict";
  window.onload = function() {
    var ctx = document.querySelector(".container");
    var btnSelectEl = ctx.querySelector(".opt_comm");
    var txtSelectedEl = btnSelectEl.querySelector(".txt_btn");
		var btnOptionEls = ctx.querySelectorAll(".btn_option");

		var selectedValue = '';

    btnSelectEl.addEventListener("click", function() {
      btnSelectEl.classList.toggle("opt_on");
    });

    btnOptionEls.forEach(function(btn) {
      btn.addEventListener("click", function() {
				removeClassAllOptionBtns();
        this.parentElement.classList.add("on");
				selectedValue = this.innerHTML;
				txtSelectedEl.innerHTML = selectedValue;
				console.log(selectedValue);
      });
		});

		function removeClassAllOptionBtns() {
			btnOptionEls.forEach(function(btn) {
				btn.parentElement.classList.remove("on");
			})
		}

	};
})();
