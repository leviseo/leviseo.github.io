(function() {
	'use strict';
	window.onload = function() {
		function toggleModal(modal) {
			if (modal && modal.classList.contains('layer')) {
				if (modal.style.display === 'none') {
					modal.style.display = 'block';
					document.body.style.overflow = 'hidden';
				} else {
					modal.style.display = 'none';
					document.body.style.overflow = '';
				}
			}
		}
		
		document.addEventListener('click', function(event) {
			var targetControls = event.target.getAttribute('aria-controls');
			if (targetControls) {
				toggleModal(document.getElementById(targetControls));
			}
		});
	}
})();
