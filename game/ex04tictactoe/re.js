var 테이블 = document.querySelector(".container");
var 결과창 = document.querySelector(".result");

var 줄들 = [];
var 칸들 = [];
var 턴 = "X";

var 비동기콜백 = function(이벤트) {
  var 몇줄 = 줄들.indexOf(이벤트.target.parentNode);
  var 몇칸 = 칸들[몇줄].indexOf(이벤트.target);
  console.log("몇줄", 몇줄, "몇칸", 몇칸);

  //1. 빈칸일 때만 클릭
  if (칸들[몇줄][몇칸].innerText !== '') {
		console.log('빈칸이 아닙니다');
  } else {
		//2. 턴 바꾸기
    if (턴 === "X") {
      턴 = "O";
    } else {
      턴 = "X";
		}
		
		칸들[몇줄][몇칸].innerText = 턴;
		
		//3. 게임 오버를 알려주자(빙고)
			//세로빙고
    if (
      칸들[몇줄][0].innerText === 턴 &&
      칸들[몇줄][1].innerText === 턴 &&
      칸들[몇줄][2].innerText === 턴
    ) {
      결과창.innerText = 턴 + "의 승리";
		}
		//가로빙고
		if (
			칸들[0][몇칸].innerText === 턴 &&
			칸들[1][몇칸].innerText === 턴 &&
			칸들[2][몇칸].innerText === 턴
		) {
			결과창.innerText = 턴 + "의 승리";
		}
		// 00,11,22 좌상-우하
		if (
			칸들[0][0].innerText === 턴 &&
			칸들[1][1].innerText === 턴 &&
			칸들[2][2].innerText === 턴
		) {		
			결과창.innerText = 턴 + "의 승리";
		}
		// 02 11 20 우상-좌하
		if (
			칸들[0][2].innerText === 턴 &&
			칸들[1][1].innerText === 턴 &&
			칸들[2][0].innerText === 턴
		) {
			결과창.innerText = 턴 + "의 승리";
		}
	}
};

for (let i = 0; i < 3; i++) {
  var 줄 = document.createElement("div");
  줄.className = "row";
  테이블.appendChild(줄);
  줄들.push(줄);
  칸들.push([]);
  for (let j = 0; j < 3; j++) {
    var 칸 = document.createElement("div");
    칸.className = "col";
    칸들[i].push(칸);
    줄.appendChild(칸);

    //자 이제 게임을 시작하지
		칸.addEventListener("click", 비동기콜백);
  }
}
