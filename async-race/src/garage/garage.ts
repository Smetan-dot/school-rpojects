import { Car, getCars, createCar, deleteCar, deleteWinner, updateCar, startStopCar, switchDrive, 
    Winner, getWinner, createWinner, updateWinner } from "../server/server";
import createWinners from "../winners/winners";
import { paintCar, brands, models, generateCarName, generateColor } from "../car";

const carsOnPage = 7; 
let currentPage = 1;
let isWinner = false;
let animationArr: Animation[] = [];

function addCar (name: string, color: string, id: number):Car {
    const car = {
        "name": name,
        "color": color,
        "id": id
    }
    return car;
}

function addWinner (id: number, wins: number, time: number):Winner {
    const winner = {
        "id": id,
        "wins": wins,
        "time": time
    }
    return winner;
}

async function displayCurrentCars (): Promise<Car[]> {
    const cars = await getCars ();
    const start = carsOnPage * currentPage - carsOnPage;
    const end = start + carsOnPage;
    return cars.slice(start, end);
}

function movingCar (object: HTMLDivElement, time: number, distance: number): Animation {
    const car = object;
    const animation =  car.animate ([
        {transform: 'translateX(0)'},
        {transform: `translateX(${distance}px)`}
    ],
        {
            duration: time,
            easing: 'ease-in',
            fill: "forwards"
        }
    )
    return animation;
}

function showWinner (str: string): void {
    const modal = document.createElement('p');
    modal.classList.add('modal');
    modal.textContent = str;
    document.body.appendChild(modal);

    setTimeout(() => {
        modal.remove();
    }, 2000)
}

function getMinTime (time1: number, time2: number): number {
    if (time1 > time2) return time2;
    return time1;
}

async function startRace (element: Car): Promise<Animation> {
    const response = await startStopCar ('started', element.id);

    let player: Animation = new Animation;
    const car = document.querySelector(`.car-instance${element.id}`) as HTMLDivElement;
    const track = car.parentElement as HTMLDivElement;
    const animationTime = response.distance / response.velocity;
    const animationWidth = track.clientWidth - car.clientWidth;;

    player = movingCar (car, animationTime, animationWidth);

    const driveMode = await switchDrive ('drive', element.id);
    
    if (driveMode === 500) player.pause();
    if (player.playState === 'finished' && !isWinner) {
        isWinner = true;
        const result = (Number(player.currentTime) / 1000).toFixed(2);
        showWinner (`${element.name} win with result ${result}s!`);
        
        const tableWinner = await getWinner (element.id);
        const winnersContainer = document.querySelector('.winners-container') as HTMLDivElement;

        if (Object.keys(tableWinner).length === 0) {
            const winner = addWinner (element.id, 1, Number(result));
            await createWinner (winner);
            winnersContainer.remove();
            createWinners ();
        } else {
            const winner = addWinner (element.id, tableWinner.wins + 1, getMinTime (tableWinner.time, Number(result)));
            await updateWinner (element.id, winner);
            winnersContainer.remove();
            createWinners ();
        }
    };

    return player;
}

async function drawCreateBlock (wrapper: HTMLDivElement, func: () => Promise<void>):Promise<void> {
    const createBlock = document.createElement('div');
    createBlock.classList.add('create-block');
    wrapper.appendChild(createBlock);

    const inputCreate = document.createElement('input');
    inputCreate.classList.add('input-create');
    inputCreate.type = 'text';
    createBlock.appendChild(inputCreate);

    const colorCreate = document.createElement('input');
    colorCreate.classList.add('color-create');
    colorCreate.type = 'color';
    colorCreate.value = "#e66465";
    createBlock.appendChild(colorCreate);

    const createButton = document.createElement('button');
    createButton.classList.add('button');
    createButton.classList.add('changing');
    createButton.textContent = 'CREATE';
    createBlock.appendChild(createButton);

    const cars = await getCars ();

    createButton.addEventListener ('click', () => {
        if (inputCreate.value) {
            const car = addCar (inputCreate.value, colorCreate.value, cars.length + 1);
            createCar (car);
            const garage = document.querySelector('.garage-container') as HTMLDivElement;
            garage.remove();
            func ();
        } else inputCreate.focus();
    })
}

    function drawUpdateBlock (wrapper: HTMLDivElement, func: () => Promise<void>):void {
    const updateBlock = document.createElement('div');
    updateBlock.classList.add('update-block');
    wrapper.appendChild(updateBlock);

    const inputUpdate = document.createElement('input');
    inputUpdate.classList.add('input-update');
    inputUpdate.type = 'text';
    inputUpdate.setAttribute('disabled', 'disabled');
    updateBlock.appendChild(inputUpdate);

    const colorUpdate = document.createElement('input');
    colorUpdate.classList.add('color-update');
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

    updateButton.addEventListener ('click', () => {
        const car = addCar (inputUpdate.value, colorUpdate.value, Number(updateBlock.id));
        updateCar (Number(updateBlock.id), car);
        const garage = document.querySelector('.garage-container') as HTMLDivElement;
        garage.remove();
        const winnersContainer = document.querySelector('.winners-container') as HTMLDivElement;
        winnersContainer.remove();
        func ();
        createWinners ();
    })
}

