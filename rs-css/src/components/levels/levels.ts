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
        answer: 'plate pickle',
        elements: ['', 'pickle', 'plate', 'pickle' ],
        markup: `
        <pickle></pickle>
        <plate>
        <pickle></pickle>
        </plate>`
    },

    {
        level: 4,
        answer: '.small',
        elements: ['', 'Sorange', 'bento', '', 'plate', 'orange'],
        markup: `
        <orange class="small"></orange>
        <bento></bento>
        <plate>
        <orange></orange>
        </plate>`
    },

    {
        level: 5,
        answer: '.small',
        elements: ['plate', 'apple', '', 'Sapple', '', 'apple', 'plate', 'Sapple'],
        markup: `
        <plate>
        <apple></apple>
        </plate>
        <apple class="small"></apple>
        <apple></apple>
        <plate>
        <apple class="small"></apple>
        </plate>`
    },

    {
        level: 6,
        answer: 'orange .small',
        elements: ['bento', 'Sorange', '', 'Sapple', 'plate', 'Sorange'],
        markup: `
        <bento>
        <orange class="small"></orange>
        </bento>
        <apple class="small"></apple>
        <plate>
        <orange class="small"></orange>
        </plate>`
    },

    {
        level: 7,
        answer: '#nice',
        elements: ['plate', 'apple', 'Nplate', ''],
        markup: `
        <plate>
        <apple></apple>
        </plate>
        <plate id="nice"></plate>`
    },

    {
        level: 8,
        answer: '#nice pickle',
        elements: ['bento', 'pickle', 'Nplate', 'pickle', 'plate', 'pickle'],
        markup: `
        <bento>
        <pickle></pickle>
        </bento>
        <plate id="nice">
        <pickle></pickle>
        </plate>
        <plate>
        <pickle></pickle>
        </plate>`
    },

    {
        level: 9,
        answer: '*',
        elements: ['', 'Sapple', 'bento', 'orange', '', 'pickle', 'plate', 'Sorange'],
        markup: `
        <apple class="small"></apple>
        <bento>
        <orange></orange>
        </bento>
        <pickle></pickle>
        <plate>
        <orange class="small"></orange>
        </plate>`
    },

    {
        level: 10,
        answer: 'plate *',
        elements: ['Nplate', 'pickle', '', 'pickle', 'bento', 'orange', 'plate', 'orange'],
        markup: `
        <plate id="nice">
        <pickle></pickle>
        </plate>
        <pickle></pickle>
        <bento>
        <orange></orange>
        </bento>
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