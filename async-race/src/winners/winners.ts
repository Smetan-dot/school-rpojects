import { getWinners, getCar, Winner } from "../server/server";
import { paintCar } from "../car";

const winnersOnPage = 10;
let currentPage = 1;

async function displayCurrentWinners (): Promise<Winner[]> {
  const winners = await getWinners ();
  const start = winnersOnPage * currentPage - winnersOnPage;
  const end = start + winnersOnPage;
  return winners.slice(start, end);
}

async function drawWinners (wrapper: HTMLDivElement):Promise<void> {
    const winners = await getWinners();

    const heading = document.createElement('h2');
    heading.classList.add('heading');
    heading.textContent = `Winners (${winners.length})`;
    wrapper.appendChild(heading);

    const subHeading = document.createElement('h3');
    subHeading.classList.add('sub-heading');
    subHeading.textContent = `Page #${currentPage}`; 
    wrapper.appendChild(subHeading);

    const table = document.createElement('table');
    table.innerHTML = `
    <thead id="table-head">
      <tr>
        <th>Number</th><th>Car</th><th id="name">Name</th><th>Wins</th><th>Best Time</th>
      </tr>
    </thead>`
    wrapper.appendChild(table);

    const tBody = document.createElement('tbody');
    table.appendChild(tBody);

    const currentWinners = await displayCurrentWinners ();

    currentWinners.forEach (async (el, i) => {
        const car = await getCar (el.id);
        const tableRow = document.createElement('tr');
        tableRow.innerHTML = `<td>${(currentPage * winnersOnPage - winnersOnPage) + i + 1}</td><td>${paintCar (car.color)}</td><td id="name">${car.name}</td><td>${el.wins}</td><td>${el.time}</td>`;
        tBody.appendChild(tableRow);
    })
}

async function drawPaginationButtons (wrapper: HTMLDivElement, func: () => Promise<void>):Promise<void> {
  const winners = await getWinners();

  const prevButton = document.createElement('button');
  prevButton.classList.add('button');
  prevButton.classList.add('changing');
  prevButton.textContent = 'PREV';
  if (currentPage === 1) prevButton.setAttribute('disabled', 'disabled');
  wrapper.appendChild(prevButton);

  const nextButton = document.createElement('button');
  nextButton.classList.add('button');
  nextButton.classList.add('changing');
  nextButton.textContent = 'NEXT';
  if (winners.length <= winnersOnPage || currentPage === Math.ceil(winners.length / winnersOnPage)) nextButton.setAttribute('disabled', 'disabled');
  wrapper.appendChild(nextButton);

  prevButton.addEventListener ('click', () => {
      currentPage -= 1;
      const winnersContainer = document.querySelector('.winners-container') as HTMLDivElement;
      winnersContainer.remove();
      func ();
  })

  nextButton.addEventListener ('click', () => {
      currentPage += 1;
      const winnersContainer = document.querySelector('.winners-container') as HTMLDivElement;
      winnersContainer.remove();
      func ();
  })
}

export default async function createWinners ():Promise<void> {
    const winnersButton = document.querySelector('.win') as HTMLButtonElement;

    const winnersContainer = document.createElement('div');
    winnersContainer.classList.add('winners-container');
    if (!winnersButton.classList.contains('chosen')) winnersContainer.classList.add('hide');
    document.body.appendChild(winnersContainer);

    await drawWinners (winnersContainer);
    drawPaginationButtons (winnersContainer, createWinners);
}