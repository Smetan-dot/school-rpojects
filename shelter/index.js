const burgerMenu = document.querySelector('.burger_menu');
const navigation = document.querySelector('.navigation');
const navItems = document.querySelectorAll('.nav_item');
const body = document.querySelector('body');
const lines = document.querySelectorAll('.line');
burgerMenu.addEventListener('click', function() {
    burgerMenu.classList.toggle('on');
    navigation.classList.toggle('visible');
    body.classList.toggle('stop_scrolling');
}) // functionality for burger-menu

window.addEventListener('click', function(e) { 
    const target = e.target;
    if (!target.closest('.navigation') && !target.closest('.burger_menu')) { 
      navigation.classList.remove('visible');
      burgerMenu.classList.remove('on');
      body.classList.remove('stop_scrolling');
    }
  }) // close settings on click outside settings block

navItems.forEach((element) => {
    element.addEventListener('click', function() {
        navigation.classList.remove('visible');
        burgerMenu.classList.remove('on');
        body.classList.remove('stop_scrolling');
    })
}) // actions for click on navigation's elements