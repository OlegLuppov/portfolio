// add header sticky and add button Home to header if header sticky
let header = document.querySelector('header')
let hero = document.querySelector('.hero')
let navigation = document.querySelector('.navigation')
let headerIco = document.querySelector('.ico')
let skills = document.querySelector('#skills')
let swt = document.querySelector('.switch')
let home = document.createElement('li')

home.textContent = 'Home'
home.classList.add('home')

home.onclick = function (e) {

    if (e.target.closest('.home')) {
        window.scrollTo(0, 0)
    }

}



window.onscroll = function () {

    if (window.pageYOffset > 50) {
        header.classList.add('stickyHeader')
        hero.classList.add('stickyHero')
        navigationBox.prepend(home)

    }


    else {
        header.classList.remove('stickyHeader')
        hero.classList.remove('stickyHero')
        home.remove()


    }


}



// add burgerMenu and add button home to popup
let burger = document.querySelector('.burger')
let popup = document.querySelector('#popup')
let burgerMenu = document.querySelectorAll('.burger__menu')
let popupNavigation = document.querySelector('.popup__navigation')
let popupList = document.querySelector('.popup__list')
let navigationBox = document.querySelector('.navigation__box')
let navigationLink = document.querySelector('.navigation__link')

let homeToPopup = document.createElement('li')

homeToPopup.classList.add('popup__home')
homeToPopup.textContent = 'Home'


burger.addEventListener('click', burgerHandler)


function burgerHandler(e) {

    header.classList.toggle('headerActive')
    popup.classList.toggle('active')
    burgerMenu.forEach((el) => el.classList.toggle('burActive'))
    popupList.prepend(homeToPopup)

}

// if click  on navigation => burger close 
popup.onclick = function (event) {

    if (event.target.closest('.popup__navigation') || event.target.closest('.popup__home')) {

        popup.classList.remove('active')
        burgerMenu.forEach((el) => el.classList.remove('burActive'))
    }

    if (event.target.closest('.popup__home')) {
        window.scrollTo(0, 0)
    }

}


// change language

swt.addEventListener('click', changeLanguage)

function changeLanguage(e) {
    if (e.target.closest('.switch__en')) {
        document.cookie = 'lang=ru;path=/'
        location.reload()
    }
    if (e.target.closest('.switch__ru')) {
        document.cookie = 'lang=us;path=/'
        location.reload()


    }
    e.preventDefault()

}

// add slider in section  portfolio?
let portfolioButtonLeft = document.querySelector('.portfolio__button-left')
let portfolioButtonRight = document.querySelector('.portfolio__button-right')
let portfolio = document.querySelector('#portfolio')
let slider = document.querySelector('.slider')
let imgBox = document.querySelector('.portfolio__img-box')
let img = document.querySelectorAll('.portfolio__img')
let size = slider.clientWidth
let index = 1



function position() {
    imgBox.style.transform = 'translateX('+(-index * size )+'px)'
    imgBox.style.transition = '.3s all'
   

}

position()

portfolio.addEventListener('click', carousel)

function carousel(e) {
    let max = img.length

    if (e.target.closest('.portfolio__button-left')) {

        if(index >= max-1) {
            false
        } 

        else {
            index++
        }

        position()
        jump()
        
    }

    if(e.target.closest('.portfolio__button-right')) {
            
        if(index <= 0 ) {
            false
        } 

        else {
            index--
        }

        position()
        jump()
    }

}

function jump() {
    portfolio.addEventListener('transitionend',function() {
        if (img[index].id === 'last-clone' ) {
            index = 1
            imgBox.style.transition = 'none'
        }

        if (img[index].id === 'first-clone') {
            index = img.length-2
            imgBox.style.transition = 'none'
        }
        
        else {
            index
        }
        imgBox.style.transform = 'translateX('+(-index * size )+'px)'


      

    })
}













