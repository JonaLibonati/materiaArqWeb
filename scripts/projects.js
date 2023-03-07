"use strict";

const paddingTotalHoriz = 20 + 10;

// Hover Events
for (let i = 0; i <  pj__fig.length; ++i) {
	let a = i;
	pj__fig[a].addEventListener("mouseenter", function() {
		let pointer = window.matchMedia("(pointer: fine)");
		let status = getElementStatus (a);
		if (pointer.matches && status != "open") {
			startElementBlur (a);
		}
	});
}

for (let i = 0; i <  pj__fig.length; ++i) {
	let a = i;
	pj__fig[a].addEventListener("mouseleave", function() {
		let pointer = window.matchMedia("(pointer: fine)");
		if (pointer.matches) {
			closeElementBlur (a);
		}
	});
}

// Scroll Events
window.onscroll = function() {scrolled()}

let previousScroll = 0;

function scrolled() {
	//Blur control on scroll
	let pointer = window.matchMedia("(pointer: fine)");
	if (pointer.matches == false) {
		for (let i = 0; i <  pj__descrip.length; ++i) {
			checkPosition(i);
		}
	}
	//Close pj-descrip on scroll
	let mobile = window.matchMedia("(max-width: 999px) and (orientation: portrait)");
	if (mobile.matches == false) {
		for (let i = 0; i <  pj__descrip.length; ++i) {
			checkPositionClose(i);
		}
	}
	//Close nav on scroll
	let relativeScroll = window.scrollY + positionNav;
	let status = nav__curtain.getAttribute("status");
	if ((relativeScroll < -180 || relativeScroll > 180) && status == "open") {
		curtain() //curtain.js;
		nav__curtain.setAttribute("status" , "close");
	}
	//Set position atribute relative to screen to all elements.
	for (let i = 0; i <  pj__descrip.length; ++i) {
		setPositionAtribute (i);
	}
}

//Touchable Screens BLUR CONTROL

//Positions Variables
//----Return top limit blur active area relative to the screen
let blurLimitTop = (screen.availHeight - screen.availHeight * 0.29) / 2 ;
//----Return bottom limit blur active area relative to the screen
let blurLimitBottom = screen.availHeight - (screen.availHeight - screen.availHeight * 0.29) / 2 ;
//----Return top limit to close
let limitTop = -400 * 0.25;
//----Return bottom limit to close
let limitBottom = screen.availHeight;
//----Set position atribute relative to screen during first render.
for (let i = 0; i <  pj__descrip.length; ++i) {
	setPositionAtribute (i);
}
//----Return status atribute
function getElementStatus (indexElement) {
	let status = pj__descrip[indexElement].getAttribute("status")
	return status;
}
//----Return y element center coordinate relative to the screen
function getElementPositionY (indexElement) {
	let position_Y = pj__textBox[indexElement].getBoundingClientRect().top + pj__textBox[indexElement].scrollHeight / 2;
	return position_Y;
}

function checkPosition (indexElement) {
	let position_Y = getElementPositionY (indexElement);
	let status = getElementStatus (indexElement);
	//Check if pj__descrip is already open
	if (status != "open") {
		//Start blur
		if (blurLimitTop < position_Y && position_Y < blurLimitBottom) {
			startElementBlur (indexElement);
		}
		//Non display blur
		else{
			closeElementBlur (indexElement);
		}
	}
	//If if pj__descrip is not oper, No display blur
	else{
		closeElementBlur (indexElement);
	}
}

function startElementBlur (indexElement) {
	pj__blur[indexElement].style.opacity = 0.8;
	pj__textBox[indexElement].style.opacity = 0.8;
	pj__chevronOpen[indexElement].style.height = "45px";
	pj__textChevron[indexElement].style.fontSize = "16px";
}

function closeElementBlur (indexElement) {
	pj__blur[indexElement].style.opacity = null;
	pj__textBox[indexElement].style.opacity = null;
	pj__chevronOpen[indexElement].style.height = null;
	pj__textChevron[indexElement].style.fontSize = null;
}

//Close pj-descrip on scroll

function checkPositionClose (indexElement) {
	let status = getElementStatus (indexElement);
	let position_Y = getElementPositionY (indexElement);
	//Check if pj__descrip is open
	if (status == "open") {
		//Close
		if (limitTop > position_Y || position_Y > limitBottom) {
			close(indexElement);
		};
	}
}

//Set position atribute relative to screen.
function setPositionAtribute (indexElement) {
	let position_Y = getElementPositionY (indexElement);
	//Check if pj__descrip is open
	if (limitTop < position_Y && position_Y < limitBottom) {
		pj__box[indexElement].setAttribute("position", "onScreen");
	} else {
		pj__box[indexElement].setAttribute("position", "outScreen");
	}
}

