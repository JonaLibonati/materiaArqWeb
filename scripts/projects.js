const paddingTotalHoriz = 20 + 10;

/*Touchable Screens BLUR CONTROL*/
/** events */
body.addEventListener("touchmove", function() {checkPosition(0)});
body.addEventListener("touchmove", function() {checkPosition(1)});
body.addEventListener("touchmove", function() {checkPosition(2)});
body.addEventListener("touchmove", function() {checkPosition(3)});
body.addEventListener("touchmove", function() {checkPosition(4)});
body.addEventListener("touchmove", function() {checkPosition(5)});
body.addEventListener("touchmove", function() {checkPosition(6)});
body.addEventListener("touchmove", function() {checkPosition(7)});
body.addEventListener("touchmove", function() {checkPosition(8)});
body.addEventListener("touchmove", function() {checkPosition(9)});
body.addEventListener("touchmove", function() {checkPosition(10)});
body.addEventListener("touchmove", function() {checkPosition(11)});
body.addEventListener("touchmove", function() {checkPosition(12)});
body.addEventListener("touchmove", function() {checkPosition(13)});

body.addEventListener("touchstart", function() {checkPosition(0)});
body.addEventListener("touchstart", function() {checkPosition(1)});
body.addEventListener("touchstart", function() {checkPosition(2)});
body.addEventListener("touchstart", function() {checkPosition(3)});
body.addEventListener("touchstart", function() {checkPosition(4)});
body.addEventListener("touchstart", function() {checkPosition(5)});
body.addEventListener("touchstart", function() {checkPosition(6)});
body.addEventListener("touchstart", function() {checkPosition(7)});
body.addEventListener("touchstart", function() {checkPosition(8)});
body.addEventListener("touchstart", function() {checkPosition(9)});
body.addEventListener("touchstart", function() {checkPosition(10)});
body.addEventListener("touchstart", function() {checkPosition(11)});
body.addEventListener("touchstart", function() {checkPosition(12)});
body.addEventListener("touchstart", function() {checkPosition(13)});

function checkPosition (indexElement) {
	/**Return y element center coordinate relative to the screen  */
	position_Y = pj__textBox[indexElement].getBoundingClientRect().top + pj__textBox[indexElement].scrollHeight / 2;
	/**Return top limit active area relative to the screen  */
	limitTop = (screen.availHeight - 300) / 2 ;
	/**Return bottom limit active area relative to the screen  */
	limitBottom = screen.availHeight - (screen.availHeight - 300) / 2 ;
	/**Start blur */
	if (limitTop < position_Y && position_Y < limitBottom) {
		pj__blur[indexElement].style.opacity = 0.8;
		pj__textBox[indexElement].style.opacity = 0.8;
		pj__chevronOpen[indexElement].style.height = "45px";
		pj__textChevron[indexElement].style.font Size = "16px";
	}
	/**Non display blur */
	else{
		pj__blur[indexElement].style.opacity = null;
		pj__textBox[indexElement].style.opacity = null;
		pj__chevronOpen[indexElement].style.height = null;
		pj__textChevron[indexElement].style.fontSize = null;
	}
}

/*CURTAIN CONTROL*/
/********************* OPEN **********************/
/** Open events */
pj__chevronOpen[0].addEventListener("click", function() {open(0)});
pj__chevronOpen[1].addEventListener("click", function() {open(1)});
pj__chevronOpen[2].addEventListener("click", function() {open(2)});
pj__chevronOpen[3].addEventListener("click", function() {open(3)});
pj__chevronOpen[4].addEventListener("click", function() {open(4)});
pj__chevronOpen[5].addEventListener("click", function() {open(5)});
pj__chevronOpen[6].addEventListener("click", function() {open(6)});
pj__chevronOpen[7].addEventListener("click", function() {open(7)});
pj__chevronOpen[8].addEventListener("click", function() {open(8)});
pj__chevronOpen[9].addEventListener("click", function() {open(9)});
pj__chevronOpen[10].addEventListener("click", function() {open(10)});
pj__chevronOpen[11].addEventListener("click", function() {open(11)});
pj__chevronOpen[12].addEventListener("click", function() {open(12)});
pj__chevronOpen[13].addEventListener("click", function() {open(13)});


function open(indexElement) {
	/*Hide the open chevron*/
	pj__chevronOpen[indexElement].classList.add("displayNone");
	/*Remove padding0 and font-size0 class*/
	pj__descrip[indexElement].classList.remove("padding0");
	/*Determinate the element height */
	let elementHeight = pj__descrip[indexElement].scrollHeight;
	/*Overwrite height values passing from 0 to element height*/
	pj__descrip[indexElement].style.height = elementHeight + paddingTotalHoriz + "px";
	/*When the transition end, overwrite values passing from element height to "auto"*/
	pj__descrip[indexElement].addEventListener("transitionend", 
		function transListener() {
			pj__descrip[indexElement].style.height = "auto";
			pj__descrip[indexElement].removeEventListener("transitionend", arguments.callee);
		}
	);
}

/********************* CLOSE **********************/
/** close events */
pj__chevronClose[0].addEventListener("click", function() {close(0)});
pj__chevronClose[1].addEventListener("click", function() {close(1)});
pj__chevronClose[2].addEventListener("click", function() {close(2)});
pj__chevronClose[3].addEventListener("click", function() {close(3)});
pj__chevronClose[4].addEventListener("click", function() {close(4)});
pj__chevronClose[5].addEventListener("click", function() {close(5)});
pj__chevronClose[6].addEventListener("click", function() {close(6)});
pj__chevronClose[7].addEventListener("click", function() {close(7)});
pj__chevronClose[8].addEventListener("click", function() {close(8)});
pj__chevronClose[9].addEventListener("click", function() {close(9)});
pj__chevronClose[10].addEventListener("click", function() {close(10)});
pj__chevronClose[11].addEventListener("click", function() {close(11)});
pj__chevronClose[12].addEventListener("click", function() {close(12)});
pj__chevronClose[13].addEventListener("click", function() {close(13)});

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
	let elementHeight = pj__descrip[indexElement].scrollHeight;
	/*Suspend transition*/
	pj__descrip[indexElement].style.transition = "none";
	/*Overwrite height values passing from auto to element height*/
	pj__descrip[indexElement].style.height = elementHeight + "px";
	
	requestAnimationFrame (
		function () {	
			/*Active transition*/
			pj__descrip[indexElement].style.transition = null;
			/*Overwrite height values passing from element height to 0*/
			pj__descrip[indexElement].style.height = 0 + "px";
			/*Add padding0 class*/
			pj__descrip[indexElement].classList.add("padding0");
		}
	);
	/*Automatic scroll the element height*/
	scrollUpPx(elementHeight , 0)
	/*Display the open chevron*/
	pj__chevronOpen[indexElement].classList.remove("displayNone");
}

