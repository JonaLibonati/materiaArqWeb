"use strict";

// This code allows To duplicate the pj__flexContainer automatically

// Get elements
const pj__old =  document.getElementsByClassName("pj")[0];
const pj__flexContainer__old =  document.getElementsByClassName("pj__flexContainer");

// Clone node twice
const childrenCopyOne = pj__flexContainer__old[0].cloneNode(true).childNodes;
const childrenCopyTwo = pj__flexContainer__old[0].cloneNode(true).childNodes;

// Createing two new flexcontainers
const flexContainerSecond = document.createElement("DIV");
flexContainerSecond.classList.add("pj__flexContainer");
flexContainerSecond.classList.add("pj__flexContainer--second");

const flexContainerThirth = document.createElement("DIV");
flexContainerThirth.classList.add("pj__flexContainer");
flexContainerThirth.classList.add("pj__flexContainer--thirth");

// Adding child from the cloned nodes to the flexcontainers
childrenCopyOne.forEach (child => {
    if (child.nodeType != 3) {
        let oldClass = child.classList.item(2);
        let newClass = child.classList.item(2).substring(0, oldClass.length-3) + "two";
        child.classList.replace(oldClass,newClass);
        flexContainerSecond.appendChild(child);
    }
})

childrenCopyTwo.forEach (child => {
    if (child.nodeType != 3) {
        let oldClass = child.classList.item(2);
        let newClass = child.classList.item(2).substring(0, oldClass.length-3) + "three";
        child.classList.replace(oldClass,newClass);
        flexContainerThirth.appendChild(child);
    }
})

// Creating a fragment and adding the flexcontainers
let fragment = document.createDocumentFragment();

fragment.appendChild(flexContainerSecond);
fragment.appendChild(flexContainerThirth);

// Adding the fragment to the HTMLelement
pj__old.appendChild(fragment);