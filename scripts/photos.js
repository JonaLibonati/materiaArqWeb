const ph = document.getElementsByClassName("ph")[0]
const pj_01 = document.getElementsByClassName("pj")[0]
const about_01 = document.getElementsByClassName("about")[0]
const close_x = document.getElementsByClassName("ph__close")[0]
const chevronPhoto = document.getElementsByClassName("pj__chevronPhoto")[0]
const nav = document.getElementsByClassName("nav")[0]

close_x.addEventListener("click", closePhoto)

function closePhoto () {
    nav.classList.toggle("displayNone")
    ph.classList.toggle("showOpa100")
    ph.classList.toggle("zIndex70")
	body.classList.toggle("overFlowHidden")
	pj_01.classList.toggle("showOpa0")
	about_01.classList.toggle("showOpa0")
}

chevronPhoto.addEventListener("click", openPhoto)

function openPhoto () {
    nav.classList.toggle("displayNone")
    ph.classList.toggle("showOpa100")
    ph.classList.toggle("zIndex70")
	body.classList.toggle("overFlowHidden")
	pj_01.classList.toggle("showOpa0")
	about_01.classList.toggle("showOpa0")
}