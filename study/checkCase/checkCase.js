var 폼 = document.getElementById('form');
var 입력창 = document.getElementById('tf');
var 버튼 = document.getElementById('btn');
var 결과창 = document.getElementById('desc');
var 입력값 = '';

입력창.focus();

폼.addEventListener('submit', function (이벤트) {
	이벤트.preventDefault();

	입력값 = 입력창.value;
	// 결과창.textContent = 입력값;
	
	if (입력값 === 입력값.toUpperCase()) {
		//전부 대문자일때
		결과창.textContent = '전부 대문자 입니다';
	} else if (입력값 === 입력값.toLowerCase()) {
		//전부 소문자일때
		결과창.textContent = '전부 소문자 입니다';
	} else {
		// 둘 다 아닐 때
		결과창.textContent = '보통 문장입니다';
	}
	
	입력창.value = '';
});