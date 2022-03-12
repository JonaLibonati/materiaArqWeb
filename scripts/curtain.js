function curtain() {
	nav__itemFirst.classList.toggle("displayNone")
	nav__item[0].classList.toggle("displayNone")
	nav__item[1].classList.toggle("displayNone")
	nav__item[2].classList.toggle("displayNone")
	nav__item[3].classList.toggle("displayNone")
	nav__list.classList.toggle("showOpa100")
	nav__list.classList.toggle("height100vh")
	nav__list.classList.toggle("zIndex70")
	nav__curtain.classList.toggle("showOpa90")
	nav__curtain.classList.toggle("heightCurtain")
	nav__blur.classList.toggle("showOpa90")
	body.classList.toggle("overFlowHidden")
	pj.classList.toggle("showOpa0")
	about.classList.toggle("showOpa0")
	
}

nav__butList.addEventListener("click", curtain)

