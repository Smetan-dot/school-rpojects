export default function drawHtmlViewer (wrapper: HTMLDivElement): void {
    const htmlViewer = document.createElement('div');
    htmlViewer.classList.add('editor-element');
    wrapper.appendChild(htmlViewer);

    const htmlTitle = document.createElement('div');
    htmlTitle.classList.add('editor-title');
    htmlTitle.textContent = 'HTML Viewer';
    htmlViewer.appendChild(htmlTitle);

    const htmlBlock = document.createElement('div');
    htmlBlock.classList.add('editor-block');
    htmlViewer.appendChild(htmlBlock);

    const columnNumbers = document.createElement('div');
    columnNumbers.classList.add('column-numbers');
    columnNumbers.textContent = '1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n13\n14';
    htmlBlock.appendChild(columnNumbers);

    const markup = document.createElement('div');
    markup.classList.add('markup');
    htmlBlock.appendChild(markup);
}