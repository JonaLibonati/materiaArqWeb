"use strict";

//events

for (let i = 0; i < pj__shareCircle.length; ++i) {
    let a = i;
    let b = 0;
    if (a < pj__shareCircle.length / 3) {
        pj__shareCircle[a].addEventListener("click", function(e) {
            shareProject(shareDataArray[a]);
            e.stopPropagation();
        },true);
        pj__shareIcon[a].addEventListener("click", function(e) {
            shareProject(shareDataArray[a]);
            e.stopPropagation();
        },true);
    }
    if (a >= pj__shareCircle.length / 3 && a < pj__descrip.length * 2 / 3) {
        b = a - (pj__shareCircle.length / 3)
        pj__shareCircle[a].addEventListener("click", function(e) {
            shareProject(shareDataArray[b]);
            e.stopPropagation();
        });
        pj__shareIcon[a].addEventListener("click", function(e) {
            shareProject(shareDataArray[b]);
            e.stopPropagation();
        });
    }
    if (a >= pj__shareCircle.length * 2 / 3) {
        b = a - (pj__shareCircle.length * 2 / 3)
        pj__shareCircle[a].addEventListener("click", function(e) {
            shareProject(shareDataArray[b]);
            e.stopPropagation();
        });
        pj__shareIcon[a].addEventListener("click", function(e) {
            shareProject(shareDataArray[b]);
            e.stopPropagation();
        });
    }
}

async function shareProject (shareData) {
    try {
        await navigator.share(shareData);
    } catch(e) {
        console.log(e);
    }
}

