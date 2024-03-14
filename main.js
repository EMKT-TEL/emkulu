var tablinks = document.getElementsByClassName("tablinks");
var tabcontents = document.getElementsByClassName("tabcontent");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
 document.getElementById(tabname).classList.add("active-tab");
}
ScrollReveal({
    reset: true,
    distance:'80px',
    duration: 2000,
});
ScroollReveal().reveal('.text',{ origin: 'top' });