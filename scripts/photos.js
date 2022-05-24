/**Close Gallery */
ph__close.addEventListener("click", function() {closePhoto()})

function closePhoto () {
    nav.classList.toggle("displayNone");
    ph.classList.toggle("showOpa100");
    ph.classList.toggle("zIndex70");
	body.classList.toggle("overFlowHidden");
	pj.classList.toggle("showOpa0");
	about.classList.toggle("showOpa0");
    ph.setAttribute("status" , "close");
    /**Close Full screen mode*/
    if (document.exitFullscreen) {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        }
    }
    else if (document.webkitExitFullscreen) { /* Safari */
        if (document.webkitFullscreenElement) {
            document.webkitExitFullscreen();
        }
    }
    /**Removing events created in function openPhoto()"*/
    ph__img.removeEventListener("touchstart", touchStart)
    ph__img.removeEventListener("touchmove", touchMove)
    ph__img.removeEventListener("touchend", touchEnd)
    body.removeEventListener("keydown", keyEventPhoto)
}

/**Open Gallery */
let array
let imgFragment = document.createDocumentFragment()
let imgFragmChild = imgFragment.appendChild(document.createElement('DIV'))
imgFragmChild.id = 'imagePreload'

function openPhoto (imgArray) {
    array = imgArray;
    /**Images preload in cache*/
    for (i = 0; i <  array.length; ++i) {
        let img = document.createElement('IMG')
        img.src = imgArray[i]
        if (img.complete == false) {
            img.style.visibility = 'hidden'
            imgFragmChild.appendChild(img)
        }
    }
    if (imgFragmChild.childElementCount != 0) {
        ph.appendChild(imgFragment)
        fragment.replaceChildren(imgFragmChild)
    }
    /**Set first image*/
    ph__img.src = imgArray[0];
    pos = 0;
    /**Full screen mode*/
    if (ph.requestFullscreen) {
        ph.requestFullscreen();
    } 
    else if (ph.webkitRequestFullscreen()) { /* Safari */
        ph.webkitRequestFullscreen();
    }
    /**open photo display*/
    nav.classList.toggle("displayNone");
    ph.classList.toggle("showOpa100");
    ph.classList.toggle("zIndex70");
	body.classList.toggle("overFlowHidden");
	pj.classList.toggle("showOpa0");
	about.classList.toggle("showOpa0");
    ph.setAttribute("status" , "open");
    /**Adding events to create a touch gesture of "next photo" and "previous photo"*/
    ph__img.addEventListener("touchstart", touchStart)
    ph__img.addEventListener("touchmove", touchMove)
    ph__img.addEventListener("touchend", touchEnd)
    /**Adding events to listen a keydown to the gallery control"*/
    body.addEventListener("keydown", keyEventPhoto)
}

/**Actual photo */
let pos = 0;

/**Next photo */
ph__next.addEventListener("click", nextPhoto)

function nextPhoto () {
    if (pos < array.length - 1) {
        pos++; 
    } else {
        pos = 0;
    }
    ph__img.src = array[pos];
}

/**Previus photo */
ph__previous.addEventListener("click", previousPhoto)

function previousPhoto () {
    if (pos > 0) {
        pos--; 
    } else {
        pos = array.length - 1;
    }
    ph__img.src = array[pos];
}

/**Key control photo */
function keyEventPhoto(event) {
    let status = ph.getAttribute("status")
    if (status == "open") {
        let key = event.code
        switch(key) {
            case "ArrowLeft":
                previousPhoto ()
            break;
            case "ArrowRight":
                nextPhoto ()
            break;
            case "ArrowRight":
                nextPhoto ()
            break;
            case "Escape":
                closePhoto ()
            break;
        }
    }
}

/**Touchable slide photo */
let touchStartX = 0
let touchEndX = 0

function touchStart (event) {
    touchStartX = event.touches[0].clientX
}

function touchMove (event) {
    touchEndX = event.touches[0].clientX
}

function touchEnd () {
    let moveX = touchEndX - touchStartX
    if (moveX > 20) {
        previousPhoto (); 
    }
    if (moveX < -20) {
        nextPhoto (); 
    }
}

