let burgerList = document.querySelector(".main-header .burger");
let navLinks = document.querySelector("nav");

burgerList.addEventListener("click", (_) => {
    if (navLinks.style.display == 'none') {
        navLinks.style.display = 'block'
        burgerList.classList.add('click')
    } else {
        navLinks.style.display = 'none'
        burgerList.classList.remove('click')
    }
});
