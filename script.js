// ===========================
// KAMOHACK STORE
// Main JavaScript
// ===========================


// إخفاء شاشة البداية

window.addEventListener("load", function(){

    setTimeout(function(){

        const splash = document.getElementById("splash");

        if(splash){
            splash.style.display = "none";
        }

    },2500);

});


// الوضع الليلي

const darkButton = document.getElementById("darkMode");

if(darkButton){

darkButton.addEventListener("click", function(){

    document.body.classList.toggle("light-mode");

});

}


// البحث عن التطبيقات

const searchInput = document.querySelector(".search input");

const cards = document.querySelectorAll(".card");


if(searchInput){

searchInput.addEventListener("input",function(){

    let value = this.value.toLowerCase();


    cards.forEach(function(card){

        let name = card
        .querySelector("h3")
        .innerText
        .toLowerCase();


        if(name.includes(value)){

            card.style.display="block";

        }else{

            card.style.display="none";

        }

    });

});

}


// تغيير الأقسام

const categoryButtons =
document.querySelectorAll(".categories button");


categoryButtons.forEach(function(button){

button.addEventListener("click",function(){


    categoryButtons.forEach(function(btn){

        btn.classList.remove("active");

    });


    this.classList.add("active");


});

});
// ===========================
// Favorites System
// ===========================

let favorites = JSON.parse(localStorage.getItem("favorites")) || [];


const favoriteButtons =
document.querySelectorAll(".favorite");


favoriteButtons.forEach(function(button){

button.addEventListener("click",function(){

let app = this.dataset.app;


if(favorites.includes(app)){

favorites = favorites.filter(item => item !== app);

this.innerHTML = "♡";

}else{

favorites.push(app);

this.innerHTML = "♥";

}


localStorage.setItem(
"favorites",
JSON.stringify(favorites)
);


});

});


// ===========================
// Download Counter
// ===========================


const downloadButtons =
document.querySelectorAll(".download");


downloadButtons.forEach(function(button){


button.addEventListener("click",function(){


let count =
localStorage.getItem("downloads") || 0;


count++;


localStorage.setItem(
"downloads",
count
);


});


});


// ===========================
// Apps Counter
// ===========================


const appsCounter =
document.getElementById("appsCount");


if(appsCounter){

appsCounter.innerHTML =
document.querySelectorAll(".card").length;

}


// ===========================
// Smooth Page Animation
// ===========================


const cardsAnimation =
document.querySelectorAll(".card");


cardsAnimation.forEach(function(card,index){

card.style.animationDelay =
(index * 0.1)+"s";


card.classList.add("show");


});


// ===========================
// Welcome Message
// ===========================


setTimeout(function(){

console.log(
"Welcome to KAMOHACK STORE 🚀"
);

},3000);
// ===========================
// Load Apps From JSON
// ===========================

const appsContainer = document.querySelector(".apps");

if(appsContainer){

fetch("apps.json")

.then(response => response.json())

.then(apps => {

    appsContainer.innerHTML = "";

    apps.forEach(app => {

        const card = document.createElement("div");

        card.className = "card";

        card.innerHTML = `

        <img src="${app.icon}">

        <h3>${app.name}</h3>

        <p>الإصدار: ${app.version}</p>

        <p>الحجم: ${app.size}</p>

        <a href="${app.file}">
        تحميل IPA
        </a>

        `;

        appsContainer.appendChild(card);

    });

})

.catch(error => {

console.log("خطأ في تحميل التطبيقات:", error);

});

}// ===========================
// Categories Filter
// ===========================

let allApps = [];


fetch("apps.json")
.then(response => response.json())
.then(data => {

    allApps = data;

});



const buttons = document.querySelectorAll(".categories button");


buttons.forEach(button => {

    button.addEventListener("click", function(){

        let selectedCategory = this.innerText;


        const cards = document.querySelectorAll(".card");


        cards.forEach(card => {

            let category = card.dataset.category;


            if(selectedCategory === "الكل"){

                card.style.display = "block";

            }

            else if(category === selectedCategory){

                card.style.display = "block";

            }

            else{

                card.style.display = "none";

            }

        });


    });

});