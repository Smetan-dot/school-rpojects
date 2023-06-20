import { Level } from "../levels/levels";

export default function drawTable (wrapper: HTMLDivElement, objects: Level[], current: number): void {
    const table = document.createElement('section');
    table.classList.add('table');
    table.innerHTML = objects[current].markup;
    wrapper.appendChild(table);

    table.addEventListener('mouseover', (event) => {
        const el = event.target as HTMLElement;
        if (el.closest('plate') || el.closest('bento') || el.closest('apple') || el.closest('orange') || el.closest('pickle')
        || el.closest('.bounce') || el.closest('.small') || el.closest('#nice')) {
            el.classList.add('hovered');
        }
    })

    table.addEventListener('mouseout', (event) => {
        const el = event.target as HTMLElement;
        if (el.closest('plate') || el.closest('bento') || el.closest('apple') || el.closest('orange') || el.closest('pickle')
        || el.closest('.bounce') || el.closest('.small') || el.closest('#nice')) {
            el.classList.remove('hovered');
        }
    })
}