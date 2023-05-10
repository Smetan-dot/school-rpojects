let fieldSize = 10;
let numberOfBombs = 20;

function initGame () {
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    document.body.appendChild(wrapper);

    const gameHeader = document.createElement('div');
    gameHeader.classList.add('header');
    wrapper.appendChild(gameHeader);

    const gameField = document.createElement('div');
    gameField.classList.add('field');
    wrapper.appendChild(gameField);

    const timeWrapper = document.createElement('div');
    timeWrapper.classList.add('time-wrapper');
    timeWrapper.textContent = 'Time';
    gameHeader.appendChild(timeWrapper);

    const time = document.createElement('span');
    time.classList.add('time');
    time.textContent = '0:00';
    timeWrapper.appendChild(time);

    const turnsWrapper = document.createElement('div');
    turnsWrapper.classList.add('turns-wrapper');
    turnsWrapper.textContent = 'Turns';
    gameHeader.appendChild(turnsWrapper);

    const turns = document.createElement('span');
    turns.classList.add('turns');
    turns.textContent = '0';
    turnsWrapper.appendChild(turns);

    const newGame = document.createElement('a');
    newGame.classList.add('new-game');
    newGame.textContent = 'New Game';
    gameHeader.appendChild(newGame);

    const bombsCounter = document.createElement('div');
    bombsCounter.classList.add('bombs');
    gameHeader.appendChild(bombsCounter);

    const bombIcon = document.createElement('img');
    bombIcon.src = './assets/icons/bomb_87682.svg';
    bombIcon.classList.add('bombs-icon');
    bombsCounter.appendChild(bombIcon);

    const bomb = document.createElement('span');
    bomb.classList.add('bomb');
    bomb.textContent = '10';
    bombsCounter.appendChild(bomb);

    const flagsCounter = document.createElement('div');
    flagsCounter.classList.add('flags');
    gameHeader.appendChild(flagsCounter);

    const flagIcon = document.createElement('img');
    flagIcon.src = './assets/icons/powerful4x_86978.png';
    flagIcon.classList.add('flags-icon');
    flagsCounter.appendChild(flagIcon);

    const flag = document.createElement('span');
    flag.classList.add('flag');
    flag.textContent = '0';
    flagsCounter.appendChild(flag);

    generateField(fieldSize);

    const tiles = [...document.querySelector('.field').children];
    const bombsOnField = [...Array(Math.pow(fieldSize, 2)).keys()]
        .sort(() => Math.random() - 0.5)
        .slice(0, numberOfBombs); // generate bombs position
    
    function checkCoord(row, column) {
        if(row < fieldSize && row >= 0 && column < fieldSize && column >= 0) return true;
        else return false;
    }
    
    function checkBomb(row, column) {
        if(checkCoord(row, column) === false) return false;
        const index = row * fieldSize + column;
        if(bombsOnField.includes(index)) return true;
        else return false;
    }

    function getNumber(row, column) {
        let count = 0;
        for(let i = -1; i <= 1; i++) {
            for(let j = -1; j <= 1; j++) {
                if(checkBomb(row + j, column + i)) count++;
            }
        }
        return count;
    }
    
    function openTile(row, column) {
        const index = row * fieldSize + column;
        const tile = tiles[index];
        if(checkBomb(row, column) === true) {
            const bomb = document.createElement('img');
            bomb.src = './assets/icons/bomb_87682.svg';
            bomb.style.width = '13px';
            tile.appendChild(bomb);
            tile.setAttribute("disabled", "disabled");
            tile.classList.add('open-bomb');
        }
        if(checkBomb(row, column) === false) {
            tile.classList.add('open-tile');
            tile.setAttribute("disabled", "disabled");
            tile.textContent = getNumber(row, column);
        }
    }

    document.querySelector('.field').addEventListener('click', function(event) {
        const index = tiles.indexOf(event.target);
        const column = index % fieldSize;
        const row = Math.floor(index / fieldSize);
        openTile(row, column);
    })
}    

initGame();

function generateField(size) {
    const field = document.querySelector('.field');
    field.style.width = size * 20 + size * 2 + 'px';

    for(let i = 0; i < Math.pow(size, 2); i++) {
        const tile = document.createElement('button');
        tile.classList.add('tile');
        field.appendChild(tile);
    }
}