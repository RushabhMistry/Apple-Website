$().ready(function() {
	var lastMenu=0, id=0;
	$(".main-menu").on("click", function(evt) {
		id = $(this).data("id");
		if (lastMenu == id) {
			$(this).next().slideUp();
			lastMenu = 0;
			$(this).removeClass("selected");
		} else {
			if (lastMenu > 0) {
				var prev = $("#menu"+lastMenu).next();
				prev.slideUp();
				prev.removeClass("selected");
			}
			$(this).next().slideDown();
			lastMenu = id;
			$(this).addClass("selected");
		}
	});
});
