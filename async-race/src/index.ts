import './index.css';
import './garage/garage.css';
import createGarage from './garage/garage';

function createHeader ():void {
    const header = document.createElement('header');
    document.body.appendChild(header);

    const garageButton = document.createElement('button');
    garageButton.classList.add('button');
    garageButton.textContent = 'TO GARAGE';
    header.appendChild(garageButton);

    const winnersButton = document.createElement('button');
    winnersButton.classList.add('button');
    winnersButton.textContent = 'TO WINNERS';
    header.appendChild(winnersButton);
}

async function initRace ():Promise<void> {
    createHeader ();
    createGarage ();
}

initRace ();