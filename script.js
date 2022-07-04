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

// if click  to navigation popup => burger close 
popup.onclick = function (event) {

    if (event.target.closest('.popup__navigation') || event.target.closest('.popup__home')) {

        popup.classList.remove('active')
        burgerMenu.forEach((el) => el.classList.remove('burActive'))
        video.pause()
        videoPlay.classList.remove('video__play-active')
        pauseSpan.forEach((el) => el.style.opacity = '')
        videoPause.style.borderRight = 'none'
        
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
    imgBox.style.transform = 'translateX(' + (-index * size) + 'px)'
    imgBox.style.transition = '.3s all'
}

position()

portfolio.addEventListener('click', carousel)

function carousel(e) {
    let max = img.length

    if (e.target.closest('.portfolio__button-left')) {

        if (index >= max - 1) {
            false
        }

        else {
            index++
        }

        position()
        jump()

    }

    if (e.target.closest('.portfolio__button-right')) {

        if (index <= 0) {
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
    portfolio.addEventListener('transitionend', function () {
        if (img[index].id === 'last-clone') {
            index = 1
            imgBox.style.transition = 'none'
        }

        if (img[index].id === 'first-clone') {
            index = img.length - 2
            imgBox.style.transition = 'none'
        }

        else {
            index
        }
        imgBox.style.transform = 'translateX(' + (-index * size) + 'px)'




    })
}


// return in alert contacts me 

let contactsButton = document.querySelector('.contacts__button')
let email = document.querySelector('.contacts__email')
let phone = document.querySelector('.contacts__phone')
let message = document.querySelector('textarea')
contactsButton.addEventListener('click', contacts)

function contacts() {

    let obj = {}
    obj.email = email.value
    obj.phone = phone.value
    obj.message = message.value

    for (let key in obj) {
        alert(key + ': ' + obj[key])
    }

}

// add vide player in section video 

let videoContainer = document.querySelector('.video__player-container')
let video = document.querySelector('video')
let videoPlay = document.querySelector('.video__play')
let videoPause = document.querySelector('.video__pause')
let videoStop = document.querySelector('.video__stop')
let progress = document.querySelector('progress')
let pauseSpan = document.querySelectorAll('.video__pause-span')
let fullscreen = document.querySelector('.fullscreen')


videoContainer.addEventListener('click', play)


function play(e) {
    fullscreen.style.display = 'block'
    videoPlay.classList.toggle('video__play-active')
    videoPause.classList.add('video__pause-active')
    videoStop.classList.add('video__stop-active')
    progress.classList.add('progress-active')

    video.play()

    video.ontimeupdate = progressUpdate
    pauseToPlay()
    progressUpdate()
    if (e.target.closest('progress')) {

        videoPlay.classList.toggle('video__play-active')
        videoPause.classList.add('video__pause-active')
        pauseSpan.forEach((el) => el.style.opacity = '0')
        videoPause.style.borderRight = ''
        let progressWidth = progress.offsetWidth
        let click = e.offsetX
        video.currentTime = video.duration * (click / progressWidth)
        video.play()
        videoPlay.classList.add('video__play-active')
    }

    if (e.target.closest('.video__stop')) {
        video.pause()
        video.currentTime = '0'
        video.load()
        videoPlay.classList.remove('video__play-active')
        videoPause.classList.remove('video__pause-active')
        videoStop.classList.remove('video__stop-active')
        progress.classList.remove('progress-active')
        fullscreen.style.display = 'none'
    }

    if(e.target.closest('.fullscreen')) {
        video.play()
        video.requestFullscreen()
        videoPlay.classList.add('video__play-active')
        pauseSpan.forEach((el) => el.style.opacity = '0')
        videoPause.style.borderRight = ''
    }

    


}


function pauseToPlay() {

    if (!video.paused) {

        pauseSpan.forEach((el) => el.style.opacity = '0')
        videoPause.style.borderRight = ''
        video.play()
    }

    if (!document.querySelector('.video__play-active')) {
        video.pause()
        pauseSpan.forEach((el) => el.style.opacity = '')
        videoPause.style.borderRight = 'none'
    }

}

function progressUpdate() {

    let lengthVideo = video.duration
    let lineSegment = video.currentTime
    progress.value = lineSegment / lengthVideo * 100

    if (progress.value === 100) {
        video.load()
        videoPlay.classList.remove('video__play-active')
        videoPause.classList.remove('video__pause-active')
        videoStop.classList.remove('video__stop-active')
        progress.classList.remove('progress-active')
        fullscreen.style.display = 'none'
    }
}

// video pause if onclick to navigation 

header.addEventListener('click',pause) 

function pause(e) {
    if(e.target.closest('.navigation__link') || e.target.closest('.home')) {
        video.pause()
        videoPlay.classList.remove('video__play-active')
        pauseSpan.forEach((el) => el.style.opacity = '')
        videoPause.style.borderRight = 'none'
    }
}





















