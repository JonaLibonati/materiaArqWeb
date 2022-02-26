const hambur = document.getElementById("but01")
const nav__list = document.getElementById("nav__list01")
const nav__curtblur = document.getElementById("nav__curtain01")
const nav__navblur = document.getElementById("nav__blur01")
const body = document.getElementById("body")

function curtain() {
	nav__list.classList.toggle("showOpa100")
	nav__curtblur.classList.toggle("showOpa90")
	nav__navblur.classList.toggle("showOpa90")
	body.classList.toggle("overFlowHidden")

}

hambur.addEventListener("click", curtain)