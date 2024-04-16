"use strict"

// DATA INPUT

const product = [

{    
    id: 0,
    image: 'images/c-img1.jpg',
    desc: 'Vestido Gris',
    price: 60000,
    link: 'f-p-w.html'
    // work
},

{
    id: 1,
    image: 'images/c-img2.jpg',
    desc:'Remera Blanca',
    price: 13000,
    link: 'f-p-c.html'
    // casual
},
{
    id: 2,
    image: 'images/c-img3.jpg',
    desc:'Campera Blanco Crema',
    price: 55500,
    link: 's-p-w.html'
    // work
},

{
    id: 3,
    image:'images/cs-img1.jpg',
    desc:'Remera Personalizable',
    price: 20000,
    link: 's-p-c.html'
    // casual
},
{
    id: 4,
    image:'images/cs-img2.jpg',
    desc: 'Camisa Blanca Informal',
    price: 16500,
    link: 't-p-w.html'
    // work
},
{
    id: 5,
    image:'images/cs-img3.jpg',
    desc:'Pijama Blanco',
    price: 15000,
    link: 't-p-c.html'
    // casual
},
{
    id: 6,
    image:'images/cs-img4.jpg',
    desc:'Vestido Rosa Informal',
    price: 21000,
    link: 'fh-p-c.html'
    // casual
},

{
    id: 7,
    image:'images/cs-img5.jpg',
    desc:'Manga Corta Negra',
    price: 11000,
    link: 'fth-p-c.html'
    // casual
},

{
    id: 8,
    image:'images/w-img1.jpg',
    desc:'Sueter Rosa',
    price: 17000,
    link: 'fh-p-w.html'
    // work
},

{
    id: 9,
    image:'images/w-img2.jpg',
    desc:'Saco Rosa Salmón',
    price: 62500,
    link: 'fth-p-w.html'
    // work
},

{
    id: 10,
    image:'images/w-img3.jpg',
    desc:'Campera Cuero',
    price: 77000,
    link: 'http://localhost:3000/f-p-w.html'
    // work
},

{
    id: 11,
    image:'images/w-img4.jpg',
    desc:'Camisa Blanca',
    price: 55500,
     link: 'sx-p-w.html'
    // work
},
]


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



// cart functionality

let modal = document.querySelector(".cart-modal");
let cart = document.querySelector(".cart");
let cartClose = document.querySelector(".cross1");
let cartButton = document.querySelector(".p-button");
let goBackButton = document.querySelector(".back-button");


cart.addEventListener("click",()=>{
    modal.classList.toggle("move")
})

cartClose.addEventListener("click",()=>{
    modal.classList.toggle("move");
})

cartButton.addEventListener("click", () => {
    modal.classList.toggle("move");
   if (itemCount.innerHTML < 15) {
     qCart.innerHTML = parseInt(qCart.innerHTML) + 1;
    itemCount.innerHTML = parseInt(itemCount.innerHTML) + 1;
    let totalCount = parseInt(itemCount.innerHTML);
    let totalPrice = basePrice * totalCount;
    currentPrice.innerHTML = totalPrice + "$";
    totalityPrice.innerHTML = totalPrice + "$";
   } else{
    alert('Stock maximo')
   }

});

goBackButton.addEventListener("click",()=>{
    modal.classList.toggle("move");
})

function refreshPage(){
    location.reload();
}

// increasing number of items and price of items according to quantity
let qCart = document.querySelector(".q-cart")
let itemCount = document.querySelector(".q-item");
let currentPrice = document.querySelector(".c-price-item");
let totalityPrice = document.querySelector(".total-price");


qCart.innerHTML = 0;
itemCount.innerHTML = 0;
currentPrice.innerHTML = 0 + "$";
totalityPrice.innerHTML = 0 + "$";

// change then to based the info on the json
let basePrice = 60000;    

function updatePrice() {
    let count = parseInt(itemCount.innerHTML);
    let totalPrice = basePrice * count;
    currentPrice.innerHTML = totalPrice + "$";
    totalityPrice.innerHTML = totalPrice + "$"
}

function reducePrice() {
    let count = parseInt(itemCount.innerHTML);
    let totalPrice = parseInt(currentPrice.innerHTML) - basePrice;
    currentPrice.innerHTML = totalPrice + "$";
    totalityPrice.innerHTML = totalPrice + "$"
}

// function to increase number items
document.querySelector(".plus").addEventListener("click", () => {
    if (parseInt(itemCount.innerHTML) < 15) {
        itemCount.innerHTML = parseInt(itemCount.innerHTML) + 1;
        const newItem = document.createElement('div');
        newItem.className = 'q-item';
        newItem.innerHTML = itemCount.innerHTML;
        updatePrice();
        qCart.innerHTML = itemCount.innerHTML;
    } else {
        
        alert('Stock maximo');
    }
});

// function to decrease number of items

document.querySelector(".minus").addEventListener("click", () => {
    if (parseInt(itemCount.innerHTML) > 0) {
        itemCount.innerHTML = parseInt(itemCount.innerHTML) - 1;
        const newItem = document.createElement('div');
        newItem.className = 'q-item';
        newItem.innerHTML = itemCount.innerHTML;
        reducePrice();
        qCart.innerHTML = itemCount.innerHTML;
    }
});

// trash functionality

let trashIcon = document.querySelector(".trash");

trashIcon.addEventListener("click",()=>{
    document.querySelector(".modal-middle-container").classList.toggle("trash");
    document.querySelector(".modal-bottom-container").classList.toggle("trash");
    totalityPrice.innerHTML = 0 + "$";
    document.querySelector(".empty-top-container").style.display = "flex";
    document.querySelector(".empty-bottom-container").style.display = "flex";
    qCart.innerHTML = 0;
})


// option size

let modalSizeSelected = document.querySelector(".modal-p-size");
let sizeSelect = document.querySelector(".size-selection");

sizeSelect.addEventListener("change", () => {
    let selectedOption = sizeSelect.options[sizeSelect.selectedIndex].innerHTML;
    modalSizeSelected.innerHTML = selectedOption;
});

// payment event

document.querySelector(".payment-button").addEventListener("click",()=>{
    document.querySelector(".payment-modal").classList.toggle("payment");

})

document.querySelector(".payment-main-container svg").addEventListener("click",()=>{
     document.querySelector(".payment-modal").classList.toggle("payment");
})






