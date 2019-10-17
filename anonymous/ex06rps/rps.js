var 결과창 = document.body.querySelector('.desc');
var 이미지좌표 = 0;
var 가위바위보 = { //딕셔너리 자료구조
	바위: '0',
	가위: '-142px',
	보: '-284px',
};
var 점수표 = {
	가위: 1,
	바위: 0,
	보: -1
};

function 컴퓨터의선택(이미지좌표) {
	return Object.entries(가위바위보).find(function(v) {
		return v[1] === 이미지좌표;
	})[0];
};
var 인터벌;
function 인터벌메이커() {
	인터벌 = setInterval(function () {
		if (이미지좌표 === 가위바위보.바위) {
			이미지좌표 = 가위바위보.가위;
		} else if (이미지좌표 === 가위바위보.가위) {
			이미지좌표 = 가위바위보.보
		} else {
			이미지좌표 = 가위바위보.바위;
		}
		document.querySelector('#computer').style.background = 
		'url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ' + 이미지좌표 + ' 0';
	}, 100);	
};

인터벌메이커();

document.querySelectorAll('.btn').forEach(function(btn) {
	btn.addEventListener('click', function() {
		clearInterval(인터벌);
		setTimeout(function() {
			결과창.textContent = '';
			인터벌메이커();
		}, 1000);
		var 나의선택 = this.textContent;
		var 나의점수 = 점수표[나의선택];
		var 컴퓨터점수 = 점수표[컴퓨터의선택(이미지좌표)];
		var 점수차 = 나의점수 - 컴퓨터점수;
		// console.log(나의선택, 컴퓨터의선택(이미지좌표));
		//1. 가위 0, 바위 1, 보 -1 로 규칙을 찾아서 코드로...
		if (점수차 === 0) {
			console.log('비겼습니다');
			결과창.textContent = '비겼습니다';
		} else if ([-1, 2].includes(점수차)) {
			console.log('이겼습니다');
			결과창.textContent = '이겼습니다';
		} else {
			console.log('졌습니다');
			결과창.textContent = '졌습니다';
		}
		//2. 이긴 횟수, 진 횟수, 비긴 횟수 html로 뿌려보자
		
		// if (나의선택 === '가위') {
		// 	if (컴퓨터의선택(이미지좌표) === '가위') {
		// 		console.log('비겼습니다');
		// 	} else if (컴퓨터의선택(이미지좌표) === '바위') {
		// 		console.log('졌습니다ㅜㅜ');
		// 	} else if (컴퓨터의선택(이미지좌표) === '보') {
		// 		console.log('이겼습니다><');
		// 	}
		// } else if (나의선택 === '바위') {
		// 	if (컴퓨터의선택(이미지좌표) === '가위') {
		// 		console.log('이겼습니다><');
		// 	} else if (컴퓨터의선택(이미지좌표) === '바위') {
		// 		console.log('비겼습니다');
		// 	} else if (컴퓨터의선택(이미지좌표) === '보') {
		// 		console.log('졌습니다ㅜㅜ');
		// 	}
		// } else if (나의선택 === '보') {
		// 	if (컴퓨터의선택(이미지좌표) === '가위') {
		// 		console.log('졌습니다ㅜㅜ');
		// 	} else if (컴퓨터의선택(이미지좌표) === '바위') {
		// 		console.log('이겼습니다><');
		// 	} else if (컴퓨터의선택(이미지좌표) === '보') {
		// 		console.log('비겼습니다');
		// 	}
		// }
	});	
});