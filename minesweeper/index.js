

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

    const time = document.createElement('div');
    time.classList.add('time');
    gameHeader.appendChild(time);

    const turns = document.createElement('div');
    turns.classList.add('turns');
    gameHeader.appendChild(turns);

    const newGame = document.createElement('a');
    newGame.classList.add('new-game');
    newGame.textContent = 'New Game';
    gameHeader.appendChild(newGame);

    const bombsCounter = document.createElement('div');
    bombsCounter.classList.add('bombs');
    gameHeader.appendChild(bombsCounter);

    const flagsCounter = document.createElement('div');
    flagsCounter.classList.add('flags');
    gameHeader.appendChild(flagsCounter);
}

initGame();