/** Photo button events */
for (i = 0; i <  pj__descrip.length; ++i) {	
	let a = i
    let b = 0
    if (a <= 23) {
        pj__buttonPhoto [a].addEventListener("click", function() {openPhoto(projects[a])})
    }
    if (a > 23 && a <= 47) {
        b = a - (pj__descrip.length / 3)
        pj__buttonPhoto [a].addEventListener("click", function() {openPhoto(projects[(b)])})
    }
    if (a > 47) {
        b = a - (pj__descrip.length * 2 / 3)
        pj__buttonPhoto [a].addEventListener("click", function() {openPhoto(projects[(b)])})
    }
}

/**Penintenciaria Jujuy Images Arrays */

const penJujuy0 = "images/ex-pen-jujuy/ex-pen-jujuy-floor01.jpg";
const penJujuy1 = "images/ex-pen-jujuy/ex-pen-jujuy-floor02.jpg";
const penJujuy2 = "images/ex-pen-jujuy/ex-pen-jujuy-floor.jpg";
const penJujuy3 = "images/ex-pen-jujuy/ex-pen-jujuy-aerialView05.jpg";
const penJujuy4 = "images/ex-pen-jujuy/ex-pen-jujuy-aerialView.jpg";
const penJujuy5 = "images/ex-pen-jujuy/ex-pen-jujuy-aerialView02.jpg";
const penJujuy6 = "images/ex-pen-jujuy/ex-pen-jujuy-aerialView04.jpg";
const penJujuy7 = "images/ex-pen-jujuy/ex-pen-jujuy-aerialView01.jpg";
const penJujuy8 = "images/ex-pen-jujuy/ex-pen-jujuy-walkView04.jpg";
const penJujuy9 = "images/ex-pen-jujuy/ex-pen-jujuy-walkView02.jpg";
const penJujuy10 = "images/ex-pen-jujuy/ex-pen-jujuy-walkView03.jpg";
const penJujuy11 = "images/ex-pen-jujuy/ex-pen-jujuy-walkView01.jpg";
const penJujuy12 = "images/ex-pen-jujuy/ex-pen-jujuy-walkView.jpg";

const penJujuy = [penJujuy0, penJujuy1, penJujuy2, penJujuy3, penJujuy4, penJujuy5, penJujuy6, penJujuy7, penJujuy8, penJujuy9, penJujuy10, penJujuy11, penJujuy12]

/**Comodoro Rivadavia Images Arrays */
const comRivPark0 = "images/com-riv-park/com-riv-aerialview01.jpg"
const comRivPark1 = "images/com-riv-park/com-riv-aerialview02.jpg"
const comRivPark2 = "images/com-riv-park/com-riv-floor01.jpg"
const comRivPark3 = "images/com-riv-park/com-riv-floor02.jpg"
const comRivPark4 = "images/com-riv-park/com-riv-walkView02.jpg"
const comRivPark5 = "images/com-riv-park/com-riv-walkView05.jpg"
const comRivPark6 = "images/com-riv-park/com-riv-walkView04.jpg"
const comRivPark7 = "images/com-riv-park/com-riv-walkView06.jpg"
const comRivPark8 = "images/com-riv-park/com-riv-walkView03.jpg"
const comRivPark9 = "images/com-riv-park/com-riv-walkView01.jpg"
const comRivPark10 = "images/com-riv-park/com-riv-access.jpg"
const comRivPark11 = "images/com-riv-park/com-riv-detail.jpg"
const comRivPark12 = "images/com-riv-park/com-riv-walkView07.jpg"
const comRivPark13 = "images/com-riv-park/com-riv-walkView08.jpg"

const comRivPark = [comRivPark0, comRivPark1, comRivPark2, comRivPark3, comRivPark4, comRivPark5, comRivPark6, comRivPark7, comRivPark8, comRivPark9, comRivPark10, comRivPark11, comRivPark12, comRivPark13]

