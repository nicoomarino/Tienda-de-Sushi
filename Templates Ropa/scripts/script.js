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
    link: 't-p-w.html'
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
    link: 't-p-c.html'
    // work
},
{
    id: 5,
    image:'images/cs-img3.jpg',
    desc:'Remera Manga Larga Blanca',
    price: 15000,
    link: 'fh-p-c.html'
    // casual
},
{
    id: 6,
    image:'images/cs-img4.jpg',
    desc:'Vestido Rosa Informal',
    price: 21000,
    link: 'fth-p-c.html'
    // casual
},

{
    id: 7,
    image:'images/cs-img5.jpg',
    desc:'Manga Corta Negra',
    price: 11000,
    link: 'sx-p-c.html'
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
    link: 's-p-w.html'
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

const categories = [...new Set(product.map((item) => item.desc))];

document.querySelector(".search-bar").addEventListener("keyup", (e) => {
    const searchData = e.target.value.toLowerCase();
    const filterData = product.filter((item) => item.desc.toLowerCase().includes(searchData));
    displayItem(filterData);
});

const displayItem = (items) => {
    const container = document.querySelector(".search-item-container");
    container.innerHTML = ""; // Clear previous content

    items.forEach((item) => {
        const itemContainer = document.createElement("div");
        itemContainer.classList.add("left-container-item");

        const imageLink = document.createElement("a");
        imageLink.href = item.link;
        const image = document.createElement("img");
        image.classList.add("selected-item-img");
        image.src = item.image;
        imageLink.appendChild(image);
        itemContainer.appendChild(imageLink);

        const descLink = document.createElement("a");
        descLink.href = item.link;
        const desc = document.createElement("p");
        desc.classList.add("selected-item-desc");
        desc.textContent = item.desc;
        descLink.appendChild(desc);
        itemContainer.appendChild(descLink);

        const price = document.createElement("p");
        price.classList.add("item-price");
        price.textContent = item.price + "$";
        itemContainer.appendChild(price);

        container.appendChild(itemContainer);
    });
};







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
let lis = document.querySelector(".sub-list");

hamburger.addEventListener("click",()=>{
    navBar.classList.toggle("active");
    lis.classList.toggle("active");
    dropDown.classList.toggle("active")
})

