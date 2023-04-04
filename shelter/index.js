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
const wrapper = document.querySelector('.wrapper');
const leftSlide = document.getElementById('left');
const rightSlide = document.getElementById('right');
const currentSlide = document.getElementById('current');

async function getPets () {
    const pets = 'pets.json';
    const res = await fetch(pets);
    const data = await res.json();
    return data;
}   // get info-cards from json

async function displayPets(number) {
  const petsData = await getPets(); // giving data
  let  mixData = petsData.slice().sort(()=>Math.random() - 0.5); // shuffle data
  mixData.forEach((element, index) => {
    if(index < number) {
        const petCard = document.createElement('div');
        petCard.classList.add('card');
        petCard.innerHTML = `<img src=${element.img} alt="pet"/>
                             <h3>${element.name}</h3>
                             <button class="button_secondary"> Learn more </button>`;
        currentSlide.append(petCard);
    }
    if(index >= number && index < number * 2) {
        const petCard = document.createElement('div');
        petCard.classList.add('card');
        petCard.innerHTML = `<img src=${element.img} alt="pet"/>
                             <h3>${element.name}</h3>
                             <button class="button_secondary"> Learn more </button>`;
        rightSlide.append(petCard);
    }
    if(number === 1 && index >= number * 2 && index < number * 3 ||
       number === 2 && index >= number * 2 && index < number * 3 ||
       number === 3 && index >= number * 2 - 1 && index <= number * 2 + 1) {
        const petCard = document.createElement('div');
        petCard.classList.add('card');
        petCard.innerHTML = `<img src=${element.img} alt="pet"/>
                             <h3>${element.name}</h3>
                             <button class="button_secondary"> Learn more </button>`;
        leftSlide.append(petCard);
    }  
  })
} // generate start-position

async function getNewSlide(slide, number) {
    const petsData = await getPets();
    let mixData = petsData.slice().sort(()=>Math.random() - 0.5);
    let count = 0;
    mixData.forEach((element) => {
      if(number === 3) {
        let allChildren = currentSlide.childNodes;
        if(element.name !== allChildren[0].childNodes[2].innerHTML && 
          element.name !== allChildren[1].childNodes[2].innerHTML && 
          element.name !== allChildren[2].childNodes[2].innerHTML && 
          count < number) {
      
            const petCard = document.createElement('div');
            petCard.classList.add('card');
            petCard.innerHTML = `<img src=${element.img} alt="pet"/>
                                 <h3>${element.name}</h3>
                                 <button class="button_secondary"> Learn more </button>`;
            slide.append(petCard);
            count++;
        } 
      }
      if(number === 2) {
        let allChildren = currentSlide.childNodes;
        if(element.name !== allChildren[0].childNodes[2].innerHTML && 
          element.name !== allChildren[1].childNodes[2].innerHTML && 
          count < number) {
      
            const petCard = document.createElement('div');
            petCard.classList.add('card');
            petCard.innerHTML = `<img src=${element.img} alt="pet"/>
                                 <h3>${element.name}</h3>
                                 <button class="button_secondary"> Learn more </button>`;
            slide.append(petCard);
            count++;
        } 
      }
      if(number === 1) {
        let allChildren = currentSlide.childNodes;
        if(element.name !== allChildren[0].childNodes[2].innerHTML &&  
          count < number) {
      
            const petCard = document.createElement('div');
            petCard.classList.add('card');
            petCard.innerHTML = `<img src=${element.img} alt="pet"/>
                                 <h3>${element.name}</h3>
                                 <button class="button_secondary"> Learn more </button>`;
            slide.append(petCard);
            count++;
        } 
      }
    })
    return slide; // generate new slide-block with no-repeat cards
}

function workSlider() {
  let numberCards;
  if(window.innerWidth >= 1184) numberCards = 3;
  if(window.innerWidth >= 749 && window.innerWidth < 1184) numberCards = 2;   
  if(window.innerWidth < 749) numberCards = 1;
  displayPets(numberCards);

    wrapper.addEventListener("animationend", function(animationEvent) {
        let newSlide;

        if (animationEvent.animationName === "move-left") {
            wrapper.classList.remove('transition_left');
            rightSlide.innerHTML = currentSlide.innerHTML;
            currentSlide.innerHTML = leftSlide.innerHTML;
            newSlide = leftSlide;
        }
        else {
            wrapper.classList.remove('transition_right');
            leftSlide.innerHTML = currentSlide.innerHTML;
            currentSlide.innerHTML = rightSlide.innerHTML;
            newSlide = rightSlide;
        }

        newSlide.innerHTML = '';
        newSlide = getNewSlide(newSlide, numberCards);
    })  // searching animationend and give block-content to other slide

    const modalBackground = document.querySelector('.modal_background');
    const name = document.getElementById('name');
    const type = document.getElementById('type');
    const description = document.getElementById('description');
    const age = document.getElementById('age');
    const inoculations = document.getElementById('inoculations');
    const diseases = document.getElementById('diseases');
    const parasites = document.getElementById('parasites');
    const modalPet = document.getElementById('modal_pet');

    currentSlide.addEventListener('click', async function(e) {
      const petsData = await getPets();
      target = e.target;
      if(target.className === 'card') {
          modalBackground.classList.add('top');
          body.classList.add('close');

          petsData.forEach((dataEl) => {
            if(dataEl.name === target.childNodes[2].innerHTML) {
              modalPet.src = `${dataEl.img}`;
              name.textContent = `${dataEl.name}`;
              type.textContent = `${dataEl.type}` + ' - ' + `${dataEl.breed}`;
              description.textContent = `${dataEl.description}`;
              age.textContent = `${dataEl.age}`;
              inoculations.textContent = `${dataEl.inoculations}`;
              diseases.textContent = `${dataEl.diseases}`;
              parasites.textContent = `${dataEl.parasites}`;
            }
          })
        } // listener for 1-st level children

        if(target.closest('img') || target.closest('h3') || target.closest('button')) {
          modalBackground.classList.add('top');
          body.classList.add('close');
          let parent = target.parentNode;

          petsData.forEach((dataEl) => {
            if(dataEl.name === parent.childNodes[2].innerHTML) {
              modalPet.src = `${dataEl.img}`;
              name.textContent = `${dataEl.name}`;
              type.textContent = `${dataEl.type}` + ' - ' + `${dataEl.breed}`;
              description.textContent = `${dataEl.description}`;
              age.textContent = `${dataEl.age}`;
              inoculations.textContent = `${dataEl.inoculations}`;
              diseases.textContent = `${dataEl.diseases}`;
              parasites.textContent = `${dataEl.parasites}`;
            }
          })
        } // listener for 2-nd level children
    }) // main event listener for cards at wrapper
    
    modalBackground.addEventListener('click', function(e) { 
      const target = e.target;
      if (!target.closest('.modal_window')) { 
          modalBackground.classList.remove('top');
          body.classList.remove('close');
      }
    }) // close modal-window on click outside

    arrowRight.addEventListener('click', function() {
      wrapper.classList.add('transition_right');
    })
  
    arrowLeft.addEventListener('click', function() {
      wrapper.classList.add('transition_left');
    }) // button's instructions
} //main function

workSlider();