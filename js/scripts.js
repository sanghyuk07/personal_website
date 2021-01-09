
const navbar =document.querySelector(".navbar");
const logo =document.querySelector(".logo");
const navbar__menu =document.querySelector(".navbar__menu");
const menu__toggler =document.querySelector(".menu-toggler");


function Scrolled(){
    if(document.body.scrollTop > 5 || document.documentElement.scrollTop >5){
        navbar.classList.toggle('sticky');
    }
    else{
        navbar.classList.remove('sticky');
    }
}
function Display(){
    menu__toggler.classList.toggle('active');
    navbar__menu.classList.toggle('active');
}

window.onscroll = function() {Scrolled()};

menu__toggler.addEventListener("click", Display);


