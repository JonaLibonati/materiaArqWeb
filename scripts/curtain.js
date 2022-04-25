let positionNav = 0

function curtain() {
	nav__list.classList.toggle("showOpa100")
	nav__item[0].classList.toggle("showOpa100")
	nav__item[1].classList.toggle("showOpa100")
	nav__item[2].classList.toggle("showOpa100")
	nav__item[3].classList.toggle("showOpa100")
	nav__curtain.classList.toggle("zIndex70")
	nav__curtainBlur.classList.toggle("showOpa90")
	nav__blur.classList.toggle("showOpa90")
	positionNav = body.getBoundingClientRect().top
	let status = nav__curtain.getAttribute("status")
	if (status == "open") {
		nav__curtain.setAttribute("status" , "close")
	}
	if (status == "close") {
		nav__curtain.setAttribute("status" , "open")
	}
}

nav__butList.addEventListener("click", curtain)
nav__link[0].addEventListener("click", curtain)
nav__link[1].addEventListener("click", curtain)
nav__link[2].addEventListener("click", curtain)
nav__link[3].addEventListener("click", curtain)