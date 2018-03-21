$(document).ready(function(){
	$("#navButton").click(function(){
		$("#slideLeftNav").addClass("slideLeftNavOpen");
		$("#navSocial").addClass("slideLeftNavOpen");
		$("#navMapBox").addClass("slideLeftNavOpen");
		$("#navButtonClose").addClass("slideLeftNavOpen");
	});

	$("#navButtonClose").click(function(){
		$("#slideLeftNav").removeClass("slideLeftNavOpen");
		$("#navSocial").removeClass("slideLeftNavOpen");
		$("#navMapBox").removeClass("slideLeftNavOpen");
		$("#navButtonClose").removeClass("slideLeftNavOpen");
	});
});
