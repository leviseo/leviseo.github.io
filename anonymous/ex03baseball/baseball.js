var 숫자후보 = [1,2,3,4,5,6,7,8,9];
var 숫자배열 = [];
var 틀린횟수 = 0;

for (let i = 0; i < 4; i++) {
	var 뽑은것 = 숫자후보.splice(Math.floor(Math.random() * 숫자후보.length), 1)[0];
	
	숫자배열.push(뽑은것);
}
console.log(숫자배열);
//
var 바디 = document.body;
var 폼 = document.createElement('form');
바디.append(폼);
var 입력창 = document.createElement('input');
입력창.maxLength = 4;
폼.append(입력창);
var 버튼 = document.createElement('button');
버튼.textContent = '입력';
폼.append(버튼);
var 결과창 = document.createElement('p');
결과창.textContent = '결과창';
바디.append(결과창);
var 틀린횟수창 = document.createElement('p');
틀린횟수창.textContent = '틀린횟수 : ' + 틀린횟수;
바디.append(틀린횟수창);


폼.addEventListener('submit', function 콜백함수(이벤트) {
	이벤트.preventDefault();
	
	var 답 = 입력창.value;
	var 스트라이크 = 0;
	var 볼 = 0;

	if (답 === 숫자배열.join('')) {
		//답이 맞을 때
		결과창.textContent = '홈런';
		입력창.value = '';
		입력창.focus();
		//새로운 문제 제출
		숫자후보 = [1,2,3,4,5,6,7,8,9];
		숫자배열 = [];
		for (let i = 0; i < 4; i++) {
			var 뽑은것 = 숫자후보.splice(Math.floor(Math.random() * 숫자후보.length), 1)[0];
			숫자배열.push(뽑은것);
		}
		틀린횟수 = 0;
		틀린횟수창.textContent = '틀린횟수 : ' + 틀린횟수;
	} else {
		//답이 틀렸을 때
		틀린횟수 = 틀린횟수 + 1;
		틀린횟수창.textContent = '틀린횟수 : ' + 틀린횟수;
		
		if (틀린횟수 > 10) {
			//10번 넘게 틀린 경우
			결과창.textContent = '10번 넘게 틀려서 게임오버! 정답은' + 숫자배열 + '입니다!';
			입력창.disabled = 'disabled';
		} else {
			//10번 미만으로 틀린 경우
			var 답배열 = 입력창.value.split('');

			for (let i = 0; i < 4; i++) {
				if (Number(답배열[i]) === 숫자배열[i]) {
					//같은 자리인지 확인
					스트라이크 += 1;
				} else if (숫자배열.indexOf(Number(답배열[i])) > -1) {
					//같은 자리는 아니지만, 숫자가 겹치는지 확인
					볼 += 1;
				}
			}
			결과창.textContent = 스트라이크 + ' 스트라이크 ' + 볼 + ' 볼';
			입력창.value = '';
			입력창.focus();
		}
}
});