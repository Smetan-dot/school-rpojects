import './index.css';
import './garage/garage.css';
import './winners/winners.css';
import { createGarage } from './garage/garage';
import createWinners from './winners/winners';

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

    garageButton.addEventListener('click', () => {
        document.querySelector('.winners-container')?.classList.add('hide');
        document.querySelector('.garage-container')?.classList.remove('hide');
    })

    winnersButton.addEventListener('click', () => {
        document.querySelector('.garage-container')?.classList.add('hide');
        document.querySelector('.winners-container')?.classList.remove('hide');
    })
}

async function initRace ():Promise<void> {
    createHeader ();
    createGarage ();
    createWinners ();
}

initRace ();