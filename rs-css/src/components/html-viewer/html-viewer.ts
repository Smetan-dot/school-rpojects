import { Level } from "../levels/levels";
import { getFlatArray } from "../game-table/table";

export function drawHtmlViewer (wrapper: HTMLDivElement, objects: Level[], current: number): void {
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
    columnNumbers.textContent = '1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n13\n14\n15\n16\n17';
    htmlBlock.appendChild(columnNumbers);

    const markup = document.createElement('div');
    markup.classList.add('markup');
    markup.textContent = '<section class="table">';



    function generateMarkupElement (element: HTMLElement, i: number, j: number): void {
        if (objects[current].elements[i - 1][0] === 'N') {
            markup.children[i - j].textContent = `<${objects[current].elements[i - 1].slice(1)} id="nice">`;
            markup.children[i - j].appendChild(element);
            const span = document.createElement('span');
            span.textContent = `</${objects[current].elements[i - 1].slice(1)}>`;
            markup.children[i - j].appendChild(span);
        }
        else {
            markup.children[i - j].textContent = `<${objects[current].elements[i - 1]}>`;
            markup.children[i - j].appendChild(element);
            const span = document.createElement('span');
            span.textContent = `</${objects[current].elements[i - 1]}>`;
            markup.children[i - j].appendChild(span);
        }
    }


    
    for (let i = 0, j = 1; i < objects[current].elements.length; i+= 1) {
        if (objects[current].elements[i]) {
            if (i === 0 || i % 2 === 0) {
                if (objects[current].elements[i][0] === 'N') { // symbol-coding ---> N => id="nice" (look at levels.elements)
                    const el = document.createElement(`${objects[current].elements[i].slice(1)}`);
                    el.textContent = `<${objects[current].elements[i].slice(1)} id="nice"></${objects[current].elements[i].slice(1)}>`;
                    markup.appendChild(el);
                }
                else { 
                    const el = document.createElement(`${objects[current].elements[i]}`);
                    el.textContent = `<${objects[current].elements[i]}></${objects[current].elements[i]}>`;
                    markup.appendChild(el);
                }
            } // create objects in markup by even indexes in levels.elements (plate, bento)

        

            if (i === 1 || i % 2 === 1) {
                if (objects[current].elements[i][0] === 'S') { // symbol-coding ---> S => class="small" (look at levels.elements)
                    const el = document.createElement(`${objects[current].elements[i].slice(1)}`);
                    el.textContent = `<${objects[current].elements[i].slice(1)} class="small"></${objects[current].elements[i].slice(1)}>`;

                    if (markup.children[i - j]) { // check parent element for current element
                        generateMarkupElement (el, i, j);
                    }
                    else {
                        markup.appendChild(el); 
                    }
                }

                else  {
                    const el = document.createElement(`${objects[current].elements[i]}`);
                    el.textContent = `<${objects[current].elements[i]}></${objects[current].elements[i]}>`;
                    if (markup.children[i - j]) { // check parent element for current element
                        generateMarkupElement (el, i, j);
                    }
                    else {
                        markup.appendChild(el); 
                    }
                }
            } // create objects in markup by odd indexes in levels.elements (apple, orange, pickle)
        }
        if (i === 1 || i % 2 === 1) { // "j" needs for check parent even element at current odd element
            j += 1;                   
        }
    }

    markup.append('</section>');
    htmlBlock.appendChild(markup);
}

export function markupHoverAction ():void {
    const markup = document.querySelector('.markup') as HTMLElement;
    const arrayTable = document.querySelector('.table') as HTMLDivElement;
    const flatTable = getFlatArray(arrayTable.children); // convert to a one-dimensional array for indexing
    const flatArray = getFlatArray(markup.children); // convert to a one-dimensional array for indexing

    markup.addEventListener('mouseover', (event) => {
        const el = event.target as HTMLElement;
        let index = flatArray.indexOf(el); // general index for highlighting

        if (el.tagName === 'SPAN' && el.parentElement) {
            index = flatArray.indexOf(el.parentElement);
            flatTable[index].classList.add('hovered');
            if (flatTable[index].lastElementChild) flatTable[index].lastElementChild?.classList.add('visible');
            el.parentElement.classList.add(`${el.parentElement.localName}-hover`);
        }

        if ((el.closest('plate') || el.closest('bento') || el.closest('apple') || el.closest('orange') || el.closest('pickle')
        || el.closest('.small') || el.closest('#nice')) && el.tagName !== 'SPAN') {
            el.classList.add(`${el.localName}-hover`);
            flatTable[index].classList.add('hovered');
            if (flatTable[index].lastElementChild) flatTable[index].lastElementChild?.classList.add('visible');
        }
    }) // hover actions in html-viewer



    markup.addEventListener('mouseout', (event) => {
        const el = event.target as HTMLElement;
        let index = flatArray.indexOf(el); // general index for highlighting

        if (el.tagName === 'SPAN' && el.parentElement) {
            index = flatArray.indexOf(el.parentElement);
            flatTable[index].classList.remove('hovered');
            if (flatTable[index].lastElementChild) flatTable[index].lastElementChild?.classList.remove('visible');
            el.parentElement.classList.remove(`${el.parentElement.localName}-hover`); 
        }

        if ((el.closest('plate') || el.closest('bento') || el.closest('apple') || el.closest('orange') || el.closest('pickle')
        || el.closest('.small') || el.closest('#nice')) && el.tagName !== 'SPAN') {
            el.classList.remove(`${el.localName}-hover`);
            flatTable[index].classList.remove('hovered');
            if (flatTable[index].lastElementChild) flatTable[index].lastElementChild?.classList.remove('visible');
        }
    }) // hover-out actions in html-viewer
}