const burgerMenu = document.querySelector('.burger_menu');
const navigation = document.querySelector('.navigation');
const navItems = document.querySelectorAll('.nav_item_on_white');
const body = document.querySelector('body');
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
    }
    checkBurger();
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

const container = document.querySelector('.slider_pets');
const page = document.getElementById('page');
const next = document.getElementById('next');
const toEnd = document.getElementById('double_next');
const prev = document.getElementById('prev');
const toStart = document.getElementById('double_prev');

function shuffleArray (arr) {
    const  arr1 = arr.slice(0, 8).sort(()=>Math.random() - 0.5);
    const  arr2 = arr.slice(8, 16).sort(()=>Math.random() - 0.5);
    const  arr3 = arr.slice(16, 24).sort(()=>Math.random() - 0.5);
    const  arr4 = arr.slice(24, 32).sort(()=>Math.random() - 0.5);
    const  arr5 = arr.slice(32, 40).sort(()=>Math.random() - 0.5);
    const  arr6 = arr.slice(40, 48).sort(()=>Math.random() - 0.5);
    const newArr = arr1.concat(arr2, arr3, arr4, arr5, arr6);
    return newArr; // shuffle array 
}

async function getPets () {
    const pets = 'pets.json';
    const res = await fetch(pets);
    const data = await res.json();
    return data;
} // get info-cards from json

async function workPaginator () {
    const petsData = await getPets();
    const mixData =  shuffleArray(petsData);

    let numberCards;
    let allPages;
    if(window.innerWidth >= 1152) {
        numberCards = 8;
        allPages = 6;
    }    
    if(window.innerWidth >= 704 && window.innerWidth < 1152) {
        numberCards = 6;
        allPages = 8;
    }    
    if(window.innerWidth < 704) {
        numberCards = 3;
        allPages = 16;
    }    

    let currentPage = 1;
    
    function displayPets (array, page, count) {
        let start = count * page - count;
        let end = start + count;
        const pageData = array.slice(start, end);
    
        pageData.forEach((element) => {
            const petCard = document.createElement('div');
            petCard.classList.add('card_pets');
            petCard.innerHTML = `<img src=${element.img} alt="pet"/>
                                 <h3>${element.name}</h3>
                                 <button class="button_secondary"> Learn more </button>`;
            container.append(petCard);
        }) 
    } 

    displayPets(mixData, currentPage, numberCards); // display pet-cards depending window width

    next.addEventListener('click', function() {
        container.innerHTML = '';
        currentPage++;
        displayPets(mixData, currentPage, numberCards);
        page.textContent = `${currentPage}`;

        if(currentPage > 1) {
            prev.classList.remove('inactive');
            toStart.classList.remove('inactive');
        }
        if(currentPage === 6 && numberCards === 8) {
            next.classList.add('inactive');
            toEnd.classList.add('inactive');
        }
        if(currentPage === 8 && numberCards === 6) {
            next.classList.add('inactive');
            toEnd.classList.add('inactive');
        }
        if(currentPage === 16 && numberCards === 3) {
            next.classList.add('inactive');
            toEnd.classList.add('inactive');
        }
    }) // button next

    prev.addEventListener('click', function() {
        container.innerHTML = '';
        currentPage--;
        displayPets(mixData, currentPage, numberCards);
        page.textContent = `${currentPage}`;

        if(currentPage === 1) {
            prev.classList.add('inactive');
            toStart.classList.add('inactive');
        }
        if(currentPage < 6 && numberCards === 8) {
            next.classList.remove('inactive');
            toEnd.classList.remove('inactive');
        }
        if(currentPage < 8 && numberCards === 6) {
            next.classList.remove('inactive');
            toEnd.classList.remove('inactive');
        }
        if(currentPage < 16 && numberCards === 3) {
            next.classList.remove('inactive');
            toEnd.classList.remove('inactive');
        }
    }) // button prev

    toEnd.addEventListener('click', function() {
        container.innerHTML = '';

        if(numberCards === 8) currentPage = 6;
        if(numberCards === 6) currentPage = 8;
        if(numberCards === 3) currentPage = 16;

        displayPets(mixData, currentPage, numberCards);
        page.textContent = `${currentPage}`;

        next.classList.add('inactive');
        toEnd.classList.add('inactive');
        prev.classList.remove('inactive');
        toStart.classList.remove('inactive');
    }) // button toEnd

    toStart.addEventListener('click', function() {
        container.innerHTML = '';
        currentPage = 1;
        displayPets(mixData, currentPage, numberCards);
        page.textContent = `${currentPage}`;

        next.classList.remove('inactive');
        toEnd.classList.remove('inactive');
        prev.classList.add('inactive');
        toStart.classList.add('inactive');
    }) // button toStart
}

workPaginator();