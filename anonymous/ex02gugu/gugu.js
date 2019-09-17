var 숫자1 = Math.ceil(Math.random() * 9);
var 숫자2 = Math.ceil(Math.random() * 9);
var 결과 = 숫자1 * 숫자2;

// 
var 문제 = document.createElement('p');
문제.textContent = String(숫자1) + ' * ' + String(숫자2) + ' = ?';
document.body.append(문제);

// 
var 폼 = document.createElement('form');
document.body.append(폼);

var 입력창 = document.createElement('input');
폼.append(입력창);

var 버튼 = document.createElement('button');
버튼.textContent = '입력';
폼.append(버튼);

var 결과창 = document.createElement('p');
document.body.append(결과창);
// 

폼.addEventListener('submit', function 콜백함수(이벤트) {
	이벤트.preventDefault();
	if (결과 === Number(입력창.value)) {
		결과창.textContent = '딩동댕 ><';

		숫자1 = Math.ceil(Math.random() * 9);
		숫자2 = Math.ceil(Math.random() * 9);
		결과 = 숫자1 * 숫자2;
		문제.textContent = String(숫자1) + ' * ' + String(숫자2) + ' = ?';

		입력창.value = '';
		입력창.focus();
	} else {
		결과창.textContent = '띠로리 ㅜㅜ';
		입력창.value = '';
		입력창.focus();
	}
});