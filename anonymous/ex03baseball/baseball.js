var 숫자개수 = 3;
var 남은횟수 = 10;
var 숫자후보;
var 숫자배열;

function 문제출제(남은횟수) {
	숫자후보 = [1,2,3,4,5,6,7,8,9];
	숫자배열 = [];
	남은횟수 = 남은횟수;

	for (let i = 0; i < 숫자개수; i++) {
		var 랜덤숫자 = Math.floor(Math.random() * 숫자후보.length);
		var 뽑아낸숫자 = 숫자후보.splice(랜덤숫자, 1)[0];
		숫자배열.push(뽑아낸숫자);
	}	
}
문제출제(남은횟수);

// ---------------- DOM 
var 바디 = document.body;
var 폼 = document.createElement('form');
바디.append(폼);
var 입력창 = document.createElement('input');
입력창.maxLength = 숫자개수;
폼.append(입력창);
var 버튼 = document.createElement('button');
버튼.textContent = '입력';
폼.append(버튼);
var 결과창 = document.createElement('p');
바디.append(결과창);
var 남은횟수창 = document.createElement('p');
바디.append(남은횟수창);
// ---------------- DOM//
//UI
입력창.focus();

폼.addEventListener('submit', function 콜백함수(이벤트) {
	이벤트.preventDefault();

	if (숫자배열.join('') === 입력창.value) {
		//정답
		결과창.textContent = '정답입니다. 재시작합니다'
		남은횟수창.textContent = '';

		//UI
		입력창.value = '';
		입력창.focus();

		//재출제
		문제출제(남은횟수);
	} else {

	//횟수 제한
	if (남은횟수 < 1) {
		//횟수 전부 소진
		결과창.textContent = '게임오버 정답은' + 숫자배열 + '입니다. 재시작합니다.';
		남은횟수창.textContent = '';

		//재시작
		//UI
		입력창.value = '';
		입력창.focus();

		//재출제
		문제출제(남은횟수);
	} else {
		남은횟수 -= 1
		//횟수 남아있음 지속
		var 스트라이크 = 0;
		var 볼 = 0;
		//스트라이크와 볼 구분
		for (let i = 0; i < 숫자배열.length; i++) {
			if (숫자배열[i] === Number(입력창.value[i])) {
				//스트라이크
				스트라이크 += 1;
			} else if (숫자배열.indexOf(Number(입력창.value[i])) > -1) {
				//볼
				볼 += 1;
			}
		}
		//UI
		입력창.value = '';
		입력창.focus();

		결과창.textContent = 스트라이크 + '스트라이크' + 볼 + '볼';
		남은횟수창.textContent = '남은횟수 : ' + 남은횟수;
		
		}
	}
});