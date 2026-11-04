$(document).ready(function() {
	console.log("jQuery is ready!");
	$("body").css("background-color", "#ECFFDC");
});

let header_default = "#90EE90";
let header_enter = "#50C878";
$("#header").mouseenter(function() {
	$("#header").css("background-color", header_enter);
});
$("#header").mouseleave(function() {
	$("#header").css("background-color", header_default);
});

$("p").ready(function() {
	$("p").css("background-color", "#8AFF8A");
});

$(".container").mouseenter(function() {
	$(".container h3:first").text("Portfolio")
});

let dark = false;
$("#theme").click(function() {
	dark = (dark ? false : true);
	$("body").css("background-color", (dark ? "#004700" : "#ECFFDC"));
	$("p").css("background-color", (dark ? "#228B22" : "#8AFF8A"));
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
