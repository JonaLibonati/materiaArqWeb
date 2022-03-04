const chevronClose = document.getElementById("pj_chevronClose01")
const chevronOpen = document.getElementById("pj_chevronOpen01")
const pj__descrip = document.getElementById("pj_descrip01")

function close() {
	
	pj__descrip.classList.toggle("maxHeight100")
}

chevronClose.addEventListener("click", close)

function open() {
	pj__descrip.classList.toggle("maxHeight100")

}

chevronOpen.addEventListener("click", open)