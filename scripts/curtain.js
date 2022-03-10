const hambur = document.getElementById("but01")
const nav__list = document.getElementById("nav__list01")
const nav__curtblur = document.getElementById("nav__curtain01")
const nav__navblur = document.getElementById("nav__blur01")
const body = document.getElementById("body")
const pj = document.getElementById("pj01")
const about = document.getElementById("about01")
const pj__link = document.getElementById("pj__link01")
const nav__item = document.getElementsByClassName("nav__item")
const nav__itemFirst = document.getElementsByClassName("nav__item--first")[0]

function curtain() {
	nav__itemFirst.classList.toggle("displayNone")
	nav__item[0].classList.toggle("displayNone")
	nav__item[1].classList.toggle("displayNone")
	nav__item[2].classList.toggle("displayNone")
	nav__item[3].classList.toggle("displayNone")
	nav__list.classList.toggle("showOpa100")
	nav__list.classList.toggle("height100vh")
	nav__list.classList.toggle("zIndex70")
	nav__curtblur.classList.toggle("showOpa90")
	nav__curtblur.classList.toggle("heightCurtain")
	nav__navblur.classList.toggle("showOpa90")
	body.classList.toggle("overFlowHidden")
	/*pj.classList.toggle("height0")*/
	pj.classList.toggle("showOpa0")
	about.classList.toggle("showOpa0")
	pj__link
}

hambur.addEventListener("click", curtain)