/**Playa ferroviaria Caballito Images Arrays */
const plaFerCab0 = "images/playa-caballito/01-caballito-aerialView01.jpg"
const plaFerCab1 = "images/playa-caballito/02-caballito-aerialView02.jpg"
const plaFerCab2 = "images/playa-caballito/03-caballito-aerialView03.jpg"
const plaFerCab3 = "images/playa-caballito/12-caballito-aerialView05.jpg"
const plaFerCab4 = "images/playa-caballito/04-caballito-aerialView04.jpg"
const plaFerCab5 = "images/playa-caballito/06-caballito-walkView01.jpg"
const plaFerCab6 = "images/playa-caballito/09-caballito-walkView04.jpg"
const plaFerCab7 = "images/playa-caballito/10-caballito-walkView05.jpg"
const plaFerCab8 = "images/playa-caballito/11-caballito-walkView06.jpg"
const plaFerCab9 = "images/playa-caballito/07-caballito-walkView02.jpg"
const plaFerCab10 = "images/playa-caballito/08-caballito-walkView03.jpg"

const plaFerCab = [plaFerCab0, plaFerCab1, plaFerCab2, plaFerCab3, plaFerCab4, plaFerCab5, plaFerCab6, plaFerCab7, plaFerCab8, plaFerCab9, plaFerCab10]

/**Olympic village Images Arrays */
const olympicVill0 = "images/olimpic-village/olympic-walkView01.jpg"
const olympicVill1 = "images/olimpic-village/olympic-walkView03.jpg"
const olympicVill2 = "images/olimpic-village/olympic-walkView02.jpg"
const olympicVill3 = "images/olimpic-village/olympic-walkView07.jpg"
const olympicVill4 = "images/olimpic-village/olympic-walkView05.jpg"
const olympicVill5 = "images/olimpic-village/olympic-walkView06.jpg"
const olympicVill6 = "images/olimpic-village/olympic-walkView04.jpg"
const olympicVill7 = "images/olimpic-village/olympic-walkView08.jpg"
const olympicVill8 = "images/olimpic-village/olympic-walkView14.jpg"
const olympicVill9 = "images/olimpic-village/olympic-walkView09.jpg"
const olympicVill10 = "images/olimpic-village/olympic-walkView10.jpg"
const olympicVill11 = "images/olimpic-village/olympic-walkView11.jpg"
const olympicVill12 = "images/olimpic-village/olympic-walkView12.jpg"
const olympicVill13 = "images/olimpic-village/olympic-walkView13.jpg"

const olympicVill = [olympicVill0, olympicVill1, olympicVill2, olympicVill3, olympicVill4, olympicVill5, olympicVill6, olympicVill7, olympicVill8, olympicVill9, olympicVill10, olympicVill11, olympicVill12, olympicVill13]

/** Lacar coast Images Arrays */
const lacarCoast0 = "images/lago-lacar-coast/lacar-aerialView01.jpg"
const lacarCoast1 = "images/lago-lacar-coast/lacar-aerialView05.jpg"
const lacarCoast2 = "images/lago-lacar-coast/lacar-aerialView06.jpg"
const lacarCoast3 = "images/lago-lacar-coast/lacar-aerialView02.jpg"
const lacarCoast4 = "images/lago-lacar-coast/lacar-aerialView07.jpg"
const lacarCoast5 = "images/lago-lacar-coast/lacar-aerialView08.jpg"
const lacarCoast6 = "images/lago-lacar-coast/lacar-aerialView03.jpg"
const lacarCoast7 = "images/lago-lacar-coast/lacar-aerialView09.jpg"
const lacarCoast8 = "images/lago-lacar-coast/lacar-aerialView04.jpg"
const lacarCoast9 = "images/lago-lacar-coast/lacar-walkView01.jpg"
const lacarCoast10 = "images/lago-lacar-coast/lacar-walkView02.jpg"
const lacarCoast11 = "images/lago-lacar-coast/lacar-walkView04.jpg"
const lacarCoast12 = "images/lago-lacar-coast/lacar-walkView03.jpg"
const lacarCoast13 = "images/lago-lacar-coast/lacar-walkView06.jpg"
const lacarCoast14 = "images/lago-lacar-coast/lacar-walkView07.jpg"
const lacarCoast15 = "images/lago-lacar-coast/lacar-walkView05.jpg"
const lacarCoast16 = "images/lago-lacar-coast/lacar-floor.jpg"
const lacarCoast17 = "images/lago-lacar-coast/lacar-detail.jpg"

