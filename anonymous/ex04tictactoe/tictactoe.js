var 바디 = document.body;
var 테이블 = document.createElement('div');
테이블.className = 'container';

var 칸들 = [];

for (let i = 0; i < 3; i += 1) {
	var 줄 = document.createElement('div');
	줄.className = 'row';
	테이블.appendChild(줄);
	for (let j = 0; j < 3; j += 1) {
		var 칸 = document.createElement('div');
		칸.className = 'col';
		칸들.push([]);
		줄.appendChild(칸);
	}
}
바디.appendChild(테이블);

console.log(칸들);
