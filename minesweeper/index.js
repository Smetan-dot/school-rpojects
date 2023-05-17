let fieldSize = localStorage.fieldSize;
let numberOfBombs = localStorage.numberOfBombs;
let usedFlags = 0;
let madeTurns = 0;
let openedTiles = 0;
let interval;
let theme = localStorage.theme;
let sounds = localStorage.sounds;
let results = JSON.parse(localStorage.getItem('results'));

const opening = new Audio('./assets/sounds/69880c1f5e57698.mp3');
const makeFlag = new Audio('./assets/sounds/mouth_foley_puff_09.mp3');
const winning = new Audio('./assets/sounds/135d7e644a64b2d.mp3');
const loosing = new Audio('./assets/sounds/817ae0e83595a08.mp3');

function setLocalStorage() {
    localStorage.setItem('theme', theme);
    localStorage.setItem('sounds', sounds);
    localStorage.setItem('results', JSON.stringify(results));
    localStorage.setItem('fieldSize', fieldSize);
    localStorage.setItem('numberOfBombs', numberOfBombs);
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
    if(localStorage.getItem('theme')) theme = localStorage.theme;
    if(localStorage.getItem('sounds')) sounds = localStorage.sounds;
    if(localStorage.getItem('results')) results = JSON.parse(localStorage.getItem('results'));
    if(localStorage.getItem('fieldSize')) fieldSize = localStorage.fieldSize;
    if(localStorage.getItem('numberOfBombs')) numberOfBombs = localStorage.numberOfBombs;
}
window.addEventListener('load', getLocalStorage);

