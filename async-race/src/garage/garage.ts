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

type Car = {
    "name": string,
    "color": string,
    "id": number
}

async function getCars (): Promise<Car[]> {
    const data = await fetch ('http://127.0.0.1:3000/garage');
    const cars = await data.json();
    return cars;
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

function drawCar (wrapper: HTMLDivElement, car: Car):void {
    const carInstance = document.createElement('div');
    carInstance.innerHTML = `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill=${car.color} width="60px" x="0px" y="0px" viewBox="0 110 512.005 260.005" style="enable-background:new 0 0 512.005 512.005;" xml:space="preserve" transform="matrix(-1,0,0,1,0,0)">
    <g>
        <g>
            <path d="M400.904,285.275c-23.554,0-42.716,19.162-42.716,42.716c0,23.554,19.162,42.716,42.716,42.716
                c23.553,0,42.716-19.162,42.716-42.716C443.62,304.437,424.449,285.275,400.904,285.275z M400.904,353.62
                c-14.13,0-25.63-11.499-25.63-25.63s11.499-25.629,25.63-25.629c14.13,0,25.629,11.499,25.629,25.629
                S415.034,353.62,400.904,353.62z"></path>
        </g>
    </g>
    <g>
        <g>
            <path d="M110.437,285.275c-23.554,0-42.716,19.162-42.716,42.716c0,23.554,19.162,42.716,42.716,42.716
                c23.553,0,42.716-19.162,42.716-42.716C153.152,304.437,133.981,285.275,110.437,285.275z M110.437,353.62
                c-14.13,0-25.63-11.499-25.63-25.63s11.499-25.629,25.63-25.629c14.13,0,25.629,11.499,25.629,25.629
                S124.567,353.62,110.437,353.62z"></path>
        </g>
    </g>
    <g>
        <g>
            <path d="M503.422,257.578v-40.648c0-0.273-0.325-1.88-0.496-2.435c-0.171-0.564-0.376-1.076-0.649-1.589
                c-0.128-0.231-34.463-51.977-34.463-51.977c-1.307-1.956-3.366-3.298-5.698-3.691c-214.023-35.924-268.879-0.145-271.382,1.598
                L124.387,208.6l-108.583,8.347c-3.076,0.239-5.784,2.119-7.082,4.904c-0.325,0.683-3.545,7.92-5.989,20.7l-2.247,17.086
                c-1.35,17.941-0.231,41.793,7.757,70.677c1.008,3.656,4.425,6.211,8.219,6.211h25.629c4.741,0,8.535-3.896,8.543-8.637
                c0-0.043,0.009-0.085,0.009-0.137c0.128-32.917,26.843-59.571,59.794-59.571c33.028,0,59.802,26.774,59.802,59.802
                c-0.615,5.186,3.477,8.543,8.543,8.543h153.777c4.741,0,8.535-3.896,8.543-8.637c0-0.051,0.009-0.094,0.009-0.145
                c0.137-32.917,26.843-59.554,59.794-59.554c33.028,0,59.802,26.774,59.802,59.802c-0.615,5.186,3.477,8.543,8.543,8.543h25.629
                c2.982,0,5.844-1.538,7.321-4.126C521.098,299.063,507.608,266.198,503.422,257.578z M272.757,204.123L272.757,204.123
                c0,2.358-1.914,4.272-4.272,4.272l-102.561,0.009c-4.101,0-5.844-5.228-2.563-7.689l37.052-27.799
                c0.128-0.103,0.231-0.171,0.376-0.256c1.939-1.111,19.615-10.474,67.38-13.387c2.452-0.154,4.588,1.82,4.588,4.28V204.123z
                 M361.768,208.395l-67.662,0.009c-2.358,0-4.272-1.914-4.272-4.272v-41.409c0-2.349,1.828-4.272,4.178-4.289
                c13.327-0.094,28.363,0.282,45.304,1.307c1.461,0.085,2.811,0.897,3.528,2.178c3.81,6.817,16.403,29.081,22.656,40.127
                C367.124,204.892,365.04,208.386,361.768,208.395z M470.932,208.386l-79.682,0.009c-1.529,0-2.947-0.82-3.708-2.153
                l-21.537-37.692c-1.717-2.999,0.607-6.715,4.049-6.39c24.519,2.324,52.267,5.852,83.714,11.021
                c1.17,0.196,2.247,0.871,2.913,1.862l17.804,26.706C476.374,204.585,474.341,208.386,470.932,208.386z"></path>
        </g>
    </g>
    </svg>`;
    wrapper.appendChild(carInstance);
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

    drawCar (track, car);

    const flag = document.createElement('div');
    flag.classList.add('flag');
    flag.innerHTML = `<svg width="35px" height="30px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1V16H3V10H7L9 12H15V3H9L7 1H1Z" fill="#C51616"/></svg>`;
    track.appendChild(flag);
}

async function drawGarage(wrapper:HTMLDivElement):Promise<void> {
    const cars = await getCars();
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

function drawPaginationButtons (wrapper: HTMLDivElement):void {
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

export default async function createGarage ():Promise<void> {
    const garageContainer = document.createElement('div');
    garageContainer.classList.add('garage-container');
    document.body.appendChild(garageContainer);

    drawCreateBlock (garageContainer);
    drawUpdateBlock (garageContainer);
    drawButtonsBlock (garageContainer);
    await drawGarage (garageContainer);
    drawPaginationButtons (garageContainer);
}