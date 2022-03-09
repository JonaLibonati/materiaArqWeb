const chevronClose = document.getElementById("pj_chevronClose01")
const chevronOpen = document.getElementById("pj_chevronOpen01")
const element = document.getElementById("pj_descrip01")

const paddingTotalHoriz = 20 + 10;

function open() {
	/*Hide the open chevron*/
	chevronOpen.classList.add("displayNone");
	/*Remove padding0 class*/
	element.classList.remove("padding0");
	/*Determinate the element height */
	let elementHeight = element.scrollHeight;
	/*Overwrite height values passing from 0 to element height*/
	element.style.height = elementHeight + paddingTotalHoriz + "px";
	console.log(paddingTotalHoriz)
	/*When the transition end, overwrite values passing from element height to "auto"*/
	element.addEventListener("transitionend", 
		function transListener() {
			element.style.height = "auto";
			element.removeEventListener("transitionend", arguments.callee);
		}
	);
}



chevronOpen.addEventListener("click", open);

function close() {
	let elementHeight = element.scrollHeight;
	element.style.transition = "none";
	element.style.height = elementHeight + "px";
	
	requestAnimationFrame (
		function () {	
			element.style.transition = null;
			element.style.height = 0 + "px";
			element.classList.add("padding0");
		}
	);

	scrollUpPx(elementHeight , 0)

	/*Display the open chevron*/
	chevronOpen.classList.remove("displayNone");
}

chevronClose.addEventListener("click", close);

function autoScroll (length , time) {
	const period = time/length;
	console.log(period)
}

function scrollUpPx (length, i) {
	console.log(length)
	console.log(i)
	window.scrollBy(0 , -10)

	if (i >= length ) {
		// Do something with el
	} else {
		i = i + 10
		setTimeout(scrollUpPx, 10 , length , i); 
	}
}

