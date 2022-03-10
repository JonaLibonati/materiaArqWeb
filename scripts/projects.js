const chevronClose = document.getElementsByClassName("pj__chevronClose")
const chevronOpen = document.getElementsByClassName("pj__chevronOpen")
const element = document.getElementsByClassName("pj__descrip")

const paddingTotalHoriz = 20 + 10;

/********************* OPEN **********************/
/** Open events */
chevronOpen[0].addEventListener("click", function() {open(0)});
chevronOpen[1].addEventListener("click", function() {open(1)});
/*
chevronOpen[2].addEventListener("click", function() {open(2)});
chevronOpen[3].addEventListener("click", function() {open(3)});
chevronOpen[4].addEventListener("click", function() {open(4)});
chevronOpen[5].addEventListener("click", function() {open(5)});
chevronOpen[6].addEventListener("click", function() {open(6)});
chevronOpen[7].addEventListener("click", function() {open(7)});
chevronOpen[8].addEventListener("click", function() {open(8)});
chevronOpen[9].addEventListener("click", function() {open(9)});
chevronOpen[10].addEventListener("click", function() {open(10)});
chevronOpen[11].addEventListener("click", function() {open(11)});
chevronOpen[12].addEventListener("click", function() {open(12)});
chevronOpen[13].addEventListener("click", function() {open(13)});
*/




function open(indexElement) {
	/*Hide the open chevron*/
	chevronOpen[indexElement].classList.add("displayNone");
	/*Remove padding0 class*/
	element[indexElement].classList.remove("padding0");
	/*Determinate the element height */
	let elementHeight = element[indexElement].scrollHeight;
	/*Overwrite height values passing from 0 to element height*/
	element[indexElement].style.height = elementHeight + paddingTotalHoriz + "px";
	/*When the transition end, overwrite values passing from element height to "auto"*/
	element[indexElement].addEventListener("transitionend", 
		function transListener() {
			element[indexElement].style.height = "auto";
			element[indexElement].removeEventListener("transitionend", arguments.callee);
		}
	);
}

/********************* CLOSE **********************/
/** close events */

/*Automatic scroll*/
function scrollUpPx (length, i) {
	window.scrollBy(0 , -10)
	if (i >= length ) {
		/*Exit*/
	} else {
		/*Repeat*/
		i = i + 10
		setTimeout(scrollUpPx, 10 , length , i); 
	}
}

function close(indexElement) {
	/*Determinate the element height */
	let elementHeight = element[indexElement].scrollHeight;
	/*Suspend transition*/
	element[indexElement].style.transition = "none";
	/*Overwrite height values passing from auto to element height*/
	element[indexElement].style.height = elementHeight + "px";
	
	requestAnimationFrame (
		function () {	
			/*Active transition*/
			element[indexElement].style.transition = null;
			/*Overwrite height values passing from element height to 0*/
			element[indexElement].style.height = 0 + "px";
			/*Add padding0 class*/
			element[indexElement].classList.add("padding0");
		}
	);
	
	scrollUpPx(elementHeight , 0)
	/*Display the open chevron*/
	chevronOpen[indexElement].classList.remove("displayNone");
}

chevronClose[0].addEventListener("click", function() {close(0)});
chevronClose[1].addEventListener("click", function() {close(1)});
/*
chevronClose[2].addEventListener("click", function() {close(2)});
chevronClose[3].addEventListener("click", function() {close(3)});
chevronClose[4].addEventListener("click", function() {close(4)});
chevronClose[5].addEventListener("click", function() {close(5)});
chevronClose[6].addEventListener("click", function() {close(6)});
chevronClose[7].addEventListener("click", function() {close(7)});
chevronClose[8].addEventListener("click", function() {close(8)});
chevronClose[9].addEventListener("click", function() {close(9)});
chevronClose[10].addEventListener("click", function() {close(10)});
chevronClose[11].addEventListener("click", function() {close(11)});
chevronClose[12].addEventListener("click", function() {close(12)});
chevronClose[13].addEventListener("click", function() {close(13)});
*/