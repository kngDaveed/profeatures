let menu = document.querySelector('#menu-icon')
let navMenu = document.querySelector('.navbar-items')

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-circle-xmark');
    navMenu.classList.toggle('active')
})