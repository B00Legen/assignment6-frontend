$(document).ready(function() {
	console.log("jQuery is ready!");
	$("body").css("background-color", "#ECFFDC");
	
	$("#about-me").hide();
	$("#my-music").siblings().each(function(index, element) {
		$(element).hide();
	});
	$("#my-movie").siblings().each(function(index, element) {
		$(element).hide();
	});
	$("#my-subject").siblings().each(function(index, element) {
		$(element).hide();
	});
});

let header_default = "#90EE90";
let header_enter = "#50C878";
$("#header").mouseenter(function() {
	$("#header").css("background-color", header_enter);
});
$("#header").mouseleave(function() {
	$("#header").css("background-color", header_default);
});

$("p, ul").ready(function() {
	$("p, ul").css("background-color", "#8AFF8A");
});

$(".container").mouseenter(function() {
	$(".container h3:first").text("Portfolio")
});

let dark = false;
$("#theme").click(function() {
	dark = (dark ? false : true);
	$("body").css("background-color", (dark ? "#004700" : "#ECFFDC"));
	$("p, ul").css("background-color", (dark ? "#228B22" : "#8AFF8A"));
	$("body").css("color", (dark ? "white" : "black"));
	header_default = (dark ? "#008000" : "#90EE90");
	header_enter = (dark ? "#00A300" : "#50C878");
	$("#header").css("background-color", header_default);
});

$("#hider").click(function() {
	$("#about-me").fadeOut("slow", "swing");
});
$("#shower").click(function() {
	$("#about-me").fadeIn("slow", "swing");
});
$("#toggler").click(function() {
	$("#about-me").fadeToggle("slow", "swing");
});

$("#my-music").click(function() {
	$("#my-music").siblings().each(function(index, element) {
		$(element).slideToggle();
	});
});
$("#my-movie").click(function() {
	$("#my-movie").siblings().each(function(index, element) {
		$(element).slideToggle();
	});
});
$("#my-subject").click(function() {
	$("#my-subject").siblings().each(function(index, element) {
		$(element).slideToggle();
	});
});

$("#append-skill").click(function() {
	let new_skill = $("input[name='new-skill']").val();
	
	if (new_skill !== "") {
		$("#skills").append("<li>" + new_skill + "</li>");
	}
});
$("#prepend-skill").click(function() {
	let new_skill = $("input[name='new-skill']").val();
	
	if (new_skill !== "") {
		$("#skills").prepend("<li>" + new_skill + "</li>");
	}
});
$("#remove-skill").click(function() {
	$("#skills li").last().remove();
});
