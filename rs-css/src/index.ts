import './global.css';
import './components/game-table/table.css';
import './components/css-editor/css-editor.css';
import './components/html-viewer/html-viewer.css';
import './components/levels/levels.css';
import drawTable from './components/game-table/table';
import drawCssEditor from './components/css-editor/css-editor';
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
        drawTable (gameTable, levels, level);
        drawCssEditor (editor);
        drawHtmlViewer(editor, levels, level);
        drawLevels(levelsBlock, levels, level);

        for (let i = 0; i < levelsBlock.childNodes.length; i += 1 ) {
            levelsBlock.childNodes[i].addEventListener('click', () => {
                startLevel (levels[i].level - 1);
            })
        }
    }

    startLevel (currentLevel);     
}

initGame ();