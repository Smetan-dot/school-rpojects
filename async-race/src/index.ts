import './index.css';
import './garage/garage.css';
import './winners/winners.css';
import createGarage from './garage/garage';
import createWinners from './winners/winners';

function createHeader(): void {
    const header = document.createElement('header');
    document.body.appendChild(header);

    const garageButton = document.createElement('button');
    garageButton.classList.add('button');
    garageButton.classList.add('gar');
    garageButton.classList.add('chosen');
    garageButton.textContent = 'TO GARAGE';
    header.appendChild(garageButton);

    const winnersButton = document.createElement('button');
    winnersButton.classList.add('button');
    winnersButton.classList.add('win');
    winnersButton.textContent = 'TO WINNERS';
    header.appendChild(winnersButton);

    garageButton.addEventListener('click', () => {
        winnersButton.classList.remove('chosen');
        garageButton.classList.add('chosen');
        document.querySelector('.winners-container')?.classList.add('hide');
        document.querySelector('.garage-container')?.classList.remove('hide');
    })

    winnersButton.addEventListener('click', () => {
        winnersButton.classList.add('chosen');
        garageButton.classList.remove('chosen');
        document.querySelector('.garage-container')?.classList.add('hide');
        document.querySelector('.winners-container')?.classList.remove('hide');
    })
}

async function initRace(): Promise<void> {
    createHeader();
    await createGarage();
    await createWinners();
}

initRace();