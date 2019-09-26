var left = 0;

setInterval(function () {
	if (left === 0) {
		left = '-135px';
	} else if (left === '-135px') {
		left = '-284px'
	} else {
		left = 0;
	}
	document.querySelector('#computer').style.background = 
	'url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ' + left + ' 0';
}, 10000);

document.querySelectorAll('.btn').forEach(function (btn) {
	btn.addEventListener('click', function () {
		console.log(this.textContent);
	});	
});
