import './global.css';
import './components/game-table/table.css';
import './components/css-editor/css-editor.css';
import './components/html-viewer/html-viewer.css';
import './components/levels/levels.css';
import { drawTable } from './components/game-table/table';
import { drawCssEditor, checkAnswer, typeAnswer } from './components/css-editor/css-editor';
import { drawHtmlViewer, markupHoverAction } from './components/html-viewer/html-viewer';
import { levels, drawLevels } from './components/levels/levels';

let currentLevel = 0;
let progress = ['', '', '', '', '', '', '', '', ''];



function addListeners (func: (num: number) => void, level: number): void {
    const editor = document.querySelector('.editor') as HTMLDivElement;
    const levelsBlock = document.querySelector('.levels-block') as HTMLDivElement;

    for (let i = 0; i < levelsBlock.childNodes.length; i += 1 ) {
        levelsBlock.childNodes[i].addEventListener('click', () => {
            func (levels[i].level - 1);
        })
    } // add listeners for level-buttons

    const answerButton = document.querySelector('.answer-button') as HTMLButtonElement;
    const input = document.querySelector('.input') as HTMLInputElement;
    const divLevel = document.querySelector('.current') as HTMLDivElement;

    answerButton.addEventListener('click', () => {
        checkAnswer (input, editor, divLevel, levels, level, func, progress);
    })

    input.addEventListener('keydown', (event) => {
        if (event.code === 'Enter') {
            checkAnswer (input, editor, divLevel, levels, level, func, progress);
        }
    }) // check answer from input 

    const helpButton = document.querySelector('.help-button') as HTMLButtonElement;
    helpButton.addEventListener('click', () => {
        typeAnswer (input, levels, level, divLevel, progress);
    }) // type answer witn using help-button

    const resetButton = document.querySelector('.reset-button') as HTMLDivElement;
    resetButton.addEventListener('click', () => {
        progress = ['', '', '', '', '', '', '', '', ''];
        func (level);
    }) // reset progress
}



function initGame (): void {
    const gameWrapper = document.createElement('div');
    gameWrapper.classList.add('gameWrapper');
    document.body.appendChild(gameWrapper);

    const levelsWrapper = document.createElement('div');
    levelsWrapper.classList.add('levelsWrapper');
    document.body.appendChild(levelsWrapper);

    const title = document.createElement('h2');
    title.classList.add('level-title');
    title.textContent = 'Levels';
    levelsWrapper.appendChild(title);
    
    const levelsBlock = document.createElement('div');
    levelsBlock.classList.add('levels-block');
    levelsWrapper.appendChild(levelsBlock);

    const resetButton = document.createElement('button');
    resetButton.classList.add('reset-button');
    resetButton.textContent = 'Reset';
    levelsWrapper.appendChild(resetButton);

    const header = document.createElement('header');
    header.classList.add('header');
    gameWrapper.appendChild(header);

    const taskName = document.createElement('h1');
    taskName.classList.add('task-name');
    taskName.textContent = 'RS - CSS';
    header.appendChild(taskName);

    const gameTable = document.createElement('div');
    gameTable.classList.add('game-table');
    gameWrapper.appendChild(gameTable);

    const editor = document.createElement('div');
    editor.classList.add('editor');
    gameWrapper.appendChild(editor);

    const footer = document.createElement('footer');
    footer.classList.add('footer');
    gameWrapper.appendChild(footer);

    const year = document.createElement('span');
    year.classList.add('year');
    year.textContent = 'Created in 2023';
    footer.appendChild(year);

    const github = document.createElement('a');
    github.classList.add('github');
    github.textContent = 'GitHub';
    github.href = 'https://github.com/Smetan-dot';
    github.target = '_blank';
    footer.appendChild(github);

    const rsLink = document.createElement('a');
    rsLink.href = 'https://rs.school/js/';
    rsLink.target = '_blank';
    footer.appendChild(rsLink);

    const rsImg = document.createElement('img');
    rsImg.src = 'https://rs.school/images/rs_school_js.svg';
    rsImg.alt = 'rs_school_js';
    rsImg.classList.add('rs-school-img');
    rsLink.appendChild(rsImg);



    function startLevel (level: number): void {
        gameTable.innerHTML = '';
        editor.innerHTML = '';
        levelsBlock.innerHTML = '';
        drawCssEditor (editor);
        drawHtmlViewer (editor, levels, level);
        drawTable (gameTable, levels, level);
        drawLevels (levelsBlock, levels, level, progress); 
        addListeners (startLevel, level);
        markupHoverAction (); // constructing level, markup, listeners and other environment

        localStorage.setItem('level', `${level}`);
        localStorage.setItem('progress', JSON.stringify(progress));
    }

    if (localStorage.getItem('level')) currentLevel = Number(localStorage.getItem('level'));
    if (localStorage.getItem('progress')) progress = JSON.parse(localStorage.getItem('progress') || '{}');
    
    startLevel (currentLevel); 
}

initGame ();