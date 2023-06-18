import { Level } from "../levels/levels";

export default function drawTable (wrapper: HTMLDivElement, objects: Level[], current: number): void {
    const table = document.createElement('section');
    table.classList.add('table');
    table.innerHTML = objects[current].markup;
    wrapper.appendChild(table);
}