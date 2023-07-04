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