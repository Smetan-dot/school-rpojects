export type Level = {
    level: number,
    answer: string,
    elements: Array<string>,
    markup: string
}

export const levels = [
    {
        level: 1,
        answer: 'plate',
        elements: ['plate', '', 'plate', ''],
        markup: `
        <plate></plate>
        <plate></plate>`
    },

    {
        level: 2,
        answer: 'bento',
        elements: ['plate', '', 'bento', '', 'plate', ''],
        markup: `
        <plate></plate>
        <bento></bento>
        <plate></plate>`
    },

    {
        level: 3,
        answer: 'apple',
        elements: ['plate', '', 'plate', 'pickle' ],
        markup: `
        <plate></plate>
        <plate>
        <pickle></pickle>
        </plate>`
    },

    {
        level: 4,
        answer: '.small',
        elements: ['', 'orange', 'bento', '', 'plate', 'orange'],
        markup: `
        <orange class="small"></orange>
        <bento></bento>
        <plate>
        <orange></orange>
        </plate>`
    }
]

export function drawLevels (wrapper: HTMLDivElement, arrayOfLevels: Level[]): void {
    for (let i = 0; i < arrayOfLevels.length; i += 1) {
        const level = document.createElement('div');
        level.classList.add('level');
        level.textContent = `${arrayOfLevels[i].level}`;
        wrapper.appendChild(level);
    }
}