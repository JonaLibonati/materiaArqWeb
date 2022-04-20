const paddingTotalHoriz = 20 + 10;

/** Scroll Events */
window.onscroll = function() {scrolled()};

function scrolled() {
	let pointer = window.matchMedia("(pointer: fine)")
	if (pointer.matches == false) {
		for (i = 0; i <  pj__descrip.length; ++i) {
			checkPosition(i)
		}
	}

	let mobile = window.matchMedia("(max-width: 999px) and (orientation: portrait)")
	if (mobile.matches == false) {
		for (i = 0; i <  pj__descrip.length; ++i) {
			checkPositionClose(i)
		}
	}
}
/*Touchable Screens BLUR CONTROL*/
function checkPosition (indexElement) {
	/*Check if pj__descrip is already open*/
	let status = pj__descrip[indexElement].getAttribute("status")
	if (status != "open") { 
		/**Return y element center coordinate relative to the screen  */
		position_Y = pj__textBox[indexElement].getBoundingClientRect().top + pj__textBox[indexElement].scrollHeight / 2;
		/**Return top limit active area relative to the screen  */
		limitTop = (screen.availHeight - screen.availHeight * 0.29) / 2 ;
		/**Return bottom limit active area relative to the screen  */
		limitBottom = screen.availHeight - (screen.availHeight - screen.availHeight * 0.29) / 2 ;
		/**Start blur */
		if (limitTop < position_Y && position_Y < limitBottom) {
			pj__blur[indexElement].style.opacity = 0.8;
			pj__textBox[indexElement].style.opacity = 0.8;
			pj__chevronOpen[indexElement].style.height = "45px";
			pj__textChevron[indexElement].style.fontSize = "16px";
		}
		/**Non display blur */
		else{
			pj__blur[indexElement].style.opacity = null;
			pj__textBox[indexElement].style.opacity = null;
			pj__chevronOpen[indexElement].style.height = null;
			pj__textChevron[indexElement].style.fontSize = null;
		}
	}
	/**If if pj__descrip is not oper, No display blur */
	else{
		pj__blur[indexElement].style.opacity = null;
		pj__textBox[indexElement].style.opacity = null;
		pj__chevronOpen[indexElement].style.height = null;
		pj__textChevron[indexElement].style.fontSize = null;
	}
}

/*Close when scrolling*/
function checkPositionClose (indexElement) {
	/*Check if pj__descrip is open*/
	let status = pj__descrip[indexElement].getAttribute("status")
	if (status == "open") { 
		/**Return y element center coordinate relative to the screen  */
		position_Y = pj__textBox[indexElement].getBoundingClientRect().top + pj__textBox[indexElement].scrollHeight / 2;
		/**Return top limit active area relative to the screen  */
		limitTop = 0 ;
		/**Return bottom limit active area relative to the screen  */
		limitBottom = screen.availHeight;
		/**Close*/
		if (limitTop > position_Y || position_Y > limitBottom) {
			close(indexElement)
		}
	}
}
/*CURTAIN CONTROL*/
/********************* OPEN **********************/
/** Open events */
pj__textBox[0].addEventListener("click", function() {open(0)});
pj__textBox[1].addEventListener("click", function() {open(1)});
pj__textBox[2].addEventListener("click", function() {open(2)});
pj__textBox[3].addEventListener("click", function() {open(3)});
pj__textBox[4].addEventListener("click", function() {open(4)});
pj__textBox[5].addEventListener("click", function() {open(5)});
pj__textBox[6].addEventListener("click", function() {open(6)});
pj__textBox[7].addEventListener("click", function() {open(7)});
pj__textBox[8].addEventListener("click", function() {open(8)});
pj__textBox[9].addEventListener("click", function() {open(9)});
pj__textBox[10].addEventListener("click", function() {open(10)});
pj__textBox[11].addEventListener("click", function() {open(11)});
pj__textBox[12].addEventListener("click", function() {open(12)});
pj__textBox[13].addEventListener("click", function() {open(13)});
pj__textBox[14].addEventListener("click", function() {open(14)});
pj__textBox[15].addEventListener("click", function() {open(15)});
pj__textBox[16].addEventListener("click", function() {open(16)});
pj__textBox[17].addEventListener("click", function() {open(17)});
pj__textBox[18].addEventListener("click", function() {open(18)});
pj__textBox[19].addEventListener("click", function() {open(19)});
pj__textBox[20].addEventListener("click", function() {open(20)});
pj__textBox[21].addEventListener("click", function() {open(21)});
pj__textBox[22].addEventListener("click", function() {open(22)});
pj__textBox[23].addEventListener("click", function() {open(23)});