const lacarCoast = [lacarCoast0, lacarCoast1, lacarCoast2, lacarCoast3, lacarCoast4, lacarCoast5, lacarCoast6, lacarCoast7, lacarCoast8, lacarCoast9, lacarCoast10, lacarCoast11, lacarCoast12, lacarCoast13, lacarCoast14, lacarCoast15, lacarCoast16, lacarCoast17]

/**Centenario pavilion Images Arrays */
const centenPav0 = "images/centenario-pavilion/01-cent-pv-aerialView01.jpg"
const centenPav1 = "images/centenario-pavilion/04-cent-pv-aerialView04.jpg"
const centenPav2 = "images/centenario-pavilion/02-cent-pv-aerialView02.jpg"
const centenPav3 = "images/centenario-pavilion/03-cent-pv-aerialView03.jpg"
const centenPav4 = "images/centenario-pavilion/05-cent-pv-aerialView05.jpg"
const centenPav5 = "images/centenario-pavilion/08-cent-pv-walkView02.jpg"
const centenPav6 = "images/centenario-pavilion/10-cent-pv-walkView04.jpg"
const centenPav7 = "images/centenario-pavilion/09-cent-pv-walkView03.jpg"
const centenPav8 = "images/centenario-pavilion/06-cent-pv-detail.jpg"
const centenPav9 = "images/centenario-pavilion/07-cent-pv-walkView01.jpg"

const centenPav = [centenPav0, centenPav1, centenPav2, centenPav3, centenPav4, centenPav5, centenPav6, centenPav7, centenPav8, centenPav9]

/**Acindar Images Arrays */
const acindar0 = "images/acindar/acindar-aerialview01.jpg"
const acindar1 = "images/acindar/acindar-aerialview02.jpg"
const acindar2 = "images/acindar/acindar-walkView06.jpg"
const acindar3 = "images/acindar/acindar-walkView2.jpg"
const acindar4 = "images/acindar/acindar-walkView03.jpg"
const acindar5 = "images/acindar/acindar-walkView01.jpg"
const acindar6 = "images/acindar/acindar-walkView04.jpg"
const acindar7 = "images/acindar/acindar-floor02.jpg"
const acindar8 = "images/acindar/acindar-floor01.jpg"
const acindar9 = "images/acindar/acindar-detail.jpg"

const acindar = [acindar0, acindar1, acindar2, acindar3, acindar4, acindar5, acindar6, acindar7, acindar8, acindar9]

/** Chanar park Images Arrays */
const chanarPark0 = "images/san-patricio-park/san-patricio-aerialView01.jpg"
const chanarPark1 = "images/san-patricio-park/san-patricio-walkView04.jpg"
const chanarPark2 = "images/san-patricio-park/san-patricio-walkView07.jpg"
const chanarPark3 = "images/san-patricio-park/san-patricio-walkView03.jpg"
const chanarPark4 = "images/san-patricio-park/san-patricio-walkView01.jpg"
const chanarPark5 = "images/san-patricio-park/san-patricio-walkView05.jpg"
const chanarPark6 = "images/san-patricio-park/san-patricio-walkView06.jpg"
const chanarPark7 = "images/san-patricio-park/san-patricio-walkView08.jpg"
const chanarPark8 = "images/san-patricio-park/san-patricio-walkView02.jpg"
const chanarPark9 = "images/san-patricio-park/san-patricio-floor01.jpg"
const chanarPark10 = "images/san-patricio-park/san-patricio-floor02.jpg"

const chanarPark = [chanarPark0, chanarPark1, chanarPark2, chanarPark3, chanarPark4, chanarPark5, chanarPark6, chanarPark7, chanarPark8, chanarPark9, chanarPark10]

