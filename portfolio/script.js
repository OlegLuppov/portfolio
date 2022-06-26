// add variables 

let header = document.querySelector('header')
// let sticky = header.offsetTop
let hero = document.querySelector('.hero')
let navigation = document.querySelector('.navigation')
let headerIco = document.querySelector('.ico')
let skills = document.querySelector('#skills')
let swt = document.querySelector('.switch')
let  mediaWidth = window.screen.width
const burger = document.querySelector('.burger')
const popup = document.querySelector('#popup')
const burgerMenu = document.querySelectorAll('.burger__menu')
const popupNavigation = document.querySelector('.popup__navigation')
const popupList = document.querySelector('.popup__list')
const navigationBox = document.querySelector ('.navigation__box')
const navigationLink = document.querySelector('.navigation__link')


// add header sticky and add button Home to header if header sticky
let home = document.createElement('li') 
home.textContent = 'Home'
home.classList.add('home')

home.onclick = function(e) {

    if (e.target.closest('.home')) {
        window.scrollTo(0,0)
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

let homeToPopup = document.createElement('li')
homeToPopup.classList.add('popup__home')
homeToPopup.textContent = 'Home'


burger.addEventListener('click',burgerHandler)


function burgerHandler(e) {
    
    header.classList.toggle('headerActive')
    popup.classList.toggle('active')
    burgerMenu.forEach((el) => el.classList.toggle('burActive'))
    popupList.prepend(homeToPopup)
   
}

// if click  on navigation => burger close 
popup.onclick = function(event) {
    
if(event.target.closest('.popup__navigation') || event.target.closest('.popup__home')) {

    popup.classList.remove('active')
    burgerMenu.forEach((el) => el.classList.remove('burActive'))
}

if ( event.target.closest('.popup__home')) {
    window.scrollTo(0,0)
}


  
}