pj__textBox[24].addEventListener("click", function() {open(24)});
pj__textBox[25].addEventListener("click", function() {open(25)});
pj__textBox[26].addEventListener("click", function() {open(26)});
pj__textBox[27].addEventListener("click", function() {open(27)});
pj__textBox[28].addEventListener("click", function() {open(28)});
pj__textBox[29].addEventListener("click", function() {open(29)});
pj__textBox[30].addEventListener("click", function() {open(30)});
pj__textBox[31].addEventListener("click", function() {open(31)});
pj__textBox[32].addEventListener("click", function() {open(32)});
pj__textBox[33].addEventListener("click", function() {open(33)});
pj__textBox[34].addEventListener("click", function() {open(34)});
pj__textBox[35].addEventListener("click", function() {open(35)});
pj__textBox[36].addEventListener("click", function() {open(36)});
pj__textBox[37].addEventListener("click", function() {open(37)});
pj__textBox[38].addEventListener("click", function() {open(38)});
pj__textBox[39].addEventListener("click", function() {open(39)});
pj__textBox[40].addEventListener("click", function() {open(40)});
pj__textBox[41].addEventListener("click", function() {open(41)});
pj__textBox[42].addEventListener("click", function() {open(42)});
pj__textBox[43].addEventListener("click", function() {open(43)});
pj__textBox[44].addEventListener("click", function() {open(44)});
pj__textBox[45].addEventListener("click", function() {open(45)});
pj__textBox[46].addEventListener("click", function() {open(46)});
pj__textBox[47].addEventListener("click", function() {open(47)});

pj__textBox[48].addEventListener("click", function() {open(48)});
pj__textBox[49].addEventListener("click", function() {open(49)});
pj__textBox[50].addEventListener("click", function() {open(50)});
pj__textBox[51].addEventListener("click", function() {open(51)});
pj__textBox[52].addEventListener("click", function() {open(52)});
pj__textBox[53].addEventListener("click", function() {open(53)});
pj__textBox[54].addEventListener("click", function() {open(54)});
pj__textBox[55].addEventListener("click", function() {open(55)});
pj__textBox[56].addEventListener("click", function() {open(56)});
pj__textBox[57].addEventListener("click", function() {open(57)});
pj__textBox[58].addEventListener("click", function() {open(58)});
pj__textBox[59].addEventListener("click", function() {open(59)});
pj__textBox[60].addEventListener("click", function() {open(60)});
pj__textBox[61].addEventListener("click", function() {open(61)});
pj__textBox[62].addEventListener("click", function() {open(62)});
pj__textBox[63].addEventListener("click", function() {open(63)});
pj__textBox[64].addEventListener("click", function() {open(64)});
pj__textBox[65].addEventListener("click", function() {open(65)});
pj__textBox[66].addEventListener("click", function() {open(66)});
pj__textBox[67].addEventListener("click", function() {open(67)});
pj__textBox[68].addEventListener("click", function() {open(68)});
pj__textBox[69].addEventListener("click", function() {open(69)});
pj__textBox[70].addEventListener("click", function() {open(70)});
pj__textBox[71].addEventListener("click", function() {open(71)});

function open(indexElement) {
	/*Check if pj__descrip is already open*/
	let status = pj__descrip[indexElement].getAttribute("status")
	if (status != "open") {    
		/*Close the open pj__descrips*/
		for (i = 0; i <  pj__descrip.length; ++i) {
			let status = pj__descrip[i].getAttribute("status")
			if (status == "open") {
				close(i)
			}
		}
		/*Hide the open chevron*/
		pj__chevronOpen[indexElement].classList.add("displayNone");
		/*Remove padding0 and font-size0 class*/
		pj__descrip[indexElement].classList.remove("padding0");
		/**If there is only one column */
		let mobile = window.matchMedia("(max-width: 999px) and (orientation: portrait)")
		if (mobile.matches) {
			/*Determinate the element height */
			let elementHeight = pj__descrip[indexElement].scrollHeight;
			/*Overwrite height values passing from 0 to element height*/
			pj__descrip[indexElement].style.height = elementHeight + paddingTotalHoriz + "px";
			/*When the transition end, overwrite values passing from element height to "auto"*/
			pj__descrip[indexElement].addEventListener("transitionend", 
				function transListener() {
					pj__descrip[indexElement].style.height = "auto";
					pj__chevronClose[indexElement].style.height = "40px"
					pj__descrip[indexElement].removeEventListener("transitionend", arguments.callee);
				}
			);
		} 
		/**If there are two or more columns*/
		else {
			/*Overwrite height values passing from 0 to element height*/
			pj__descrip[indexElement].style.height = "400px" 
			/*When the transition end*/
			pj__descrip[indexElement].addEventListener("transitionend", 
				function transListener() {
					pj__chevronClose[indexElement].style.height = "40px"
					pj__descrip[indexElement].removeEventListener("transitionend", arguments.callee);
				}
			)
		}
		/**Set attribute to open*/
		pj__descrip[indexElement].setAttribute("status" , "open")
		/**Non display blur */
		pj__blur[indexElement].style.opacity = null;
		pj__textBox[indexElement].style.opacity = null;
		pj__chevronOpen[indexElement].style.height = null;
		pj__textChevron[indexElement].style.fontSize = null;
	}
}

