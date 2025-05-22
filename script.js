let menuIcon = document.querySelector('.menu')
let navBar = document.querySelector('.navbar')
let body = document.querySelector('body')
let main = document.querySelector('main')

menuIcon.addEventListener('click', function(){
    body.classList.toggle('move__menu')
})

main.addEventListener('click', function(){
    body.classList.remove('move__menu')
})