/**Education building Images Arrays */
const educBuild0 = "images/educ-fut-building/01-educ-fut-walkView01.jpg"
const educBuild1 = "images/educ-fut-building/03-educ-fut-walkView03.jpg"
const educBuild2 = "images/educ-fut-building/04-educ-fut-aerialView01.jpg"
const educBuild3 = "images/educ-fut-building/02-educ-fut-walkView02.jpg"
const educBuild4 = "images/educ-fut-building/05-educ-fut-walkView04.jpg"
const educBuild5 = "images/educ-fut-building/06-educ-fut-walkView05.jpg"
const educBuild6 = "images/educ-fut-building/07-educ-fut-walkView06.jpg"
const educBuild7 = "images/educ-fut-building/08-educ-fut-walkView07.jpg"
const educBuild8 = "images/educ-fut-building/09-educ-fut-detail.jpg"

const educBuild = [educBuild0, educBuild1, educBuild2, educBuild3, educBuild4, educBuild5, educBuild6, educBuild7, educBuild8]

/**VL house Images Arrays */
const vlHouse0 = "images/VL-house/vl-outSide01.jpg"
const vlHouse1 = "images/VL-house/vl-outSide02.jpg"
const vlHouse2 = "images/VL-house/vl-outSide03.jpg"
const vlHouse3 = "images/VL-house/vl-outSide04.jpg"
const vlHouse4 = "images/VL-house/vl-outSide05.jpg"
const vlHouse5 = "images/VL-house/vl-outSide06.jpg"
const vlHouse6 = "images/VL-house/vl-outSide07.jpg"
const vlHouse7 = "images/VL-house/vl-outSide08.jpg"
const vlHouse8 = "images/VL-house/vl-outSide09.jpg"
const vlHouse9 = "images/VL-house/vl-outSide10.jpg"
const vlHouse10 = "images/VL-house/vl-outSide11.jpg"
const vlHouse11 = "images/VL-house/vl-inSide01.jpg"
const vlHouse12 = "images/VL-house/vl-inSide02.jpg"
const vlHouse13 = "images/VL-house/vl-stair01.jpg"
const vlHouse14 = "images/VL-house/vl-stair02.jpg"


const vlHouse = [vlHouse0, vlHouse1, vlHouse2, vlHouse3, vlHouse4, vlHouse5, vlHouse6, vlHouse7, vlHouse8, vlHouse9, vlHouse10, vlHouse11, vlHouse12, vlHouse13, vlHouse14]

/**Playa Colegiales Images Arrays */
const plaColeg0 = "images/playa-colegiales/00-colegiales-aerialView00.jpg"
const plaColeg1 = "images/playa-colegiales/01-colegiales-aerialView01.jpg"
const plaColeg2 = "images/playa-colegiales/02-colegiales-floor01.jpg"
const plaColeg3 = "images/playa-colegiales/03-colegiales-floor03.jpg"
const plaColeg4 = "images/playa-colegiales/04-colegiales-aerialView02.jpg"
const plaColeg5 = "images/playa-colegiales/05-colegiales-walkView01.jpg"
const plaColeg6 = "images/playa-colegiales/06-colegiales-walkView02.jpg"
const plaColeg7 = "images/playa-colegiales/07-colegiales-walkView03.jpg"
const plaColeg8 = "images/playa-colegiales/08-colegiales-walkView04.jpg"
const plaColeg9 = "images/playa-colegiales/09-colegiales-walkView05.jpg"
const plaColeg10 = "images/playa-colegiales/10-colegiales-walkView06.jpg"
const plaColeg11 = "images/playa-colegiales/11-colegiales-walkView07.jpg"
const plaColeg12 = "images/playa-colegiales/12-colegiales-walkView08.jpg"
const plaColeg13 = "images/playa-colegiales/13-colegiales-aerialView03.jpg"
const plaColeg14 = "images/playa-colegiales/14-colegiales-aerialView04.jpg"
const plaColeg15 = "images/playa-colegiales/15-colegiales-aerialView05.jpg"
const plaColeg16 = "images/playa-colegiales/16-colegiales-aerialView06.jpg"

const plaColeg = [plaColeg0, plaColeg1, plaColeg2, plaColeg3, plaColeg4, plaColeg5, plaColeg6, plaColeg7, plaColeg8, plaColeg9, plaColeg10, plaColeg11, plaColeg12, plaColeg13, plaColeg14, plaColeg15]