//URLs to share
const penJujuyData = {
    title:"materia | ex penintenciaria Jujuy",
    text:"Conocé el proyecto Ex penintenciaria Jujuy",
    url: "https://www.estudiomateria.com.ar/proyectos/penJujuy/index.html"
}
const comRivParkData = {
    title:"materia | parque Comodoro Rivadavia",
    text:"Conocé el proyecto Parque Comodoro Rivadavia",
    url: "https://www.estudiomateria.com.ar/proyectos/comRivadavia/index.html"
}
const olympicVillData = {
    title:"materia | villa olimpica",
    text:"Conocé el proyecto Villa olimpica",
    url:"https://www.estudiomateria.com.ar/proyectos/villaOlimpica/index.html"
}
const plaFerCabData = {
    title:"playa ferroviaria Caballito",
    text:"Conocé el proyecto Playa ferroviaria Caballito",
    url:"https://www.estudiomateria.com.ar/proyectos/playaFerCaballito/index.html"
}
const footballMuseumData = {
    title:"materia | museo del futbol",
    text:"Conocé el proyecto Museo del futbol",
    url:"https://www.estudiomateria.com.ar/proyectos/museoFutbol/index.html"
}
const luroTerminalData = {
    title:"materia | terminal Pedro Luro",
    text:"Conocé el proyecto Terminal Pedro Luro",
    url:"https://www.estudiomateria.com.ar/proyectos/terminalLuro/index.html"
}
const lacarCoastData = {
    title:"materia | costa lago Lacar",
    text:"Conocé el proyecto Costa lago Lacar",
    url:"https://www.estudiomateria.com.ar/proyectos/costaLacar/index.html"
}
const centenPavData = {
    title:"materia | pabellon centenario",
    text:"Conocé el proyecto Pabellon centenario",
    url:"https://www.estudiomateria.com.ar/proyectos/pabCentenario/index.html"
}
const jockeyData = {
    title:"materia | jockey club Córdoba ",
    text:"Conocé el proyecto Jockey Club Córdoba",
    url:"https://www.estudiomateria.com.ar/proyectos/jockeyClub/index.html"
}
const acindarData = {
    title:"materia | acindar",
    text:"Conocé el proyecto Acindar",
    url:"https://www.estudiomateria.com.ar/proyectos/acindar/index.html"
}
const ferrocultData = {
    title:"materia | polo ferrocultural",
    text:"Conocé el proyecto Polo ferrocultural",
    url:"https://www.estudiomateria.com.ar/proyectos/poloFerrocultural/index.html"
}
const chanarParkData = {
    title:"materia | parque San Patricio del Chañar",
    text:"Conocé el proyecto Parque San Patricio del Chañar",
    url:"https://www.estudiomateria.com.ar/proyectos/parqueChanar/index.html"
}
const berazcomplexData = {
    title:"",
    text:"Conocé el proyecto ",
    url:"https://www.estudiomateria.com.ar/proyectos/compBeraza/index.html"
}
const parqPatriData = {
    title:"materia | espacio Parques Patricios",
    text:"Conocé el proyecto Espacio Parques Patricios",
    url:"https://www.estudiomateria.com.ar/proyectos/parquePatricios/index.html"
}
const educBuildData = {
    title:"materia | edificio para la educacion del futuro",
    text:"Conocé el proyecto Edificio para la educacion del futuro",
    url:"https://www.estudiomateria.com.ar/proyectos/edificioEducativo/index.html"
}
const vlHouseData = {
    title:"materia | casa VL",
    text:"Conocé el proyecto Casa VL",
    url:"https://www.estudiomateria.com.ar/proyectos/casaVL/index.html"
}
const svHouseData = {
    title:"materia | casa SV",
    text:"Conocé el proyecto Casa SV",
    url:"https://www.estudiomateria.com.ar/proyectos/casaSV/index.html"
}
const prsBuildData = {
    title:"materia | edificio PRS",
    text:"Conocé el proyecto Edificio PRS",
    url:"https://www.estudiomateria.com.ar/proyectos/edificioPRS/index.html"
}
const ldBuildData = {
    title:"materia | edificio LD",
    text:"Conocé el proyecto Edificio LD",
    url:"https://www.estudiomateria.com.ar/proyectos/edificioLD/index.html"
}
const alsinaData = {
    title:"materia | edificio Alsina",
    text:"Conocé el proyecto Edificio Alsina",
    url:"https://www.estudiomateria.com.ar/proyectos/edificioAlsina/index.html"
}
const brdBuildData = {
    title:"materia | edificio BRD",
    text:"Conocé el proyecto Edificio BRD",
    url:"https://www.estudiomateria.com.ar/proyectos/edificioBRD/index.html"
}
const estEcoData = {
    title:"materia | estacion ecologica",
    text:"Conocé el proyecto Estacion ecologica",
    url:"https://www.estudiomateria.com.ar/proyectos/estacionEco/index.html"
}
const plaColegData = {
    title:"materia | playa ferroviaria Colegiales",
    text:"Conocé el proyecto Playa ferroviaria Colegiales",
    url:"https://www.estudiomateria.com.ar/proyectos/playaFerColegiales/index.html"
}
const argPavData = {
    title:"materia | pabellon argentino",
    text:"Conocé el proyecto Pabellon argentino",
    url:"https://www.estudiomateria.com.ar/proyectos/pabArgentino/index.html"
}
const salgCoastData = {
    title:"materia | Buenos Aires y el rio",
    text:"Conocé el proyecto Buenos Aires y el rio",
    url:"https://www.estudiomateria.com.ar/proyectos/costaSalguero/index.html"
}
const marqPavData = {
    title:"materia | pabellon museo de arquitectura",
    text:"Conocé el proyecto Pabellon museo de arquitectura",
    url:"https://www.estudiomateria.com.ar/proyectos/pabMarq/index.html"
}


const shareDataArray = [penJujuyData, comRivParkData, olympicVillData, plaFerCabData, footballMuseumData, luroTerminalData, lacarCoastData, centenPavData, jockeyData, acindarData, ferrocultData, chanarParkData, berazcomplexData, parqPatriData, educBuildData, vlHouseData, svHouseData, prsBuildData, ldBuildData, alsinaData, brdBuildData, estEcoData, plaColegData, argPavData, salgCoastData, marqPavData];