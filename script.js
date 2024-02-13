function toggleMenu() {
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector(".hamburger-icon")
    menu.classList.toggle("open")
    icon.classList.toggle("open")
} 

$(document).ready(function(){

    var typed = new Typed(".typing", {
        strings: ["Bookworm", "Amateur", "Travel Enthusiast"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

});