/**Complejo teatral Berazategui Images Arrays */
const berazcomplex0 = "images/ber-teatral-complex/01-ber-teatral-walkView01.jpg"
const berazcomplex1 = "images/ber-teatral-complex/02-ber-teatral-aerialView01.jpg"
const berazcomplex2 = "images/ber-teatral-complex/03-ber-teatral-walkView02.jpg"
const berazcomplex3 = "images/ber-teatral-complex/06-ber-teatral-walkView04.jpg"
const berazcomplex4 = "images/ber-teatral-complex/07-ber-teatral-walkView05.jpg"
const berazcomplex5 = "images/ber-teatral-complex/05-ber-teatral-walkView03.jpg"
const berazcomplex6 = "images/ber-teatral-complex/08-ber-teatral-walkView06.jpg"
const berazcomplex7 = "images/ber-teatral-complex/04-ber-teatral-detail01.jpg"
const berazcomplex8 = "images/ber-teatral-complex/09-ber-teatral-floor.jpg"
const berazcomplex9 = "images/ber-teatral-complex/10-ber-teatral-detail02.jpg"

const berazcomplex = [berazcomplex0, berazcomplex1, berazcomplex2, berazcomplex3, berazcomplex4, berazcomplex5, berazcomplex6, berazcomplex7, berazcomplex8,berazcomplex9]

/**Argentina pavilion Images Arrays */
const argPav0 = "images/arg-pavilion/arf-pav-08.jpg"
const argPav1 = "images/arg-pavilion/arf-pav-01.jpg" 
const argPav2 = "images/arg-pavilion/arf-pav-02.jpg"
const argPav3 = "images/arg-pavilion/arf-pav-03.jpg"
const argPav4 = "images/arg-pavilion/arf-pav-04.jpg"
const argPav5 = "images/arg-pavilion/arf-pav-07.jpg"
const argPav6 = "images/arg-pavilion/arf-pav-05.jpg"
const argPav7 = "images/arg-pavilion/arf-pav-06.jpg"
const argPav8 = "images/arg-pavilion/arf-pav-09.jpg"
const argPav9 = "images/arg-pavilion/arf-pav-10.jpg"
const argPav10 = "images/arg-pavilion/arf-pav-11.jpg"
const argPav11 = "images/arg-pavilion/arf-pav-13.jpg"
const argPav12 = "images/arg-pavilion/arf-pav-12.jpg"

const argPav = [argPav0, argPav1, argPav2, argPav3, argPav4, argPav5, argPav6, argPav7, argPav8, argPav9, argPav10, argPav11, argPav12]

/**Costa Salgero Images Arrays */
const salgCoast0 = "images/costa-salguero/01-cos-salg-aerialView01.jpg"
const salgCoast1 = "images/costa-salguero/02-cos-salg-aerialView02.jpg"
const salgCoast2 = "images/costa-salguero/03-cos-salg-aerialView03.jpg"
const salgCoast3 = "images/costa-salguero/04-cos-salg-aerialView04.jpg"
const salgCoast4 = "images/costa-salguero/05-cos-salg-walkView01.jpg"
const salgCoast5 = "images/costa-salguero/06-cos-salg-walkView02.jpg"
const salgCoast6 = "images/costa-salguero/07-cos-salg-walkView03.jpg"
const salgCoast7 = "images/costa-salguero/08-cos-salg-walkView04.jpg"
const salgCoast8 = "images/costa-salguero/09-cos-salg-walkView05.jpg"
const salgCoast9 = "images/costa-salguero/10-cos-salg-walkView06.jpg"

const salgCoast = [salgCoast0, salgCoast1, salgCoast2, salgCoast3, salgCoast4, salgCoast5, salgCoast6, salgCoast7, salgCoast8, salgCoast9]

/**Espacio cultural parque patricios Images Arrays */
const parqPatri0 = "images/parque-patricios/01-patricios-walkView01.jpg"
const parqPatri1 = "images/parque-patricios/02-patricios-floor01.jpg"
const parqPatri2 = "images/parque-patricios/03-patricios-detail.jpg"
const parqPatri3 = "images/parque-patricios/04-patricios-floor02.jpg"

