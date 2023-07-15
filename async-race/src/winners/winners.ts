import { getWinners, getCar } from "../server/server";
import { paintCar } from "../car";

const winnersOnPage = 10;
const currentPage = 1;

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

    winners.forEach (async (el, i) => {
        const tableRow = document.createElement('tr');
        const car = await getCar (el.id);
        tableRow.innerHTML = `<td>${i + 1}</td><td>${paintCar (car.color)}</td><td id="name">${car.name}</td><td>${el.wins}</td><td>${el.time}</td>`;
        tBody.appendChild(tableRow);
    })
}

async function drawPaginationButtons (wrapper: HTMLDivElement):Promise<void> {
  const winners = await getWinners();

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
  if (winners.length <= winnersOnPage) nextButton.setAttribute('disabled', 'disabled');
  wrapper.appendChild(nextButton);
}

export default async function createWinners ():Promise<void> {
    const winnersContainer = document.createElement('div');
    winnersContainer.classList.add('winners-container');
    winnersContainer.classList.add('hide');
    document.body.appendChild(winnersContainer);

    await drawWinners (winnersContainer);
    drawPaginationButtons (winnersContainer);
}