function initGame () {
    checkNumberOfBombs();

    const favicon = document.createElement('link');
    favicon.setAttribute('rel', 'icon');
    favicon.href = './assets/icons/free-icon-bomb-8598672.png';
    document.head.appendChild(favicon);

    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    document.body.appendChild(wrapper);

    const table = document.createElement('table');
    table.classList.add('table');
    wrapper.appendChild(table);

    const tableMainRow = document.createElement('tr');
    table.appendChild(tableMainRow);

    const tableTime = document.createElement('td');
    tableTime.classList.add('table-item');
    tableTime.style.fontSize = '20px';
    tableTime.textContent = 'time';
    tableMainRow.appendChild(tableTime);

    const tableMines = document.createElement('td');
    tableMines.classList.add('table-item');
    tableMines.style.fontSize = '20px';
    tableMines.textContent = 'mines';
    tableMainRow.appendChild(tableMines);

    const tableTurns = document.createElement('td');
    tableTurns.classList.add('table-item');
    tableTurns.style.fontSize = '20px';
    tableTurns.textContent = 'turns';
    tableMainRow.appendChild(tableTurns);

    const tableResult = document.createElement('td');
    tableResult.classList.add('table-item');
    tableResult.style.fontSize = '20px';
    tableResult.textContent = 'result';
    tableMainRow.appendChild(tableResult);

    const gameHeader = document.createElement('div');
    gameHeader.classList.add('header');
    wrapper.appendChild(gameHeader);

    const p = document.createElement('p');
    p.classList.add('result');
    wrapper.appendChild(p);

    const gameField = document.createElement('div');
    gameField.classList.add('field');
    wrapper.appendChild(gameField);

    const settings = document.createElement('div');
    settings.classList.add('settings');
    wrapper.appendChild(settings);

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
    turns.textContent = madeTurns;
    turnsWrapper.appendChild(turns);

    const newGame = document.createElement('a');
    newGame.classList.add('new-game');
    newGame.textContent = 'New Game';
    gameHeader.appendChild(newGame);

    const bombsCounter = document.createElement('div');
    bombsCounter.classList.add('bombs');
    gameHeader.appendChild(bombsCounter);

    const bombIcon = document.createElement('img');
    bombIcon.src = './assets/icons/free-icon-bomb-8598672.png';
    bombIcon.classList.add('bombs-icon');
    bombsCounter.appendChild(bombIcon);

    const bomb = document.createElement('span');
    bomb.classList.add('bomb');
    bomb.textContent = numberOfBombs;
    bombsCounter.appendChild(bomb);

    const flagsCounter = document.createElement('div');
    flagsCounter.classList.add('flags');
    gameHeader.appendChild(flagsCounter);

    const flagIcon = document.createElement('img');
    flagIcon.src = './assets/icons/free-icon-flag-4908307.png';
    flagIcon.classList.add('flags-icon');
    flagsCounter.appendChild(flagIcon);

    const flag = document.createElement('span');
    flag.classList.add('flag');
    flag.textContent = '0';
    flagsCounter.appendChild(flag);

    const difficalty = document.createElement('div');
    difficalty.classList.add('difficalty');
    difficalty.textContent = 'Choose field-size';
    settings.appendChild(difficalty);

    const easy = document.createElement('button');
    easy.textContent = 'Easy (10x10)';
    easy.classList.add('difficalty-item');
    difficalty.appendChild(easy);

    const medium = document.createElement('button');
    medium.textContent = 'Medium (15x15)';
    medium.classList.add('difficalty-item');
    difficalty.appendChild(medium);

    const hard = document.createElement('button');
    hard.textContent = 'Hard (25x25)';
    hard.classList.add('difficalty-item');
    difficalty.appendChild(hard);

    const amountBombs = document.createElement('div');
    amountBombs.classList.add('amount-bombs');
    amountBombs.textContent = 'Choose amount of bombs';
    settings.appendChild(amountBombs);

    const inputBombs = document.createElement('input');
    inputBombs.type = 'range';
    inputBombs.min = '10';
    inputBombs.max = '99';
    inputBombs.value = numberOfBombs;
    inputBombs.classList.add('amount-bombs-item');
    amountBombs.appendChild(inputBombs);

    const themes = document.createElement('div');
    themes.classList.add('themes');
    themes.textContent = 'Choose a theme';
    settings.appendChild(themes);

    const light = document.createElement('button');
    light.setAttribute('disabled', 'disabled');
    light.classList.add('themes-item');
    light.textContent = 'light';
    themes.appendChild(light);

    const dark = document.createElement('button');
    dark.classList.add('themes-item');
    dark.textContent = 'dark';
    themes.appendChild(dark);

    const sound = document.createElement('div');
    sound.classList.add('sound');
    sound.textContent = 'Sounds:';
    amountBombs.appendChild(sound);

    const soundOn = document.createElement('button');
    soundOn.classList.add('sound-item');
    soundOn.textContent = 'On';
    sound.appendChild(soundOn);

    const soundOff = document.createElement('button');
    soundOff.classList.add('sound-item');
    soundOff.textContent = 'Off';
    sound.appendChild(soundOff);

    const rangeTable = document.createElement('div');
    rangeTable.textContent = 'Last games results';
    rangeTable.classList.add('range-table');
    amountBombs.appendChild(rangeTable);

    function checkTheme() {
        if(theme === undefined) theme = 'light';
        if(theme === 'light') {
            document.body.style.backgroundColor = 'aliceblue';
            document.body.style.color = 'black';
            turnsWrapper.style.borderColor = 'black';
            timeWrapper.style.borderColor = 'black';

            light.setAttribute('disabled', 'disabled');
            dark.removeAttribute('disabled', 'disabled');
        }
        if(theme === 'dark') {
            document.body.style.backgroundColor = 'dimgray';
            document.body.style.color = 'white';
            turnsWrapper.style.borderColor = 'white';
            timeWrapper.style.borderColor = 'white';

            dark.setAttribute('disabled', 'disabled');
            light.removeAttribute('disabled', 'disabled');
        }
    }

    function checkSound() {
        if(sounds === undefined) sounds = 'on';
        if(sounds === 'on') {
            soundOn.setAttribute('disabled', 'disabled');
            soundOff.removeAttribute('disabled', 'disabled');
        }
        if(sounds === 'off') {
            soundOn.removeAttribute('disabled', 'disabled');
            soundOff.setAttribute('disabled', 'disabled');
        }
    }

    function checkResults() {
        if(results === null) results = [];
    }

    function checkFieldSize() {
        if(fieldSize === undefined) fieldSize = 10;
        if(fieldSize === '10' || fieldSize === 10) {
            easy.setAttribute('disabled', 'disabled');
            medium.removeAttribute('disabled', 'disabled');
            hard.removeAttribute('disabled', 'disabled');
        }
        if(fieldSize === '15' || fieldSize === 15) {
            easy.removeAttribute('disabled', 'disabled');
            medium.setAttribute('disabled', 'disabled');
            hard.removeAttribute('disabled', 'disabled');
        }
        if(fieldSize === '25' || fieldSize === 25) {
            easy.removeAttribute('disabled', 'disabled');
            medium.removeAttribute('disabled', 'disabled');
            hard.setAttribute('disabled', 'disabled');
        }
    }

    function checkNumberOfBombs() {
        if(numberOfBombs === undefined) numberOfBombs = 10;
    }

    function generateField(size) {
        const field = document.querySelector('.field');
        field.style.width = size * 17 + size * 2 + 'px';

        for(let i = 0; i < Math.pow(size, 2); i++) {
            const tile = document.createElement('button');
            tile.classList.add('tile');
            field.appendChild(tile);
        }
    }

    checkTheme();
    checkSound();
    checkResults();
    checkFieldSize();
    generateField(fieldSize);
    
    const tiles = [...document.querySelector('.field').children];
    let bombsOnField = [...Array(Math.pow(fieldSize, 2)).keys()]
        .sort(() => Math.random() - 0.5)
        .slice(0, numberOfBombs); // generate bombs position

    function restartGame() {
        usedFlags = 0;
        madeTurns = 0;
        openedTiles = 0;
        numberOfBombs = document.querySelector('.amount-bombs-item').value;
        clearInterval(interval);
        document.body.innerHTML = '';

        initGame();
    }
    
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
 
    function openTile(row, column) {
        if(checkCoordValidity(row, column) === false) return;
        const index = row * fieldSize + column;
        const tile = tiles[index];
        if(tile.disabled === true || tile.classList.contains('right')) return;

        tile.setAttribute("disabled", "disabled");
        tile.classList.add('open-tile');

        if(checkBomb(row, column) === true) {
            tile.classList.remove('open-tile');
            openAllBombs();
            clearInterval(interval);
            if(sounds ==='on') loosing.play();
            gameField.classList.add('blocked');

            let result = {};
            result.time = time.textContent;
            result.mines = document.querySelector('.amount-bombs-item').value;
            result.turns = Number(turns.textContent) + 1;
            result.res = 'loose';
            if(results.length < 10) results.unshift(result);
            if(results.length >= 10) {
                results.pop();
                results.unshift(result);
            }
            p.textContent = '!!!You loose!!!';
            return;
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
            if(sounds ==='on') opening.play();
        }

        openedTiles++;
        if(openedTiles >= Math.pow(fieldSize, 2) - numberOfBombs || 
            openedTiles >= Math.pow(fieldSize, 2) - usedFlags) {
                clearInterval(interval);
                p.textContent = '!!!You won!!!';
                if(sounds ==='on') winning.play();
                gameField.classList.add('blocked');

                let result = {};
                result.time = time.textContent;
                result.mines = document.querySelector('.amount-bombs-item').value;
                result.turns = Number(turns.textContent) + 1;
                result.res = 'win';
                if(results.length < 10) results.unshift(result);
                if(results.length >= 10) {
                    results.pop();
                    results.unshift(result);
                }
        }
    }

    function setFlag(row, column) {
        const index = row * fieldSize + column;
        const tile = tiles[index];

        if(tile.disabled === true) return;

        if(tile.classList.contains('right')) {
            tile.classList.remove('right');

            usedFlags--;
            numberOfBombs++;
            document.querySelector('.flag').textContent = usedFlags;
            document.querySelector('.bomb').textContent = numberOfBombs;
        }
        else {
            tile.classList.add('right');
        
            usedFlags++;
            if(numberOfBombs > 0) numberOfBombs--;
            document.querySelector('.flag').textContent = usedFlags;
            document.querySelector('.bomb').textContent = numberOfBombs;
        }

        if(openedTiles >= Math.pow(fieldSize, 2) - numberOfBombs || 
            openedTiles >= Math.pow(fieldSize, 2) - usedFlags) {
                clearInterval(interval);
                p.textContent = '!!!You won!!!';
                if(sounds ==='on') winning.play();
                gameField.classList.add('blocked');

                let result = {};
                result.time = time.textContent;
                result.mines = document.querySelector('.amount-bombs-item').value;
                result.turns = Number(turns.textContent) + 1;
                result.res = 'win';
                if(results.length < 10) results.unshift(result);
                if(results.length >= 10) {
                    results.pop();
                    results.unshift(result);
                }
        }
    }

    function getTimeFromNum(num) {
        let seconds = parseInt(num);
        let minutes = parseInt(seconds / 60);
        seconds -= minutes * 60;
        const hours = parseInt(minutes / 60);
        minutes -= hours * 60;
      
        if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
        return `${String(hours).padStart(2, 0)}:${minutes}:${String(seconds % 60).padStart(2, 0)}`;
    }

    function timer() {
        if(madeTurns === 0) {
            let num = 0;
            interval = setInterval(() => {
                num++;
                document.querySelector('.time').textContent = getTimeFromNum(num);
            }, 1000);
        }
    }

    function shuffleBombsPosition(event) {
        const index = tiles.indexOf(event.target);
        if(bombsOnField.includes(index)) {
            bombsOnField = [...Array(Math.pow(fieldSize, 2)).keys()]
            .sort(() => Math.random() - 0.5)
            .slice(0, numberOfBombs);
            return shuffleBombsPosition(event);
        }
        else return;
    }

    function displayResults() {
        if(results === null) return;
        for(let i = 0; i < results.length; i++) {
            const tableRow = document.createElement('tr');
            if(i % 2 === 0 || i === 0) tableRow.style.backgroundColor = 'yellowgreen';
            if(i % 2 === 1) tableRow.style.backgroundColor = 'lightskyblue';
            table.appendChild(tableRow);

            const tableTime = document.createElement('td');
            tableTime.classList.add('table-item');
            tableTime.textContent = `${results[i].time}`;
            tableRow.appendChild(tableTime);

            const tableMines = document.createElement('td');
            tableMines.classList.add('table-item');
            tableMines.textContent = results[i].mines;
            tableRow.appendChild(tableMines);

            const tableTurns = document.createElement('td');
            tableTurns.classList.add('table-item');
            tableTurns.textContent = results[i].turns;
            tableRow.appendChild(tableTurns);

            const tableResult = document.createElement('td');
            tableResult.classList.add('table-item');
            tableResult.textContent = results[i].res;
            tableRow.appendChild(tableResult);
        }
    }

    function openAllBombs() {
        for(let i = 0; i < bombsOnField.length; i++) {
            const index = bombsOnField[i];
            const tile = tiles[index];
            const bomb = document.createElement('img');
            bomb.src = './assets/icons/free-icon-bomb-8598672.png';
            bomb.style.width = '14px';
            tile.appendChild(bomb);
            tile.classList.add('open-bomb');
        }
    }

    displayResults();

    document.querySelector('.field').addEventListener('click', shuffleBombsPosition, {once: true});

    document.querySelector('.field').addEventListener('click', timer, {once: true});

    document.querySelector('.field').addEventListener('click', function(event) {
        const index = tiles.indexOf(event.target);
        const column = index % fieldSize;
        const row = Math.floor(index / fieldSize);
        openTile(row, column);

        madeTurns++;
        document.querySelector('.turns').textContent = madeTurns;
    })

    document.querySelector('.field').addEventListener('contextmenu', function(event) {
        event.preventDefault();
        const index = tiles.indexOf(event.target);
        const column = index % fieldSize;
        const row = Math.floor(index / fieldSize);
        setFlag(row, column);

        if(sounds ==='on' && !tiles[index].hasAttribute('disabled', 'disabled')) makeFlag.play();
    })

    document.querySelector('.new-game').addEventListener('click', restartGame);

    document.querySelectorAll('.difficalty-item')[0].addEventListener('click', function() {
        fieldSize = 10;
        restartGame();
    })
    document.querySelectorAll('.difficalty-item')[1].addEventListener('click', function() {
        fieldSize = 15;
        restartGame();
    })
    document.querySelectorAll('.difficalty-item')[2].addEventListener('click', function() {
        fieldSize = 25;
        restartGame();
    })

    document.querySelector('.amount-bombs-item').addEventListener('mouseup', function() {
        numberOfBombs = document.querySelector('.amount-bombs-item').value;
        restartGame();
    })

    light.addEventListener('click', function() {
        document.body.style.backgroundColor = 'aliceblue';
        document.body.style.color = 'black';
        turnsWrapper.style.borderColor = 'black';
        timeWrapper.style.borderColor = 'black';

        light.setAttribute('disabled', 'disabled');
        dark.removeAttribute('disabled', 'disabled');
        theme = 'light';
    })

    dark.addEventListener('click', function() {
        document.body.style.backgroundColor = 'dimgray';
        document.body.style.color = 'white';
        turnsWrapper.style.borderColor = 'white';
        timeWrapper.style.borderColor = 'white';

        dark.setAttribute('disabled', 'disabled');
        light.removeAttribute('disabled', 'disabled');
        theme = 'dark';
    })

    soundOn.addEventListener('click', function() {
        soundOn.setAttribute('disabled', 'disabled');
        soundOff.removeAttribute('disabled', 'disabled');
        sounds = 'on';
    })

    soundOff.addEventListener('click', function() {
        soundOff.setAttribute('disabled', 'disabled');
        soundOn.removeAttribute('disabled', 'disabled');
        sounds = 'off';
    })

    rangeTable.addEventListener('click', function() {
        table.classList.toggle('visible');
    })

    document.addEventListener('click', function(e) { 
        if (!e.target.closest('.table') && !e.target.closest('.range-table')) { 
            table.classList.remove('visible');
        }
    })
}    

initGame();