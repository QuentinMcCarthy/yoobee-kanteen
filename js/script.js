$(document).ready(function(){
	$("#navButton").click(function(){
		$("#slideLeftNav").addClass("slideLeftNavOpen");
		$("#slideLeftHotspot").fadeIn();
	});

	$("#navButtonClose, #slideLeftHotspot").click(function(){
		$("#slideLeftNav").removeClass("slideLeftNavOpen");
		$("#slideLeftHotspot").fadeOut();
	});

	// MENU TABS

	var menuURL = window.location.href.indexOf("menus.html");
	var breakfastURL = window.location.href.indexOf("?tab=breakfast");
	var lunchURL = window.location.href.indexOf("?tab=lunch");

	if(menuURL > 0){
		if(breakfastURL > 0){
			$(".menuTabOption").removeClass("activeMenuOption");
			$("#breakfastTab").addClass("activeMenuOption");
			$("#drinksMenu").hide();
			$("#breakfastMenu").show();
			$("#lunchMenu").hide();
		} else if(lunchURL > 0){
			$(".menuTabOption").removeClass("activeMenuOption");
			$("#lunchTab").addClass("activeMenuOption");
			$("#drinksMenu").hide();
			$("#breakfastMenu").hide()
			$("#lunchMenu").show()
		} else {
			$(".menuTabOption").removeClass("activeMenuOption");
			$("#drinksTab").addClass("activeMenuOption");
			$("#drinksMenu").show();
			$("#breakfastMenu").hide()
			$("#lunchMenu").hide()
		}
	}
});
