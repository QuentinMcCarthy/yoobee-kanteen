$(document).ready(function(){
	$("#navButton").click(function(){
		$("#slideLeftNav").addClass("slideLeftNavOpen");
		$("#slideLeftHotspot").fadeIn()
	});

	$("#navButtonClose, #slideLeftHotspot").click(function(){
		$("#slideLeftNav").removeClass("slideLeftNavOpen");
		$("#slideLeftHotspot").fadeOut()
	});
});
