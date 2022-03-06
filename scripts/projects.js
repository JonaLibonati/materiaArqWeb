const chevronClose = document.getElementById("pj_chevronClose01")
const chevronOpen = document.getElementById("pj_chevronOpen01")
const element = document.getElementById("pj_descrip01")

var elementHeight = element.scrollHeight;

function open() {
	var paddingTotalHoriz = 20+10;
	element.style.height = elementHeight + paddingTotalHoriz + "px";
	element.classList.remove("padding0");

	element.addEventListener("transitionend", 
		function() {
			element.removeEventListener("transitionend", arguments.callee);
			element.style.height = "auto";
		}
	);
}
chevronOpen.addEventListener("click", open);

function close() {
	element.style.transition = "none";
	element.style.height = elementHeight + "px";

	requestAnimationFrame (
		function () {	
			element.style.transition = null;
			element.style.height = 0 + "px";
			element.classList.toggle("padding0");
		}
	);
}

chevronClose.addEventListener("click", close);