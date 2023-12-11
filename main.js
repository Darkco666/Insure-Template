let burgerList = document.querySelector(".main-header .burger");
let navLinks = document.querySelector("nav");

burgerList.addEventListener("click", (_) => {
    if (navLinks.style.display == 'none') {
        navLinks.style.display = 'block'
    } else navLinks.style.display = 'none'
});
