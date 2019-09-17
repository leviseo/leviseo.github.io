var 바디 = document.body;
var 문서제목 = document.createElement('h1');
문서제목.textContent = '끝말잇기';
바디.append(문서제목);
var 단어 = document.createElement('div');
단어.textContent = '코끼리';
바디.append(단어);
var 폼 = document.createElement('form');
바디.append(폼);
var 입력창 = document.createElement('input');
폼.append(입력창);
var 입력버튼 = document.createElement('button');
입력버튼.textContent = '입력버튼';
폼.append(입력버튼);
var 결과창 = document.createElement('div');
바디.append(결과창);

폼.addEventListener('submit', function 콜백함수 (이벤트) {
	이벤트.preventDefault();
	if (단어.textContent[단어.textContent.length - 1] === 입력창.value[0]) {
		결과창.textContent = '딩동댕';
		단어.textContent = 입력창.value;
		입력창.value = '';
		입력창.focus();
	} else {
		결과창.textContent = '땡';
		입력창.value = '';
		입력창.focus();
	}
});