/********************* CLOSE **********************/
/** close events */
/** 1er column */
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
pj__chevronClose[14].addEventListener("click", function() {close(14)});
pj__chevronClose[15].addEventListener("click", function() {close(15)});
pj__chevronClose[16].addEventListener("click", function() {close(16)});
pj__chevronClose[17].addEventListener("click", function() {close(17)});
pj__chevronClose[18].addEventListener("click", function() {close(18)});
pj__chevronClose[19].addEventListener("click", function() {close(19)});
pj__chevronClose[20].addEventListener("click", function() {close(20)});
pj__chevronClose[21].addEventListener("click", function() {close(21)});
pj__chevronClose[22].addEventListener("click", function() {close(22)});
pj__chevronClose[23].addEventListener("click", function() {close(23)});

/** 2er column */
pj__chevronClose[24].addEventListener("click", function() {close(24)});
pj__chevronClose[25].addEventListener("click", function() {close(25)});
pj__chevronClose[26].addEventListener("click", function() {close(26)});
pj__chevronClose[27].addEventListener("click", function() {close(27)});
pj__chevronClose[28].addEventListener("click", function() {close(28)});
pj__chevronClose[29].addEventListener("click", function() {close(29)});
pj__chevronClose[30].addEventListener("click", function() {close(30)});
pj__chevronClose[31].addEventListener("click", function() {close(31)});
pj__chevronClose[32].addEventListener("click", function() {close(32)});
pj__chevronClose[33].addEventListener("click", function() {close(33)});
pj__chevronClose[34].addEventListener("click", function() {close(34)});
pj__chevronClose[35].addEventListener("click", function() {close(35)});
pj__chevronClose[36].addEventListener("click", function() {close(36)});
pj__chevronClose[37].addEventListener("click", function() {close(37)});
pj__chevronClose[38].addEventListener("click", function() {close(38)});
pj__chevronClose[39].addEventListener("click", function() {close(39)});
pj__chevronClose[40].addEventListener("click", function() {close(40)});
pj__chevronClose[41].addEventListener("click", function() {close(41)});
pj__chevronClose[42].addEventListener("click", function() {close(42)});
pj__chevronClose[43].addEventListener("click", function() {close(43)});
pj__chevronClose[44].addEventListener("click", function() {close(44)});
pj__chevronClose[45].addEventListener("click", function() {close(45)});
pj__chevronClose[46].addEventListener("click", function() {close(46)});
pj__chevronClose[47].addEventListener("click", function() {close(47)});

/** 3er column */
pj__chevronClose[48].addEventListener("click", function() {close(48)});
pj__chevronClose[49].addEventListener("click", function() {close(49)});
pj__chevronClose[50].addEventListener("click", function() {close(50)});
pj__chevronClose[51].addEventListener("click", function() {close(51)});
pj__chevronClose[52].addEventListener("click", function() {close(52)});
pj__chevronClose[53].addEventListener("click", function() {close(53)});
pj__chevronClose[54].addEventListener("click", function() {close(54)});
pj__chevronClose[55].addEventListener("click", function() {close(55)});
pj__chevronClose[56].addEventListener("click", function() {close(56)});
pj__chevronClose[57].addEventListener("click", function() {close(57)});
pj__chevronClose[58].addEventListener("click", function() {close(58)});
pj__chevronClose[59].addEventListener("click", function() {close(59)});
pj__chevronClose[60].addEventListener("click", function() {close(60)});
pj__chevronClose[61].addEventListener("click", function() {close(61)});
pj__chevronClose[62].addEventListener("click", function() {close(62)});
pj__chevronClose[63].addEventListener("click", function() {close(63)});
pj__chevronClose[64].addEventListener("click", function() {close(64)});
pj__chevronClose[65].addEventListener("click", function() {close(65)});
pj__chevronClose[66].addEventListener("click", function() {close(66)});
pj__chevronClose[67].addEventListener("click", function() {close(67)});
pj__chevronClose[68].addEventListener("click", function() {close(68)});
pj__chevronClose[69].addEventListener("click", function() {close(69)});
pj__chevronClose[70].addEventListener("click", function() {close(70)});
pj__chevronClose[71].addEventListener("click", function() {close(71)});


/*Automatic scroll*/
/*
function scrollUpPx (length, i) {
	let mobile = window.matchMedia("(max-width: 999px) and (orientation: portrait)")
	if (mobile.matches) {
		window.scrollBy(0 , -10)
		if (i >= length ) {
			/*Exit*/
		/*} else {
			/*Repeat*//*
			i = i + 10
			setTimeout(scrollUpPx, 10 , length , i); 
		}
	}
}
*/

function close(indexElement) {
/*Check if pj__descrip is already close*/
	let status = pj__descrip[indexElement].getAttribute("status")
	if (status != "close") {
		/*Set the chevronClose height to null*/
		pj__chevronClose[indexElement].style.height = null
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
		/*scrollUpPx(elementHeight , 0)*/
		/*Display the open chevron*/
		pj__chevronOpen[indexElement].classList.remove("displayNone");
		/**Set attribute to close*/
		pj__descrip[indexElement].setAttribute("status" , "close")
	}
}



