"use strict"
// DROPDOWN 
let dropdown = document.querySelector(".dropdown-img");
let menuVertical = document.querySelector(".menu-vertical");


let isMenuOpen = false;

dropdown.addEventListener("click", () => {
    if (isMenuOpen) {
        menuVertical.style.display = "none";
        isMenuOpen = false;
    } else {
        menuVertical.style.display = "flex";
        isMenuOpen = true;
    }
});

// NAVIGATOR TAB CLOSURE AND OPEN

let inputContainer = document.querySelector(".search-bar-container");
let closeIcon = document.querySelector(".cross");
let openIcon = document.querySelector(".open");

const abrirModulo = ()=>{
	openIcon.addEventListener("click",()=>{
     inputContainer.style.display = "flex"
	})
}

const cerrarModulo = ()=>{
	closeIcon.addEventListener("click",()=>{
     inputContainer.style.display = "none"
	})
}

abrirModulo();
cerrarModulo();



// nav bar responsiveness

document.querySelector(".bars-menu").addEventListener("click",animateBars);


let line1 = document.querySelector(".line1-bar-menu");
let line2 = document.querySelector(".line2-bar-menu");
let line3 = document.querySelector(".line3-bar-menu");


function animateBars(){
    line1.classList.toggle("activeline1-bar-menu");
    line2.classList.toggle("activeline2-bar-menu");
    line3.classList.toggle("activeline3-bar-menu");
}


let hamburger = document.querySelector(".bars-menu");
let navBar = document.querySelector(".list");
let dropDown = document.querySelector(".dropdown-img");
hamburger.addEventListener("click",()=>{
    navBar.classList.toggle("active");
    dropDown.classList.toggle("active")
})