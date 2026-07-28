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
