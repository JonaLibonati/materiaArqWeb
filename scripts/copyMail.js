footer__mail.addEventListener("click", copy)

function copy () {
    navigator.clipboard.writeText("info@estudiomateria.com.ar");
    alert ("El eMail info@estudiomateria.com.ar se ha copiado en el portapapeles")
}