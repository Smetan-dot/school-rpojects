const burgerMenu = document.querySelector('.burger_menu');
const navigation = document.querySelector('.navigation');
const navItems = document.querySelectorAll('.nav_item');
const body = document.querySelector('body');
const header = document.querySelector('header');
const lines = document.querySelectorAll('.line');
burgerMenu.addEventListener('click', function() {
    burgerMenu.classList.toggle('on');
    navigation.classList.toggle('visible');
    body.classList.toggle('stop_scrolling');
    checkBurger();
}) // functionality for burger-menu

window.addEventListener('click', function(e) { 
    const target = e.target;
    if (!target.closest('.navigation') && !target.closest('.burger_menu')) { 
      navigation.classList.remove('visible');
      burgerMenu.classList.remove('on');
      body.classList.remove('stop_scrolling');
      checkBurger();
    }
  }) // close settings on click outside settings block

navItems.forEach((element) => {
    element.addEventListener('click', function() {
        navigation.classList.remove('visible');
        burgerMenu.classList.remove('on');
        body.classList.remove('stop_scrolling');
        checkBurger();
    })
}) // actions for click on navigation's elements

function checkBurger () {
    if (burgerMenu.classList.contains('on')) {
        lines.forEach((element) => {
            element.style.border = '1px solid #F1CDB3';
        })     
    }
    else {
        lines.forEach((element) => {
            element.style.border = '1px solid #000000';
        })     
    }
} // changing color for burger's lines on pets.html