
const navbar =document.querySelector(".navbar");
const logo =document.querySelector(".logo");
const navbar__menu =document.querySelector(".navbar__menu");
const menu__toggler =document.querySelector(".menu-toggler");
const menu =document.querySelector(".menu")
const menu_2 =document.querySelector(".menu_2")
const menu_3 =document.querySelector(".menu_3")
const menu_4 =document.querySelector(".menu_4")
const menu_5 =document.querySelector(".menu_5")

const goTop =document.querySelector(".goTop");


function FadeIn(){
    goTop.document.querySelector()
}
function Scrolled(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop >20){
        navbar.classList.toggle('sticky');
    
    }
    else{
        navbar.classList.remove('sticky');
    }
}

function ScrollUp(){
    scroll(0,0);
}
function Display(){
    menu__toggler.classList.toggle('active');
    navbar__menu.classList.toggle('active');
    
  
}
function NonDisplay(){
    navbar__menu.classList.remove('active');
    menu__toggler.classList.toggle('active');
}

function init(){
    Scrolled()
    window.onscroll = function() {Scrolled()};
    menu__toggler.addEventListener("click", Display);
    menu.addEventListener("click",NonDisplay);
    menu_2.addEventListener("click",NonDisplay);
    menu_3.addEventListener("click",NonDisplay);
    menu_4.addEventListener("click",NonDisplay);
    menu_5.addEventListener("click",NonDisplay);
    goTop.addEventListener("click",ScrollUp);

}
init();