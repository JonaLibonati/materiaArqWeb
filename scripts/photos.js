/**Close Gallery */
ph__close.addEventListener("click", function() {closePhoto()})

function closePhoto () {
    nav.classList.toggle("displayNone");
    ph.classList.toggle("showOpa100");
    ph.classList.toggle("zIndex70");
	body.classList.toggle("overFlowHidden");
	pj.classList.toggle("showOpa0");
	about.classList.toggle("showOpa0");
    ph__img.getAttributeNode("src").value = "";
}

/**Open Gallery */
pj__buttonPhoto [0].addEventListener("click", function() {openPhoto(penJujuy)})
pj__buttonPhoto [1].addEventListener("click", function() {openPhoto(comRivPark)})
pj__buttonPhoto [2].addEventListener("click", function() {openPhoto(plaFerCab)})
pj__buttonPhoto [3].addEventListener("click", function() {openPhoto(olympicVill)})
pj__buttonPhoto [4].addEventListener("click", function() {openPhoto(lacarCoast)})
pj__buttonPhoto [5].addEventListener("click", function() {openPhoto(centenPav)})
pj__buttonPhoto [6].addEventListener("click", function() {openPhoto(acindar)})
pj__buttonPhoto [7].addEventListener("click", function() {openPhoto(chanarPark)})
pj__buttonPhoto [8].addEventListener("click", function() {openPhoto(educBuild)})
pj__buttonPhoto [9].addEventListener("click", function() {openPhoto(vlHouse)})
pj__buttonPhoto [10].addEventListener("click", function() {openPhoto(plaColeg)})
pj__buttonPhoto [11].addEventListener("click", function() {openPhoto(berazcomplex)})
pj__buttonPhoto [12].addEventListener("click", function() {openPhoto(argPav)})
pj__buttonPhoto [13].addEventListener("click", function() {openPhoto(salgCoast)})
pj__buttonPhoto [14].addEventListener("click", function() {openPhoto(parqPatri)})
pj__buttonPhoto [15].addEventListener("click", function() {openPhoto(marqPav)})
pj__buttonPhoto [16].addEventListener("click", function() {openPhoto(estEco)})
pj__buttonPhoto [17].addEventListener("click", function() {openPhoto(alsina)})
pj__buttonPhoto [18].addEventListener("click", function() {openPhoto(prsBuild)})
pj__buttonPhoto [19].addEventListener("click", function() {openPhoto(ldBuild)})
pj__buttonPhoto [20].addEventListener("click", function() {openPhoto(svHouse)})

let array = [];

function openPhoto (imgArray) {
    array = imgArray;
    nav.classList.toggle("displayNone");
    ph.classList.toggle("showOpa100");
    ph.classList.toggle("zIndex70");
	body.classList.toggle("overFlowHidden");
	pj.classList.toggle("showOpa0");
	about.classList.toggle("showOpa0");
    ph__img.getAttributeNode("src").value = imgArray[0];
    pos = 0;
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
    ph__img.getAttributeNode("src").value = array[pos];
}
/**Previus photo */
ph__previous.addEventListener("click", previousPhoto)

function previousPhoto () {
    if (pos > 0) {
        pos--; 
    } else {
        pos = array.length - 1;
    }
    ph__img.getAttributeNode("src").value = array[pos];
}

/**Penintenciaria Jujuy Images Arrays */
const penJujuy0 = "images/ex-pen-jujuy/ex-pen-jujuy-aerialView.jpg";
const penJujuy1 = "images/ex-pen-jujuy/ex-pen-jujuy-aerialView01.jpg";
const penJujuy2 = "images/ex-pen-jujuy/ex-pen-jujuy-aerialView02.jpg";
const penJujuy3 = "images/ex-pen-jujuy/ex-pen-jujuy-aerialView04.jpg";
const penJujuy4 = "images/ex-pen-jujuy/ex-pen-jujuy-aerialView05.jpg";
const penJujuy5 = "images/ex-pen-jujuy/ex-pen-jujuy-walkView.jpg";
const penJujuy6 = "images/ex-pen-jujuy/ex-pen-jujuy-walkView01.jpg";
const penJujuy7 = "images/ex-pen-jujuy/ex-pen-jujuy-walkView02.jpg";
const penJujuy8 = "images/ex-pen-jujuy/ex-pen-jujuy-walkView03.jpg";
const penJujuy9 = "images/ex-pen-jujuy/ex-pen-jujuy-walkView04.jpg";
const penJujuy10 = "images/ex-pen-jujuy/ex-pen-jujuy-floor.jpg";
const penJujuy11 = "images/ex-pen-jujuy/ex-pen-jujuy-floor01.jpg";
const penJujuy12 = "images/ex-pen-jujuy/ex-pen-jujuy-floor02.jpg";

