(function() {
	function toggle() {
		$("#sidebar-wrapper").toggleClass("active");
		return false;
	}

	function animate() {
		if (location.pathname.replace(/^\//, '') !== this.pathname.replace(/^\//, '') ||
			location.hostname !== this.hostname) {
			return;
		}
		var target = $(this.hash);
		var name = this.hash.slice(1);
		if (!name) { return; }
		target = target.length ? target : $('[name=' + name + ']');
		if (target.length) {
			$('html,body').stop().animate({
				scrollTop: target.offset().top
			}, 1000, function() {
				window.location.hash = name;
			});
			return false;
		}
	}

	function init() {
		$("[menu-close]").click(toggle);
		$("[menu-toggle]").click(toggle);
		$('a[href^="#"]').click(animate);
	}

	// Scrolls to the selected menu item on the page
	$(init);
}());