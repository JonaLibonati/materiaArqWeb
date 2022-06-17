"use strict";

footer__mail.addEventListener("click", copy);

function copy () {
    let pointer = window.matchMedia("(pointer: fine)");
	if (pointer.matches == false) {
        window.location.href = "mailto:info@estudiomateria.com.ar";
	}
    if (pointer.matches == true) {
        navigator.clipboard.writeText("info@estudiomateria.com.ar");
        alert ("El eMail info@estudiomateria.com.ar se ha copiado en el portapapeles");
	}
}