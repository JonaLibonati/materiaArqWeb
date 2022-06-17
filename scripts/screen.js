"use strict";

//White screen during de DOM loading.
addEventListener('DOMContentLoaded', screenOut);

function screenOut () {
    body.classList.remove('overFlowHidden');
    backOut.classList.add('screenBack');
};