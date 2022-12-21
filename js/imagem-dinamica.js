const mainImg = document.querySelector('.mainImg')
console.log(mainImg.getAttribute('src'))


if(window.innerWidth < 615) {
    mainImg.setAttribute('src', '/img/image-web-3-mobile.jpg')
}