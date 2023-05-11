let fieldSize = 10;
let numberOfBombs = 10;

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
    bombIcon.src = './assets/icons/bomb_87682.png';
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

    function generateField(size) {
        const field = document.querySelector('.field');
        field.style.width = size * 20 + size * 2 + 'px';
    
        for(let i = 0; i < Math.pow(size, 2); i++) {
            const tile = document.createElement('button');
            tile.classList.add('tile');
            field.appendChild(tile);
        }
    }

    generateField(fieldSize);

    const tiles = [...document.querySelector('.field').children];
    const bombsOnField = [...Array(Math.pow(fieldSize, 2)).keys()]
        .sort(() => Math.random() - 0.5)
        .slice(0, numberOfBombs); // generate bombs position
    
    function checkCoordValidity(row, column) {
        if(row < fieldSize && row >= 0 && column < fieldSize && column >= 0) return true;
        else return false;
    }
    
    function checkBomb(row, column) {
        if(checkCoordValidity(row, column) === false) return false;
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

    let openedTiles = 0;
    
    function openTile(row, column) {
        if(checkCoordValidity(row, column) === false) return;
        const index = row * fieldSize + column;
        const tile = tiles[index];
        if(tile.disabled === true) return;

        tile.setAttribute("disabled", "disabled");
        tile.classList.add('open-tile');

        if(checkBomb(row, column) === true) {
            const bomb = document.createElement('img');
            bomb.src = './assets/icons/bomb_87682.png';
            bomb.style.width = '16px';
            tile.appendChild(bomb);
            tile.classList.remove('open-tile');
            tile.classList.add('open-bomb');
            return alert('you loose');
        }

        if(checkBomb(row, column) === false) {
            const number = getNumber(row, column);
            if(number !== 0) {
                tile.textContent = number;
                if(number === 1) tile.style.color = 'blue';
                if(number === 2) tile.style.color = 'green';
                if(number === 3) tile.style.color = 'red';
                if(number === 4) tile.style.color = 'darkblue';
                if(number === 5) tile.style.color = 'brown';
                if(number === 6) tile.style.color = 'aqua';
                if(number === 7) tile.style.color = 'black';
                if(number === 8) tile.style.color = 'gold';
            }
            if(number === 0) {
                for(let i = -1; i <= 1; i++) {
                    for(let j = -1; j <= 1; j++) {
                        openTile(row + j, column + i);
                    }
                }
            }
        }

        openedTiles++;
        if(openedTiles >= Math.pow(fieldSize, 2) - numberOfBombs) alert('you won!');
    }

    function setFlag(row, column) {
        const index = row * fieldSize + column;
        const tile = tiles[index];

        if(tile.disabled === true) return;

        const flag = document.createElement('img');
        flag.src = './assets/icons/powerful4x_86978.png';
        flag.style.width = '16px';
        tile.appendChild(flag);
    }

    document.querySelector('.field').addEventListener('click', function(event) {
        const index = tiles.indexOf(event.target);
        const column = index % fieldSize;
        const row = Math.floor(index / fieldSize);
        openTile(row, column);
    })

    document.querySelector('.field').addEventListener('contextmenu', function(event) {
        event.preventDefault();
        const index = tiles.indexOf(event.target);
        const column = index % fieldSize;
        const row = Math.floor(index / fieldSize);
        setFlag(row, column);
    })
}    

initGame();