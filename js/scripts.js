const navbar = document.querySelector(".navbar");
const logo = document.querySelector(".logo");
const navbar__menu = document.querySelector(".navbar__menu");
const menu__toggler = document.querySelector(".menu-toggler");
const menu = document.querySelector(".menu");
const menu_2 = document.querySelector(".menu_2");
const menu_3 = document.querySelector(".menu_3");
const menu_4 = document.querySelector(".menu_4");
const menu_5 = document.querySelector(".menu_5");
const emailContact = document.getElementById("contact-by-email");
const emailContact2 = document.getElementById("contact-by-email2");
const goTop = document.querySelector(".goTop");

window.onscroll = function sticky() {
  if (window.pageYOffset > 20) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
};

function ScrollUp ()  {
  window.scrollTo({ behavior: "smooth", top: 10, left: 0 });
}
function Display() {
  menu__toggler.classList.toggle("active");
  navbar__menu.classList.toggle("active");
  navbar.classList.remove("sticky");
}
function NonDisplay() {
  navbar__menu.classList.remove("active");
  menu__toggler.classList.toggle("active");
}
function sendEmail(e){
  e.preventDefault()
  var mailTo = 'mailto:tkdgur933@gmail.com?'
  var subject = 'subject=' + document.getElementById('subject').value
  var body ='&body=' + document.getElementById('body').value
  var name = document.getElementById('name').value
  window.location.href = mailTo + subject +body + '\n'+name
}
function init() {
  // Scrolled()
  // window.onscroll = function() {sticky()};
  menu__toggler.addEventListener("click", Display);
  menu.addEventListener("click", NonDisplay);
  menu_2.addEventListener("click", NonDisplay);
  menu_3.addEventListener("click", NonDisplay);
  menu_4.addEventListener("click", NonDisplay);
  menu_5.addEventListener("click", NonDisplay);
  goTop.addEventListener("click", ScrollUp);
  emailContact.addEventListener('click', sendEmail);
  emailContact2.addEventListener('click', sendEmail);

}
init();
