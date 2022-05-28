//White screen during de DOM loading.
document.addEventListener('DOMContentLoaded', screenOut)

function screenOut () {
    body.classList.remove('overFlowHidden')
    backOut.classList.add('screenBack')
}