async function drawButtonsBlock (wrapper: HTMLDivElement, func: () => Promise<void>):Promise<void> {
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

    const cars = await getCars ();

    generateButton.addEventListener ('click', () => {
        for (let i = 1; i <= 100; i += 1) {
            const car = addCar (generateCarName (brands, models), generateColor (), cars.length + i);
            createCar (car);
        }
        const garage = document.querySelector('.garage-container') as HTMLDivElement;
        garage.remove();
        func ();
    })

    raceButton.addEventListener ('click', async () => {
        const buttons = document.querySelectorAll('.button');
        const buttonGarage = document.querySelector('.gar');
        const buttonWin = document.querySelector('.win');
        const prev = document.querySelector('.prev');
        const next = document.querySelector('.next');
        buttons.forEach(el => el.setAttribute('disabled', 'disabled'));
        animationArr = [];

        const currentCars = await displayCurrentCars();
        currentCars.forEach (async (car) => {
            const player = await startRace (car);
            animationArr.push(player);
            if (animationArr.length === currentCars.length) {
                resetButton.removeAttribute('disabled');
                buttonGarage?.removeAttribute('disabled');
                buttonWin?.removeAttribute('disabled');
                if (currentPage > 1) prev?.removeAttribute('disabled');
                if ((cars.length >= carsOnPage && currentPage === 1) || currentPage < Math.ceil(cars.length / carsOnPage)) next?.removeAttribute('disabled');
            }
        })
    })

    resetButton.addEventListener ('click',async () => {
        const buttons = document.querySelectorAll('.button');
        const buttonsB = document.querySelectorAll('.b');
        const prev = document.querySelector('.prev');
        const next = document.querySelector('.next');

        const currentCars = await displayCurrentCars();
        currentCars.forEach (async (car) => {
            await startStopCar ('stopped', car.id);
            animationArr.forEach(player => {
                player.cancel();
            })
            isWinner = false;
        })

        buttons.forEach(el => el.removeAttribute('disabled'));
        buttonsB.forEach(el => el.setAttribute('disabled', 'disabled'));
        if (currentPage === 1) prev?.setAttribute('disabled', 'disabled');
        if (cars.length <= carsOnPage || currentPage === Math.ceil(cars.length / carsOnPage)) next?.setAttribute('disabled', 'disabled');
    })
}

    function drawCarButtons (wrapper: HTMLDivElement, car: Car, func: () => Promise<void>):void {
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

    selectButton.addEventListener ('click', () => {
        const updateBlock = document.querySelector('.update-block') as HTMLDivElement;
        Array.from(updateBlock.children).forEach(el => el.removeAttribute('disabled'));
        updateBlock.setAttribute('id', `${car.id}`);
        const inputUpdate = document.querySelector('.input-update') as HTMLInputElement;
        inputUpdate.value = car.name;
        const colorUpdate = document.querySelector('.color-update') as HTMLInputElement;
        colorUpdate.value = car.color;
    })
    removeButton.addEventListener ('click', () => {
        deleteCar (car.id);
        deleteWinner (car.id);
        const garageContainer = document.querySelector('.garage-container') as HTMLDivElement;
        garageContainer.remove();
        const winnersContainer = document.querySelector('.winners-container') as HTMLDivElement;
        winnersContainer.remove();
        func ();
        createWinners ();
    })
}

