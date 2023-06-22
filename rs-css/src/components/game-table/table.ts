import { Level } from "../levels/levels";

export function getFlatArray (HTMLCollection: HTMLCollection): Element[] {
    const nodesArray = Array.from(HTMLCollection);
    const flatArray: Element[] = []; 
    nodesArray.forEach((e) => {
        flatArray.push(e);
        if (e.children.length > 0) {
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

        table.addEventListener('mouseover', (event) => {
            const el = event.target as HTMLElement;
            const index = flatArray.indexOf(el);
    
            if (el.closest('plate') || el.closest('bento') || el.closest('apple') || el.closest('orange') || el.closest('pickle')
            || el.closest('.bounce') || el.closest('.small') || el.closest('#nice')) {
                el.classList.add('hovered');
                flatMarkUp[index].classList.add('hover');
                if (el.firstElementChild) flatMarkUp[index + 1].setAttribute('style', 'color: rgb(150, 150, 150)');
            }
        })

        table.addEventListener('mouseout', (event) => {
            const el = event.target as HTMLElement;
            const index = flatArray.indexOf(el);

            if (el.closest('plate') || el.closest('bento') || el.closest('apple') || el.closest('orange') || el.closest('pickle')
            || el.closest('.bounce') || el.closest('.small') || el.closest('#nice')) {
                el.classList.remove('hovered');
                flatMarkUp[index].classList.remove('hover');
                if (el.firstElementChild) flatMarkUp[index + 1].removeAttribute('style');
            }
        })
    }
}