const penJujuy = [penJujuy0, penJujuy1, penJujuy2, penJujuy3, penJujuy4, penJujuy5, penJujuy6, penJujuy7, penJujuy8, penJujuy9, penJujuy10, penJujuy11, penJujuy12]

/**Comodoro Rivadavia Images Arrays */
const comRivPark0 = "images/com-riv-park/com-riv-aerialview01.jpg"
const comRivPark1 = "images/com-riv-park/com-riv-aerialview02.jpg"
const comRivPark2 = "images/com-riv-park/com-riv-floor01.jpg"
const comRivPark3 = "images/com-riv-park/com-riv-floor02.jpg"
const comRivPark4 = "images/com-riv-park/com-riv-access.jpg"
const comRivPark5 = "images/com-riv-park/com-riv-walkView01.jpg"
const comRivPark6 = "images/com-riv-park/com-riv-walkView02.jpg"
const comRivPark7 = "images/com-riv-park/com-riv-walkView03.jpg"
const comRivPark8 = "images/com-riv-park/com-riv-walkView04.jpg"
const comRivPark9 = "images/com-riv-park/com-riv-walkView05.jpg"
const comRivPark10 = "images/com-riv-park/com-riv-walkView06.jpg"
const comRivPark11 = "images/com-riv-park/com-riv-walkView07.jpg"
const comRivPark12 = "images/com-riv-park/com-riv-walkView08.jpg"
const comRivPark13 = "images/com-riv-park/com-riv-detail.jpg"

const comRivPark = [comRivPark0, comRivPark1, comRivPark2, comRivPark3, comRivPark4, comRivPark5, comRivPark6, comRivPark7, comRivPark8, comRivPark9, comRivPark10, comRivPark11, comRivPark12, comRivPark13]

/**Playa ferroviaria Caballito Images Arrays */
const plaFerCab0 = "images/playa-caballito/04-caballito-aerialView04.jpg"
const plaFerCab1 = "images/playa-caballito/03-caballito-aerialView03.jpg"
const plaFerCab2 = "images/playa-caballito/06-caballito-walkView01.jpg"
const plaFerCab3 = "images/playa-caballito/07-caballito-walkView02.jpg"
const plaFerCab4 = "images/playa-caballito/08-caballito-walkView03.jpg"
const plaFerCab5 = "images/playa-caballito/09-caballito-walkView04.jpg"
const plaFerCab6 = "images/playa-caballito/10-caballito-walkView05.jpg"
const plaFerCab7 = "images/playa-caballito/11-caballito-walkView06.jpg"
const plaFerCab8 = "images/playa-caballito/12-caballito-aerialView05.jpg"
const plaFerCab9 = "images/playa-caballito/02-caballito-aerialView02.jpg"
const plaFerCab10 = "images/playa-caballito/01-caballito-aerialView01.jpg"

const plaFerCab = [plaFerCab0, plaFerCab1, plaFerCab2, plaFerCab3, plaFerCab4, plaFerCab5, plaFerCab6, plaFerCab7, plaFerCab8, plaFerCab9, plaFerCab10]
/**Olympic village Images Arrays */
const olympicVill = []
/** Lacar coast Images Arrays */
const lacarCoast = []
/**Centenario pavilion Images Arrays */
const centenPav = []
/**Acindar Images Arrays */
const acindar = []
/** Chanar park Images Arrays */
const chanarPark = []
/**Education building Images Arrays */
const educBuild = []
/**VL house Images Arrays */
const vlHouse = []
/**Playa Colegiales Images Arrays */
const plaColeg = []
/** Images Arrays */
const berazcomplex = []
/**Argentina pavilion Images Arrays */
const argPav = []
/**Costa Salgero Images Arrays */
const salgCoast = []
/**Espacio cultural parque patricios Images Arrays */
const parqPatri = []
/**Marq pavilio Images Arrays */
const marqPav = []
/**Gas estation Images Arrays */
const estEco = []
/**Alsina building Images Arrays */
const alsina = []
/**PRS building Images Arrays */
const prsBuild = []
/**LD bulding Images Arrays */
const ldBuild = []
/**SV house Images Arrays */
const svHouse = []


