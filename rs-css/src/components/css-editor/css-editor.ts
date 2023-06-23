import { Level } from "../levels/levels";

export function checkAnswer (field: HTMLInputElement, wrapper: HTMLDivElement, objects: Level[], current: number, func: (num: number) => void): void {
    if (field.value === objects[current].answer) {
        document.querySelectorAll('.bounce').forEach ( (el) => {
            el.classList.add('correct');
        })
        setTimeout(() => {
            if (current + 1 < 9) func(current + 1);
            else {
                const table = document.querySelector('.table') as HTMLElement;
                table.innerHTML = '';
                table.textContent = 'great job!'
                table.classList.add('win');
            }
        }, 600);
    }
    else {
        wrapper.classList.add('shake');
        setTimeout(() => {
            wrapper.classList.remove('shake');
        }, 200);
    }
}

export function drawCssEditor (wrapper: HTMLDivElement): void {
    const cssEditor = document.createElement('div');
    cssEditor.classList.add('editor-element');
    wrapper.appendChild(cssEditor);

    const cssTitle = document.createElement('div');
    cssTitle.classList.add('editor-title');
    cssTitle.textContent = 'CSS Editor';
    cssEditor.appendChild(cssTitle);

    const inputBlock = document.createElement('div');
    inputBlock.classList.add('editor-block');
    cssEditor.appendChild(inputBlock);

    const columnNumbers = document.createElement('div');
    columnNumbers.classList.add('column-numbers');
    columnNumbers.textContent = '1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n13\n14';
    inputBlock.appendChild(columnNumbers);

    const inputWrapper = document.createElement('div');
    inputWrapper.classList.add('input-wrapper');
    inputBlock.appendChild(inputWrapper);

    const input = document.createElement('input');
    input.classList.add('input');
    input.type = 'text';
    input.placeholder = '[Type in a CSS selector]';
    inputWrapper.appendChild(input);

    const answerBlock = document.createElement('div');
    answerBlock.classList.add('answer-block');
    answerBlock.textContent = 'Press enter to answer or click button on the right';
    inputWrapper.appendChild(answerBlock);

    const answerButton = document.createElement('button');
    answerButton.classList.add('answer-button');
    answerButton.textContent = 'Enter';
    answerBlock.appendChild(answerButton);

    const helpButton = document.createElement('button');
    helpButton.classList.add('help-button');
    helpButton.textContent = 'Help';
    inputWrapper.appendChild(helpButton);
}