var 테이블 = document.querySelector('.container');
var 결과창 = document.querySelector('.result');

var 줄들 = [];
var 칸들 = [];
var 턴 = 'X';


var 비동기콜백 = function (이벤트) {
	var 몇줄 = 줄들.indexOf(이벤트.target.parentNode);
	var 몇칸 = 칸들[몇줄].indexOf(이벤트.target);
	console.log('몇줄', 몇줄, '몇칸', 몇칸);

	//빈칸일 때만 클릭
	if (칸들[몇줄][몇칸].innerText === '') {
		//턴 바꾸기
		if (턴 === 'X') {
			턴 = 'O'
		} else {
			턴 = 'X'
		}
		칸들[몇줄][몇칸].innerText = 턴;
	} else {
		console.log('빈칸이 아닙니다');
	}

	//게임 오버를 알려주자
	
	if (
		칸들[몇줄][0].innerText === 턴 &&
		칸들[몇줄][1].innerText === 턴 &&
		칸들[몇줄][1].innerText === 턴
		) {
		결과창.innerText = 턴 + '의 승리';
	}	
};


for (let i = 0; i < 3; i++) {
	var 줄 = document.createElement('div');
	줄.className = 'row';
	테이블.appendChild(줄);
	줄들.push(줄);
	칸들.push([]);
	for (let j = 0; j < 3; j++) {
		var 칸 = document.createElement('div');
		칸.className = 'col';
		칸들[i].push(칸);
		줄.appendChild(칸);

		//
		칸.addEventListener('click', 비동기콜백);
	}
}