const parqPatri = [parqPatri0, parqPatri1, parqPatri2, parqPatri3]

/**Marq pavilio Images Arrays */
const marqPav0= "images/marq-pavilion/01-marq-pv-walkView01.jpg"
const marqPav1 = "images/marq-pavilion/02-marq-pv-walkView02.jpg"
const marqPav2 = "images/marq-pavilion/03-marq-pv-walkView03.jpg"
const marqPav3 = "images/marq-pavilion/04-marq-pv-walkView04.jpg"
const marqPav4 = "images/marq-pavilion/05-marq-pv-walkView05.jpg"
const marqPav5 = "images/marq-pavilion/06-marq-pv-walkView06.jpg"
const marqPav6 = "images/marq-pavilion/07-marq-pv-floor01.jpg"
const marqPav7 = "images/marq-pavilion/08-marq-pv-floor02.jpg"
const marqPav8 = "images/marq-pavilion/09-marq-pv-floor03.jpg"
const marqPav9 = "images/marq-pavilion/10-marq-pv-detail01.jpg"
const marqPav10 = "images/marq-pavilion/11-marq-pv-detail02.jpg"

const marqPav = [marqPav0, marqPav1, marqPav2, marqPav3, marqPav4, marqPav5, marqPav6, marqPav7, marqPav8, marqPav9, marqPav10]

/**Gas estation Images Arrays */
const estEco0 = "images/gas-station/01-gas-walkView01.jpg"
const estEco1 = "images/gas-station/02-gas-walkView02.jpg"
const estEco2 = "images/gas-station/03-gas-walkView03.jpg"
const estEco3 = "images/gas-station/07-gas-detal02.jpg"
const estEco4 = "images/gas-station/06-gas-detal01.jpg"
const estEco5 = "images/gas-station/04-gas-floor01.jpg"
const estEco6 = "images/gas-station/05-gas-floor02.jpg"

const estEco = [estEco0, estEco1, estEco2, estEco3, estEco4, estEco5, estEco6]

/**Alsina building Images Arrays */
const alsina0 = "images/alsina-building/01-alsina-outSide01.jpg"
const alsina1 = "images/alsina-building/02-alsina-outSide02.jpg"
const alsina2 = "images/alsina-building/03-alsina-outSide03.jpg"
const alsina3 = "images/alsina-building/04-alsina-inSide01.jpg"
const alsina4 = "images/alsina-building/05-alsina-inSide02.jpg"
const alsina5 = "images/alsina-building/06-alsina-outSide04.jpg"
const alsina6 = "images/alsina-building/07-alsina-detail.jpg"

const alsina = [alsina0, alsina1, alsina2, alsina3, alsina4, alsina5, alsina6]

/**PRS building Images Arrays */
const prsBuild0 = "images/PRS-building/01-prs-outSide01.jpg"
const prsBuild1 = "images/PRS-building/02-prs-inSide01.jpg"
const prsBuild2 = "images/PRS-building/03-prs-inSide02.jpg"
const prsBuild3 = "images/PRS-building/04-prs-detail.jpg"

const prsBuild = [prsBuild0, prsBuild1, prsBuild2, prsBuild3]

/**LD bulding Images Arrays */
const ldBuild0 = "images/LD-building/01-ld-outSide01.jpg"
const ldBuild1 = "images/LD-building/02-ld-inSide01.jpg"
const ldBuild2 = "images/LD-building/03-ld-inSide02.jpg"
const ldBuild3 = "images/LD-building/04-ld-inSide03.jpg"
const ldBuild4 = "images/LD-building/05-ld-detail.jpg"

const ldBuild = [ldBuild0, ldBuild1, ldBuild2, ldBuild3, ldBuild4]

/**SV house Images Arrays */
const svHouse0 = "images/SV-house/01-csv-view01.jpg"
const svHouse1 = "images/SV-house/02-csv-view02.jpg"
const svHouse2 = "images/SV-house/03-csv-view03.jpg"
const svHouse3 = "images/SV-house/04-csv-view04.jpg"
const svHouse4 = "images/SV-house/05-csv-view05.jpg"
const svHouse5 = "images/SV-house/08-csv-detail01.jpg"
const svHouse6 = "images/SV-house/09-csv-detail02.jpg"
const svHouse7 = "images/SV-house/10-csv-detail03.jpg"
const svHouse8 = "images/SV-house/06-csv-floor01.jpg"
const svHouse9 = "images/SV-house/07-csv-floor02.jpg"

