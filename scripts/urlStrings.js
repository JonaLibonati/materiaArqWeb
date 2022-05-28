//This script controls the project section using URLstrings. 
//Obtaining variables from the URL

let path = window.location.href
let pathString = path.split('?')
let pathValues = pathString[1].split('&')

let projectValue = pathValues[0]
let galleryValue = stringToBool(pathValues[1])

//Array of proyects
const projectNames = ['penJujuy', 'comRivPark', 'olympicVill', 'plaFerCab', 'footballMuseum', 'luroTerminal', 'lacarCoast', 'centenPav', 'acindar', 'ferrocult', 'chanarPark', 'berazcomplex', 'parqPatri', 'educBuild', 'vlHouse', 'svHouse', 'prsBuild', 'ldBuild', 'alsina', 'brdBuild', 'estEco', 'plaColeg', 'argPav', 'salgCoast', 'marqPav']

let projectIndex = projectNames.indexOf(projectValue)

console.log(projectValue)

console.log(projectIndex)

//Opening gallery
if (galleryValue == true && projectIndex >= 0) {
    openPhoto(projects[projectIndex])
//Opening project description       
} else {
    if (projectIndex < pj__descrip.length / 3 && projectIndex >= 0) {
        let columnArray = [projectIndex, parseInt(projectIndex) + 25, parseInt(projectIndex) + 50]
        columnArray.forEach(element => {
            if (window.getComputedStyle(pj__box[element]).display != 'none' && window.getComputedStyle(pj__box[element].parentNode).display != 'none') {
                pj__box[element].scrollIntoView()
                setTimeout(open, 1000, element)
            }
        });
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