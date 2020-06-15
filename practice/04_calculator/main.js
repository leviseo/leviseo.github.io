(function() {
	'use strict';
	var ctx = document.getElementById("calculator");
	var elBtns = ctx.getElementsByTagName('button');

	Array.prototype.forEach.call(elBtns, function(el) {
		el.addEventListener('click', function() {
			this.classList.add('on');
		});
	});

})();