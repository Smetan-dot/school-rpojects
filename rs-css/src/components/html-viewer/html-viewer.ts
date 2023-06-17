import { Level } from "../levels/levels";

export default function drawHtmlViewer (wrapper: HTMLDivElement, objects: Level[], current: number): void {
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
    markup.textContent = '<div class="table">';

    for (let i = 0; i < objects[current].elements.length; i+= 1) {
        if (objects[current].elements[i]) {
            if (i === 0 || i % 2 === 0) {
                const el = document.createElement(`${objects[current].elements[i]}`);
                el.textContent = `<${objects[current].elements[i]}></${objects[current].elements[i]}>`;
                markup.appendChild(el);
            }
            if (i === 1 || i % 2 === 1) {
                const el = document.createElement(`${objects[current].elements[i]}`);
                el.textContent = `<${objects[current].elements[i]}></${objects[current].elements[i]}>`;
                console.log(el);
                if (markup.lastChild) {
                    markup.lastChild.textContent = `<${objects[current].elements[i - 1]}>`;
                    markup.lastChild.appendChild(el);
                    const span = document.createElement('span');
                    span.textContent = `</${objects[current].elements[i - 1]}>`;
                    markup.lastChild.appendChild(span);
                }
                else {
                    markup.appendChild(el); 
                }
            }
        }
    }

    markup.append('</div>');
    htmlBlock.appendChild(markup);
}