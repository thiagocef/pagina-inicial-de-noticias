const menuMobile = document.querySelector('.menu-mobile')
const menuHamburger = document.querySelector('.menu-hamburger')
const menuHamburgerClose = document.querySelector('.menu-hamburger-close')

//ABRE MENU MOBILE
function menuOpen() {
    menuHamburger.classList.replace('menu-hamburger', 'menu-hamburger-off')

    menuHamburgerClose.classList.replace('menu-hamburger-close', 'menu-hamburger-on')

    menuMobile.classList.replace('menu-mobile-off', 'menu-mobile-on')
}

menuHamburger.addEventListener('click', menuOpen)

//FECHA MENU MOBILE
function menuClose() {
    menuHamburger.classList.replace( 'menu-hamburger-off', 'menu-hamburger')

    menuHamburgerClose.classList.replace( 'menu-hamburger-on', 'menu-hamburger-close')

    menuMobile.classList.replace('menu-mobile-on', 'menu-mobile-off')
}

menuHamburgerClose.addEventListener('click', menuClose)
