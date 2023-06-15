export default function drawCssEditor (wrapper: HTMLDivElement): void {
    const cssEditor = document.createElement('div');
    cssEditor.classList.add('css-editor');
    wrapper.appendChild(cssEditor);

    const cssTitle = document.createElement('div');
    cssTitle.classList.add('css-title');
    cssTitle.textContent = 'CSS Editor';
    cssEditor.appendChild(cssTitle);

    const inputBlock = document.createElement('div');
    inputBlock.classList.add('input-block');
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
}