const svHouse = [svHouse0, svHouse1, svHouse2, svHouse3, svHouse4, svHouse5, svHouse6, svHouse7, svHouse8, svHouse9]

/**Football museum Images Arrays */
const footballMuseum0 = "images/football-museum/football-museum-aerialView01.jpg"
const footballMuseum1 = "images/football-museum/football-museum-aerialView02.jpg"
const footballMuseum2 = "images/football-museum/football-museum-aerialView04.jpg"
const footballMuseum3 = "images/football-museum/football-museum-aerialView05.jpg"
const footballMuseum4 = "images/football-museum/football-museum-aerialView03.jpg"
const footballMuseum5 = "images/football-museum/football-museum-walkView09.jpg"
const footballMuseum6 = "images/football-museum/football-museum-walkView04.jpg"
const footballMuseum7 = "images/football-museum/football-museum-walkView05.jpg"
const footballMuseum8 = "images/football-museum/football-museum-walkView06.jpg"
const footballMuseum9 = "images/football-museum/football-museum-walkView03.jpg"
const footballMuseum10 = "images/football-museum/football-museum-walkView08.jpg"
const footballMuseum11 = "images/football-museum/football-museum-walkView01.jpg"
const footballMuseum12 = "images/football-museum/football-museum-walkView07.jpg"
const footballMuseum13 = "images/football-museum/football-museum-walkView02.jpg"
const footballMuseum14 = "images/football-museum/football-museum-walkView10.jpg"

const footballMuseum = [footballMuseum0, footballMuseum1, footballMuseum2, footballMuseum3, footballMuseum4, footballMuseum5, footballMuseum6, footballMuseum7, footballMuseum8, footballMuseum9, footballMuseum10, footballMuseum11, footballMuseum12, footballMuseum13, footballMuseum14]

/**Luro terminal Images Arrays */
const luroTerminal0 = "images/luro-terminal/luro-terminal-aerialView02.jpg"
const luroTerminal1 = "images/luro-terminal/luro-terminal-aerialView01.jpg"
const luroTerminal2 = "images/luro-terminal/luro-terminal-walkView01.jpg"
const luroTerminal3 = "images/luro-terminal/luro-terminal-walkView02.jpg"
const luroTerminal4 = "images/luro-terminal/luro-terminal-walkView03.jpg"
const luroTerminal5 = "images/luro-terminal/luro-terminal-walkView04.jpg"
const luroTerminal6 = "images/luro-terminal/luro-terminal-walkView05.jpg"
const luroTerminal7 = "images/luro-terminal/luro-terminal-walkView06.jpg"
const luroTerminal8 = "images/luro-terminal/luro-terminal-walkView07.jpg"
const luroTerminal9 = "images/luro-terminal/luro-terminal-walkView08.jpg"

const luroTerminal = [luroTerminal0, luroTerminal1, luroTerminal2, luroTerminal3, luroTerminal4, luroTerminal5, luroTerminal6, luroTerminal7, luroTerminal8, luroTerminal9]

/**BRD building Images Arrays */
const brdBuild0 = "images/BRD-building/brd-outSide01.jpg"
const brdBuild1 = "images/BRD-building/brd-inSide02.jpg"
const brdBuild2 = "images/BRD-building/brd-inSide01.jpg"
const brdBuild3 = "images/BRD-building/brd-outSide02.jpg"

const brdBuild = [brdBuild0, brdBuild1, brdBuild2, brdBuild3]

/**Array of proyects*/
const projects = [penJujuy, comRivPark, olympicVill, plaFerCab, footballMuseum, luroTerminal, lacarCoast, centenPav, acindar, chanarPark, berazcomplex, parqPatri, educBuild, vlHouse, svHouse, prsBuild, ldBuild, alsina, brdBuild, estEco, plaColeg, argPav, salgCoast, marqPav]