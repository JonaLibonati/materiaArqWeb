close_x.addEventListener("click", closePhoto)

function closePhoto () {
    nav.classList.toggle("displayNone")
    ph.classList.toggle("showOpa100")
    ph.classList.toggle("zIndex70")
	body.classList.toggle("overFlowHidden")
	pj.classList.toggle("showOpa0")
	about.classList.toggle("showOpa0")
}

pj__chevronPhoto.addEventListener("click", openPhoto)

function openPhoto () {
    nav.classList.toggle("displayNone")
    ph.classList.toggle("showOpa100")
    ph.classList.toggle("zIndex70")
	body.classList.toggle("overFlowHidden")
	pj.classList.toggle("showOpa0")
	about.classList.toggle("showOpa0")
}