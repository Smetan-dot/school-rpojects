export default function drawTable (wrapper: HTMLDivElement): void {
    const table = document.createElement('div');
    table.classList.add('table');
    wrapper.appendChild(table);
}