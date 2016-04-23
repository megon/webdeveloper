function toggle_aside_menu() {
	$("html").toggleClass('menu-active')
}

function banner_logo_animate() {
	$(".banner_logo").hide();
	setTimeout(function() {
		$(".banner_logo").fadeIn(3000);
	}, 1000)
}

$(document).foundation()

$(function() {
	$(".header_compressed-menu").click(toggle_aside_menu);
	$(".screen-overlay").click(toggle_aside_menu);
	$(banner_logo_animate)
})

