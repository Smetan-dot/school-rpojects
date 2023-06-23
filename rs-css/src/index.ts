import './global.css';
import './components/game-table/table.css';
import './components/css-editor/css-editor.css';
import './components/html-viewer/html-viewer.css';
import './components/levels/levels.css';
import { drawTable, getFlatArray } from './components/game-table/table';
import { drawCssEditor, checkAnswer } from './components/css-editor/css-editor';
import drawHtmlViewer from './components/html-viewer/html-viewer';
import { levels, drawLevels } from './components/levels/levels';


const currentLevel = 0;

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
    levelsWrapper.appendChild(levelsBlock);

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
        drawLevels (levelsBlock, levels, level);

        for (let i = 0; i < levelsBlock.childNodes.length; i += 1 ) {
            levelsBlock.childNodes[i].addEventListener('click', () => {
                startLevel (levels[i].level - 1);
            })
        }

        const answerButton = document.querySelector('.answer-button') as HTMLButtonElement;
        const input = document.querySelector('.input') as HTMLInputElement;

        answerButton.addEventListener('click', () => {
            checkAnswer (input, editor, levels, level, startLevel);
        })

        input.addEventListener('keydown', (event) => {
            if (event.code === 'Enter') {
                checkAnswer (input, editor, levels, level, startLevel);
            }
        })

        const markup = document.querySelector('.markup') as HTMLElement;
        const arrayTable = document.querySelector('.table') as HTMLDivElement;
        const flatTable = getFlatArray(arrayTable.children);

        const flatArray = getFlatArray(markup.children);

        markup.addEventListener('mouseover', (event) => {
            const el = event.target as HTMLElement;
            let index = flatArray.indexOf(el);

            if (el.tagName === 'SPAN' && el.parentElement) {
                index = flatArray.indexOf(el.parentElement);
                flatTable[index].classList.add('hovered');
                if (flatTable[index].lastElementChild) flatTable[index].lastElementChild?.classList.add('visible');
                el.parentElement.classList.add('hover');
                if (el.parentElement.firstElementChild) el.parentElement.firstElementChild.setAttribute('style', 'color: rgb(150, 150, 150)');
            }

            if ((el.closest('plate') || el.closest('bento') || el.closest('apple') || el.closest('orange') || el.closest('pickle')
            || el.closest('.small') || el.closest('#nice')) && el.tagName !== 'SPAN') {
                el.classList.add('hover');
                flatTable[index].classList.add('hovered');
                if (flatTable[index].lastElementChild) flatTable[index].lastElementChild?.classList.add('visible');
                if (el.firstElementChild) el.firstElementChild.setAttribute('style', 'color: rgb(150, 150, 150)');
            }
        })

        markup.addEventListener('mouseout', (event) => {
            const el = event.target as HTMLElement;
            let index = flatArray.indexOf(el);

            if (el.tagName === 'SPAN' && el.parentElement) {
                index = flatArray.indexOf(el.parentElement);
                flatTable[index].classList.remove('hovered');
                if (flatTable[index].lastElementChild) flatTable[index].lastElementChild?.classList.remove('visible');
                el.parentElement.classList.remove('hover');
                if (el.parentElement.firstElementChild) el.parentElement.firstElementChild.removeAttribute('style');
            }

            if ((el.closest('plate') || el.closest('bento') || el.closest('apple') || el.closest('orange') || el.closest('pickle')
            || el.closest('.small') || el.closest('#nice')) && el.tagName !== 'SPAN') {
                el.classList.remove('hover');
                flatTable[index].classList.remove('hovered');
                if (flatTable[index].lastElementChild) flatTable[index].lastElementChild?.classList.remove('visible');
                if (el.firstElementChild) el.firstElementChild.removeAttribute('style');
            }
        })

        const helpButton = document.querySelector('.help-button') as HTMLButtonElement;
        helpButton.addEventListener('click', () => {
            input.value = `${levels[level].answer}`;
            input.classList.add('type');
        })
    }

    startLevel (currentLevel); 
}

initGame ();