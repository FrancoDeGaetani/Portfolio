
const NAVBAR = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    const isMobile = window.innerWidth <= 600; 

    if (!isMobile) {
        if (window.scrollY > 150) {
        NAVBAR.classList.add("navbar-visible");
        } else {
        NAVBAR.classList.remove("navbar-visible"); 
        }
    } else {
        NAVBAR.classList.remove("navbar-visible"); 
    }
});

const LOGO_LINK =document.querySelector(".navbar__container-logo")
const TOGGLE_BUTTON = document.getElementById("toggle-button")
const NAV_BAR_CONTAINER = document.getElementById("hola")

TOGGLE_BUTTON.addEventListener("click",()=>{

    TOGGLE_BUTTON.classList.toggle("active")
    NAVBAR.classList.toggle("active")
    NAV_BAR_CONTAINER.classList.toggle("active")

})

const NAV_BAR_LINKS= document.querySelectorAll(".navbar__container-list-item a[href^='#']")

NAV_BAR_LINKS.forEach(link =>{
    link.addEventListener("click",(e)=>{
        TOGGLE_BUTTON.classList.remove("active")
        NAVBAR.classList.remove("active")
        NAV_BAR_CONTAINER.classList.remove("active")
    })
})

LOGO_LINK.addEventListener("click", (e)=>{
    
    TOGGLE_BUTTON.classList.remove("active")
    NAVBAR.classList.remove("active")
    NAV_BAR_CONTAINER.classList.remove("active")

})