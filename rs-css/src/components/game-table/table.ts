import { Level } from "../levels/levels";

export function getFlatArray (HTMLCollection: HTMLCollection): Element[] {
    const nodesArray = Array.from(HTMLCollection);
    const flatArray: Element[] = []; 
    nodesArray.forEach((e) => {
        flatArray.push(e);
        if (e.children.length > 0 && !(e.children[0].classList.contains('html-code'))) {
            flatArray.push(e.children[0]);
        }
    })
    return flatArray;
}

export function drawTable (wrapper: HTMLDivElement, objects: Level[], current: number): void {
    const table = document.createElement('section');
    table.classList.add('table');
    table.innerHTML = objects[current].markup;
    wrapper.appendChild(table);
    
    if (document.querySelector('.markup')) {
        const arrayMarkup = document.querySelector('.markup') as HTMLDivElement;
        const flatMarkUp = getFlatArray(arrayMarkup.children);

        const flatArray = getFlatArray(table.children);

        flatArray.forEach ((object) => {
            const code = document.createElement('div');
            code.classList.add('html-code');
            code.textContent = `<${object.localName}></${object.localName}>`;
            if (object.classList.contains('small')) code.textContent = `<${object.localName} class="small"></${object.localName}>`;
            if (object.id === 'nice') code.textContent = `<${object.localName} id="nice"></${object.localName}>`;
            object.appendChild(code);
        })

        table.addEventListener('mouseover', (event) => {
            const el = event.target as HTMLElement;
            const index = flatArray.indexOf(el);
    
            if (el.closest('plate') || el.closest('bento') || el.closest('apple') || el.closest('orange') || el.closest('pickle')
            || el.closest('.bounce') || el.closest('.small') || el.closest('#nice')) {
                el.classList.add('hovered');
                flatMarkUp[index].classList.add('hover');
                if (el.firstElementChild && !(el.firstElementChild.classList.contains('html-code'))) flatMarkUp[index + 1].setAttribute('style', 'color: rgb(150, 150, 150)');
                if (el.lastElementChild && el.lastElementChild.classList.contains('html-code')) el.lastElementChild.classList.add('visible');
            }
            
        })

        table.addEventListener('mouseout', (event) => {
            const el = event.target as HTMLElement;
            const index = flatArray.indexOf(el);

            if (el.closest('plate') || el.closest('bento') || el.closest('apple') || el.closest('orange') || el.closest('pickle')
            || el.closest('.bounce') || el.closest('.small') || el.closest('#nice')) {
                el.classList.remove('hovered');
                flatMarkUp[index].classList.remove('hover');
                if (el.firstElementChild && !(el.firstElementChild.classList.contains('html-code'))) flatMarkUp[index + 1].removeAttribute('style');
                if (el.lastElementChild && el.lastElementChild.classList.contains('html-code')) el.lastElementChild.classList.remove('visible');
            }
        })
    }
}