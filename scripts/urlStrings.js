"use strict";

//This script controls the project section using URLstrings.
//Obtaining variables from the URL

let path = window.location.href;
let pathString;
let pathValues;
let projectValue;
let galleryValue;

//Set values only when path has '?' and '&'
if (path.includes('?') && path.includes('&')) {
    pathString = path.split('?');
    pathValues = pathString[1].split('&');

    projectValue = pathValues[0];
    galleryValue = stringToBool(pathValues[1]);
}

//Array of proyects
const projectNames = ['penJujuy', 'comRivPark', 'olympicVill', 'plaFerCab', 'footballMuseum', 'luroTerminal', 'lacarCoast', 'centenPav', 'jockeyClub', 'acindar', 'ferrocult', 'chanarPark', 'berazcomplex', 'parqPatri', 'educBuild', 'vlHouse', 'svHouse', 'prsBuild', 'ldBuild', 'alsina', 'brdBuild', 'estEco', 'plaColeg', 'argPav', 'salgCoast', 'marqPav'];

let projectIndex = projectNames.indexOf(projectValue);

//Control event
addEventListener('DOMContentLoaded', shareProject);

function shareProject () {
    //Opening gallery
    if (galleryValue == true && projectIndex >= 0) {
        openPhoto(projects[projectIndex]);
    //Opening project description
    } else {
        if (projectIndex < pj__descrip.length / 3 && projectIndex >= 0) {
            let columnArray = [projectIndex, parseInt(projectIndex) + projectNames.length, parseInt(projectIndex) + (2 * projectNames.length)];

            columnArray.forEach(element => {
                if (window.getComputedStyle(pj__box[element]).display != 'none' && window.getComputedStyle(pj__box[element].parentNode).display != 'none') {
                    //auto scroll
                    pj__box[element].scrollIntoView();
                    //Open project only when is on screen
                    OpenWhenOnScreen (element);
                }
            });
        }
    }
}

//Open project only when is on screen
function OpenWhenOnScreen (indexElement) {
    let position_pj = pj__box[indexElement].getAttribute("position");
    console.log(position_pj);
    if (position_pj != "onScreen") {
        setTimeout(OpenWhenOnScreen, 100, indexElement);
    } else {
        setTimeout(open, 800, indexElement);
        clearTimeout(OpenWhenOnScreen);
    }
}

// Parse string to boolean
function stringToBool (string) {
    switch(string.toLowerCase().trim()){
        case "true":
        case "yes":
        case "1":
          return true;

        case "false":
        case "no":
        case "0":
        case null:
          return false;

        default:
          return false;
    }
}