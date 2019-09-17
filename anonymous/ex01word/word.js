var 바디 = document.body;

var 제목 = document.createElement('h1');
바디.append(제목);
제목.textContent = '끝말잇기';

var 단어 = document.createElement('p');
바디.append(단어);
단어.textContent = '코끼리';

var 폼 = document.createElement('form');
바디.append(폼);

var 입력창 = document.createElement('input');
폼.append(입력창);

var 버튼 = document.createElement('button');
폼.append(버튼);
버튼.textContent = '입력';

var 결과창 = document.createElement('p');
바디.append(결과창);

폼.addEventListener('submit', function 콜백함수(이벤트) {
	이벤트.preventDefault();
	if (단어.textContent[단어.textContent.length - 1] === 입력창.value[0]) {
		결과창.textContent = '딩동댕 ><';
		단어.textContent = 입력창.value;
		입력창.value = '';
		입력창.focus();
	} else {
		결과창.textContent = '띠로리!!!ㅜㅜ';
		입력창.value = '';
		입력창.focus();
	}
});
