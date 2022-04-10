let menu = document.querySelector('.menu');

menu.addEventListener('click', () => {
    // console.log('fares')
    if (!document.querySelector('.links').classList.contains('drop')) {
        document.querySelector('.links').classList.add('drop')
    } else {
        document.querySelector('.links').classList.remove('drop')
    }
})
////////////////////////////////////////////////////////////////////////
function createVideoPresantion(imgSrc) {
    let overlayFixed = document.createElement('div');
    overlayFixed.setAttribute('class', 'overlay-for-video')
    overlayFixed.style.cssText = `position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .95);
    z-index: 99;`
    //
    let imgContainer = document.createElement('div');
    imgContainer.className = 'img-container'
    imgContainer.style.cssText = `position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #FFF;
    width: 80%;
    height: 65%;`
    //
    let img = document.createElement('img');
    img.src = imgSrc;
    img.style.cssText = `;
    width: 100%;
    height: 100%;
    object-fit: cover;`
    //
    let spanClose = document.createElement('span');
    spanClose.style.cssText = `
    position: absolute;
    left: 100%;
    background-color: var(--main-color);
    width: 35px;
    height: 35px;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    font-size: 30px;
    text-align: center;
    line-height: 35px;
    cursor: pointer;
    color: #EEE;
    font-weight: bold;`
    spanClose.textContent = `X`
    spanClose.className = 'close'
    //
    overlayFixed.appendChild(imgContainer);
    imgContainer.appendChild(spanClose)
    imgContainer.appendChild(img)
    document.body.appendChild(overlayFixed)
}

let mainLoop = Array.from(document.querySelectorAll('.swiper-wrapper img'));
mainLoop.forEach((e) => {
    e.addEventListener('click', () => {
            createVideoPresantion(e.getAttribute('src'))
    })
})
document.body.addEventListener('click', (e) => {
    if (e.target.classList.contains('close')) {
        document.querySelector('.overlay-for-video').remove()
    }
})
////////////////////////////////////////////////////////////////////////

let sec = document.querySelector('.number');
let items = document.querySelectorAll('.cont');
let start = false;

window.onscroll = () => {
    if (window.scrollY >= sec.offsetTop - 300) {
        //
        if (!start) {
            items.forEach((nums) => awesomeStat(nums))
        }
        //
        start = true
    }
}
function awesomeStat(el) {
    let fini = el.dataset.number;
    let count = setInterval(() => {
        el.textContent++
        if (el.textContent == fini) {
            //
            clearInterval(count);
            //
        }
    }, 1000 / fini)
}
////////////////////////////////////////////////////////////////////////
let countDownDate = new Date('Dec 31, 2022 23:59:59').getTime()

console.log(countDownDate)

let counter = setInterval(() => {
    //
    let dateNow = new Date().getTime();
    //
    let difftime = countDownDate - dateNow;
    //
    let day = Math.floor(difftime / (1000 * 60 * 60 * 24));
    let hours = Math.floor(difftime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let minutes = Math.floor(difftime % (1000 * 60 * 60) / (1000 * 60));
    let seconds = Math.floor(difftime % (1000 * 60) / (1000));
    //
    document.querySelector('.count .days').textContent = day < 10 ? `0${day}` : day;
    document.querySelector('.count .hours').textContent = hours < 10 ? `0${hours}` : hours;
    document.querySelector('.count .minutes').textContent = minutes < 10 ? `0${minutes}` : minutes;
    document.querySelector('.count .seconds').textContent = seconds < 10 ? `0${seconds}` : seconds;
    //
    if (difftime < 0) {
        clearInterval(counter);
    }
}, 1000)
////////////////////////////////////////////////////////////////////////
let btn = document.getElementsByClassName('btn'),
slide =document.getElementById('slide');

btn[0].onclick = function () {
slide.style.transform = `translateX(0px)`
for (var i = 0; i < 4; i++) {
    btn[i].classList.remove('active');
}
this.classList.add('active');
}
btn[1].onclick = function () {
slide.style.transform = `translateX(-25%)`
for (var i = 0; i < 4; i++) {
    btn[i].classList.remove('active');
}
this.classList.add('active');
}
btn[2].onclick = function () {
slide.style.transform = `translateX(-50%)`
for (var i = 0; i < 4; i++) {
    btn[i].classList.remove('active');
}
this.classList.add('active');
}
btn[3].onclick = function () {
slide.style.transform = `translateX(-75%)`
for (var i = 0; i < 4; i++) {
    btn[i].classList.remove('active');
}
this.classList.add('active');
}
////////////////////////////////////////////////////////////////////////
var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
////////////////////////////////////////////////////////////////////////////