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


const arrowRight = document.querySelector('.arrow_right');
const arrowLeft = document.querySelector('.arrow_left');
const slides = document.querySelectorAll('.slider_wrapper');
const wrapper = document.querySelector('.wrapper');
const leftSlide = document.getElementById('left');
const rightSlide = document.getElementById('right');
let currentSlide = document.getElementById('current');

async function getPets () {
    const pets = 'pets.json';
    const res = await fetch(pets);
    const data = await res.json();
    return data;
}   // get info-cards from json

function displayPets(array) {
  array.forEach((element, index) => {
    if(index < 3) {
      const petCard = document.createElement('div');
      petCard.classList.add('card');
      petCard.innerHTML = `<img src=${element.img} alt="pet"/>
                           <h3>${element.name}</h3>
                           <button class="button_secondary"> Learn more </button>`;
      slides[1].append(petCard);
    }
    if(index >= 3 && index < 6) {
      const petCard = document.createElement('div');
      petCard.classList.add('card');
      petCard.innerHTML = `<img src=${element.img} alt="pet"/>
                           <h3>${element.name}</h3>
                           <button class="button_secondary"> Learn more </button>`;
      slides[2].append(petCard);
    }
    if(index >= 5 && index <= 8) {
      const petCard = document.createElement('div');
      petCard.classList.add('card');
      petCard.innerHTML = `<img src=${element.img} alt="pet"/>
                           <h3>${element.name}</h3>
                           <button class="button_secondary"> Learn more </button>`;
      slides[0].append(petCard);
    }  
  })
}

function getNewSlide(array, slide) {
    let mixData = array.slice().sort(()=>Math.random() - 0.5);
    const sliceData = mixData.slice(0, 3);
    sliceData.forEach((element) => {
      const petCard = document.createElement('div');
      petCard.classList.add('card');
      petCard.innerHTML = `<img src=${element.img} alt="pet"/>
                           <h3>${element.name}</h3>
                           <button class="button_secondary"> Learn more </button>`;
      slide.append(petCard);
    })
    return slide;
}

async function workSlider() {
    const petsData = await getPets();
    let  mixData = petsData.slice().sort(()=>Math.random() - 0.5);

    displayPets(mixData);

    wrapper.addEventListener("animationend", function(animationEvent) {
        let newSlide;

        if (animationEvent.animationName === "move-left") {
            wrapper.classList.remove('transition_left');
            currentSlide.innerHTML = leftSlide.innerHTML;
            newSlide = leftSlide;
        }
        else {
            wrapper.classList.remove('transition_right');
            currentSlide.innerHTML = rightSlide.innerHTML;
            newSlide = rightSlide;
        }

        newSlide.innerHTML = '';
        newSlide = getNewSlide(mixData, newSlide);
    })
}

workSlider();

arrowRight.addEventListener('click', function() {
    wrapper.classList.add('transition_right')
})

arrowLeft.addEventListener('click', function() {
    wrapper.classList.add('transition_left')
})