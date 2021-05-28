var content = document.querySelectorAll("li");
var menu = document.querySelector(".menu-bar");
var nav = document.querySelector(".span");
var buttons = document.querySelector(".btn");
var tables = document.querySelector(".table1");
var customer = document.querySelector(".customer");
var buttons2 = document.querySelector(".btnn");
var navbar = document.querySelector(".nav-bar");
var statistics = document.querySelector(".statistics");
var tableDiv = document.querySelector(".tables");

content.forEach(function (el) {
	el.addEventListener("click", function () {
		menu.querySelector(".active").classList.remove("active");

		el.classList.add("active");
	});
});

nav.addEventListener("click", function () {
	if (screen.width > 768) {
		menu.classList.toggle("toggle");
		navbar.classList.toggle("width-span");
		statistics.classList.toggle("resize");
		statistics.classList.toggle("resize-margin");
		tableDiv.classList.toggle("resize");
		tableDiv.classList.toggle("resize-position");
	} else if (screen.width <= 768) {
		menu.classList.toggle("display");
	}
});

buttons.addEventListener("click", function () {
	tables.classList.toggle("unhide");
});

buttons2.addEventListener("click", function () {
	customer.classList.toggle("unhide");
});
