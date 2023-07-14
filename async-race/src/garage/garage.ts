import { Car, getCars } from "../server/server";
import paintCar from "../car";

function drawCreateBlock (wrapper: HTMLDivElement):void {
    const createBlock = document.createElement('div');
    createBlock.classList.add('create-block');
    wrapper.appendChild(createBlock);

    const inputCreate = document.createElement('input');
    inputCreate.classList.add('input-text');
    inputCreate.type = 'text';
    createBlock.appendChild(inputCreate);

    const colorCreate = document.createElement('input');
    colorCreate.classList.add('input-color');
    colorCreate.type = 'color';
    colorCreate.value = "#e66465";
    createBlock.appendChild(colorCreate);

    const createButton = document.createElement('button');
    createButton.classList.add('button');
    createButton.classList.add('changing');
    createButton.textContent = 'CREATE';
    createBlock.appendChild(createButton);
}

function drawUpdateBlock (wrapper: HTMLDivElement):void {
    const updateBlock = document.createElement('div');
    updateBlock.classList.add('update-block');
    wrapper.appendChild(updateBlock);

    const inputUpdate = document.createElement('input');
    inputUpdate.classList.add('input-text');
    inputUpdate.type = 'text';
    inputUpdate.setAttribute('disabled', 'disabled');
    updateBlock.appendChild(inputUpdate);

    const colorUpdate = document.createElement('input');
    colorUpdate.classList.add('input-color');
    colorUpdate.type = 'color';
    colorUpdate.value = "#f6b73c";
    colorUpdate.setAttribute('disabled', 'disabled');
    updateBlock.appendChild(colorUpdate);

    const updateButton = document.createElement('button');
    updateButton.classList.add('button');
    updateButton.classList.add('changing');
    updateButton.textContent = 'UPDATE';
    updateButton.setAttribute('disabled', 'disabled');
    updateBlock.appendChild(updateButton);
}

function drawButtonsBlock (wrapper: HTMLDivElement):void {
    const buttonsBlock = document.createElement('div');
    buttonsBlock.classList.add('buttons-block');
    wrapper.appendChild(buttonsBlock);

    const raceButton = document.createElement('button');
    raceButton.classList.add('button');
    raceButton.textContent = 'RACE';
    buttonsBlock.appendChild(raceButton);

    const resetButton = document.createElement('button');
    resetButton.classList.add('button');
    resetButton.textContent = 'RESET';
    buttonsBlock.appendChild(resetButton);

    const generateButton = document.createElement('button');
    generateButton.classList.add('button');
    generateButton.classList.add('changing');
    generateButton.textContent = 'GENERATE CARS';
    buttonsBlock.appendChild(generateButton);
}

function drawCarButtons (wrapper: HTMLDivElement, car: Car):void {
    const carButtons = document.createElement('div');
    carButtons.classList.add('car-buttons');
    wrapper.appendChild(carButtons);

    const selectButton = document.createElement('button');
    selectButton.classList.add('button');
    selectButton.classList.add('changing');
    selectButton.textContent = 'SELECT';
    carButtons.appendChild(selectButton);

    const removeButton = document.createElement('button');
    removeButton.classList.add('button');
    removeButton.classList.add('changing');
    removeButton.textContent = 'REMOVE';
    carButtons.appendChild(removeButton);

    const carName = document.createElement('span');
    carName.textContent = car.name;
    carButtons.appendChild(carName);
}

function drawCarWithControls (wrapper: HTMLDivElement, car: Car):void {
    const carWithControls = document.createElement('div');
    carWithControls.classList.add('car-with-controls');
    wrapper.appendChild(carWithControls);

    const aButton = document.createElement('button');
    aButton.classList.add('button');
    aButton.textContent = 'A';
    carWithControls.appendChild(aButton);

    const bButton = document.createElement('button');
    bButton.classList.add('button');
    bButton.classList.add('changing');
    bButton.textContent = 'B';
    bButton.setAttribute('disabled', 'disabled');
    carWithControls.appendChild(bButton);

    const track = document.createElement('div');
    track.classList.add('track');
    carWithControls.appendChild(track);

    const carInstance = document.createElement('div');
    carInstance.innerHTML = paintCar (car.color);
    track.appendChild(carInstance);

    const flag = document.createElement('div');
    flag.classList.add('flag');
    flag.innerHTML = `<svg width="35px" height="30px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1V16H3V10H7L9 12H15V3H9L7 1H1Z" fill="#C51616"/></svg>`;
    track.appendChild(flag);
}

async function drawGarage(wrapper:HTMLDivElement):Promise<void> {
    const cars = await getCars();
    // const carsOnPage = 7; 
    const currentPage = 1;

    const heading = document.createElement('h2');
    heading.classList.add('heading');
    heading.textContent = `Garage (${cars.length})`;
    wrapper.appendChild(heading);

    const subHeading = document.createElement('h3');
    subHeading.classList.add('sub-heading');
    subHeading.textContent = `Page #${currentPage}`; 
    wrapper.appendChild(subHeading);

    const garage = document.createElement('div');
    garage.classList.add('garage');
    wrapper.appendChild(garage);

    cars.forEach (el => {
        const carContainer = document.createElement('div');
        carContainer.classList.add('car-container');
        garage.appendChild(carContainer);

        drawCarButtons (carContainer, el);

        drawCarWithControls (carContainer, el);
    })
}

export function drawPaginationButtons (wrapper: HTMLDivElement):void {
    const prevButton = document.createElement('button');
    prevButton.classList.add('button');
    prevButton.classList.add('changing');
    prevButton.textContent = 'PREV';
    prevButton.setAttribute('disabled', 'disabled');
    wrapper.appendChild(prevButton);

    const nextButton = document.createElement('button');
    nextButton.classList.add('button');
    nextButton.classList.add('changing');
    nextButton.textContent = 'NEXT';
    nextButton.setAttribute('disabled', 'disabled');
    wrapper.appendChild(nextButton);
}

export async function createGarage ():Promise<void> {
    const garageContainer = document.createElement('div');
    garageContainer.classList.add('garage-container');
    document.body.appendChild(garageContainer);

    drawCreateBlock (garageContainer);
    drawUpdateBlock (garageContainer);
    drawButtonsBlock (garageContainer);
    await drawGarage (garageContainer);
    drawPaginationButtons (garageContainer);
}