function drawCarWithControls (wrapper: HTMLDivElement, car: Car, i: number):void {
    const carWithControls = document.createElement('div');
    carWithControls.classList.add('car-with-controls');
    wrapper.appendChild(carWithControls);

    const aButton = document.createElement('button');
    aButton.classList.add('button');
    aButton.classList.add('a');
    aButton.textContent = 'A';
    carWithControls.appendChild(aButton);

    const bButton = document.createElement('button');
    bButton.classList.add('button');
    bButton.classList.add('changing');
    bButton.classList.add('b');
    bButton.textContent = 'B';
    bButton.setAttribute('disabled', 'disabled');
    carWithControls.appendChild(bButton);

    const track = document.createElement('div');
    track.classList.add('track');
    carWithControls.appendChild(track);

    const carInstance = document.createElement('div');
    carInstance.classList.add(`car-instance${car.id}`);
    carInstance.innerHTML = paintCar (car.color);
    track.appendChild(carInstance);

    const flag = document.createElement('div');
    flag.classList.add('flag');
    flag.innerHTML = `<svg width="35px" height="30px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1V16H3V10H7L9 12H15V3H9L7 1H1Z" fill="#C51616"/></svg>`;
    track.appendChild(flag);

    let player: Animation;

    aButton.addEventListener ('click', async () => {
        const response = await startStopCar ('started', car.id);
        const animationTime = response.distance / response.velocity;
        const animationWidth = track.clientWidth - carInstance.clientWidth;
        player = movingCar (carInstance, animationTime, animationWidth);
        animationArr[i] = player;

        aButton.setAttribute ('disabled', 'disabled');
        bButton.removeAttribute ('disabled');

        const driveMode = await switchDrive ('drive', car.id);
        if (driveMode === 500) {
            player.pause();
        }
    })

    bButton.addEventListener ('click', async () => {
        await startStopCar ('stopped', car.id);
        bButton.setAttribute ('disabled', 'disabled');
        aButton.removeAttribute ('disabled');

        player.cancel();
        animationArr.slice(i, i+1);
    })
}

async function drawGarage(wrapper:HTMLDivElement, func: () => Promise<void>):Promise<void> {
    const cars = await getCars ();

    const garageWrapper = document.createElement('div');
    garageWrapper.classList.add('garage-wrapper');
    wrapper.appendChild(garageWrapper);

    const heading = document.createElement('h2');
    heading.classList.add('heading');
    heading.textContent = `Garage (${cars.length})`;
    garageWrapper.appendChild(heading);

    const subHeading = document.createElement('h3');
    subHeading.classList.add('sub-heading');
    subHeading.textContent = `Page #${currentPage}`; 
    garageWrapper.appendChild(subHeading);

    const garage = document.createElement('div');
    garage.classList.add('garage');
    garageWrapper.appendChild(garage);

    const currentCars = await displayCurrentCars ();

    currentCars.forEach ((el, i) => {
        const carContainer = document.createElement('div');
        carContainer.classList.add('car-container');
        garage.appendChild(carContainer);

        drawCarButtons (carContainer, el, func);

        drawCarWithControls (carContainer, el, i);
    })
}

async function drawPaginationButtons (wrapper: HTMLDivElement, func: () => Promise<void>):Promise<void> {
    const cars = await getCars ();

    const prevButton = document.createElement('button');
    prevButton.classList.add('button');
    prevButton.classList.add('changing');
    prevButton.classList.add('prev');
    prevButton.textContent = 'PREV';
    if (currentPage === 1) prevButton.setAttribute('disabled', 'disabled');
    wrapper.appendChild(prevButton);

    const nextButton = document.createElement('button');
    nextButton.classList.add('button');
    nextButton.classList.add('changing');
    nextButton.classList.add('next');
    nextButton.textContent = 'NEXT';
    if (cars.length <= carsOnPage || currentPage === Math.ceil(cars.length / carsOnPage)) nextButton.setAttribute('disabled', 'disabled');
    wrapper.appendChild(nextButton);

    nextButton.addEventListener('click', () => {
        currentPage += 1;
        isWinner = false;
        const garageContainer = document.querySelector('.garage-container') as HTMLDivElement;
        garageContainer.remove();
        func ();
    })

    prevButton.addEventListener('click', () => {
        currentPage -= 1;
        isWinner = false;
        const garageContainer = document.querySelector('.garage-container') as HTMLDivElement;
        garageContainer.remove();
        func ();
    })
}

export default async function createGarage ():Promise<void> {
    const garageContainer = document.createElement('div');
    garageContainer.classList.add('garage-container');
    document.body.appendChild(garageContainer);

    window.addEventListener ('DOMContentLoaded', async () => {
        const currentCars = await displayCurrentCars ();
        currentCars.forEach(el => startStopCar ('stopped', el.id));
    })

    drawCreateBlock (garageContainer, createGarage);
    drawUpdateBlock (garageContainer, createGarage);
    drawButtonsBlock (garageContainer, createGarage);
    await drawGarage (garageContainer, createGarage);
    drawPaginationButtons (garageContainer, createGarage);
}