//pj-descrip CURTAIN CONTROL
//********************* OPEN **********************
//Open events
for (let i = 0; i <  pj__descrip.length; ++i) {
	let a = i;

	pj__textBox[a].addEventListener("click", async function() {
		let statusElement = pj__descrip[a].getAttribute("status");

		for (let i = 0; i <  pj__descrip.length; ++i) {
			if (i != a) {
				pj__box[i].setAttribute("canclick", 'false');
			}
		}

		let canClick = pj__box[a].getAttribute("canclick");
		if (statusElement == 'close' && canClick == "true") {
			let elementsOpen = [];
			let status;
			//Close the open pj__descrips
			for (let i = 0; i <  pj__descrip.length; ++i) {
				status = pj__descrip[i].getAttribute("status");

				if (status == "open") {
					elementsOpen.push(i);
				}
			}

			for (let i of elementsOpen) {
				await close(i);
			}

			pj__box[a].scrollIntoView();
			openWhenOnScreen(a);

			for (let i = 0; i <  pj__descrip.length; ++i) {
				if (i != a) {
					pj__box[i].setAttribute("canclick", 'true');
				}
			}
		}
	});
}

function open(indexElement) {
	//Check if pj__descrip is already open
	let status = getElementStatus (indexElement);
	if (status != "open") {
		//Hide the open chevron
		pj__chevronOpen[indexElement].classList.add("displayNone");
		//Display share button
		pj__shareCircle[indexElement].style.opacity = 0.8;
		pj__shareIcon[indexElement].style.opacity = 1;
		//Remove padding0 and font-size0 class
		pj__descrip[indexElement].classList.remove("padding0");
		//If there is only one column
		let mobile = window.matchMedia("(max-width: 949px) and (orientation: portrait)");
		if (mobile.matches) {
			//Determinate the element height
			let elementHeight = pj__descrip[indexElement].scrollHeight;
			//Overwrite height values passing from 0 to element height
			pj__descrip[indexElement].style.height = elementHeight + paddingTotalHoriz + "px";
			//When the transition end, overwrite values passing from element height to "auto"
			pj__descrip[indexElement].addEventListener("transitionend",
				function transListener() {
					pj__descrip[indexElement].style.height = "auto";
					pj__chevronClose[indexElement].style.height = "40px";
					pj__descrip[indexElement].removeEventListener("transitionend", transListener);
				}
			)
		}
		//If there are two or more columns
		else {
			//Overwrite height values passing from 0 to element height
			pj__descrip[indexElement].style.height = "400px";
			//When the transition end
			pj__descrip[indexElement].addEventListener("transitionend",
				function transListener() {
					pj__chevronClose[indexElement].style.height = "40px";
					pj__descrip[indexElement].removeEventListener("transitionend", transListener);
				}
			)
		}
		//Set attribute to open
		pj__descrip[indexElement].setAttribute("status" , "open");
		//Non display blur
		closeElementBlur (indexElement);
	}
}

//Open project only when is on screen
function openWhenOnScreen (indexElement) {
    let position_pj = pj__box[indexElement].getAttribute("position");
    console.log(position_pj);
    if (position_pj != "onScreen") {
        setTimeout(openWhenOnScreen, 100, indexElement);
    } else {
        setTimeout(open, 100, indexElement);
        clearTimeout(openWhenOnScreen);
    }
}

//******************* CLOSE *********************
// close events

for (let i = 0; i <  pj__descrip.length; ++i) {
	let a = i;
	pj__chevronClose[a].addEventListener("click", function() {close(a)});
};

async function close(indexElement) {
//Check if pj__descrip is already close
	let status = getElementStatus (indexElement);
	if (status != "close") {
		//Set the chevronClose height to null
		pj__chevronClose[indexElement].style.height = null;
		//Hide the share circle
		pj__shareCircle[indexElement].style.opacity = null;
		pj__shareIcon[indexElement].style.opacity = null;
		//Determinate the element height
		let elementHeight = pj__descrip[indexElement].scrollHeight;
		//Suspend transition
		pj__descrip[indexElement].style.transition = "none";
		//Overwrite height values passing from auto to element height
		pj__descrip[indexElement].style.height = elementHeight + "px";

		requestAnimationFrame (
			function () {
				//Active transition
				pj__descrip[indexElement].style.transition = "height 1s, padding-top 1s, padding-bottom 1s;";
				//Overwrite height values passing from element height to 0
				pj__descrip[indexElement].style.height = 0 + "px";
				//Add padding0 class
				pj__descrip[indexElement].classList.add("padding0");
			}
		)
		pj__descrip[indexElement].style.transition = null;
		//Display the open chevron
		pj__chevronOpen[indexElement].classList.remove("displayNone");
		//Set attribute to close
		await transitionEnd(pj__descrip[indexElement])
		pj__descrip[indexElement].setAttribute("status" , "close");
		//
	}
}


async function transitionEnd(element) {
	await new Promise((resolve) => {
		//element.removeEventListener("transitionend", resolve);
		element.addEventListener("transitionend", resolve);
	})
}

