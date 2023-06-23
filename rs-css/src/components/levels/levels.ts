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
        <plate class="bounce"></plate>
        <plate class="bounce"></plate>`
    },

    {
        level: 2,
        answer: 'bento',
        elements: ['plate', '', 'bento', '', 'plate', ''],
        markup: `
        <plate></plate>
        <bento class="bounce"></bento>
        <plate></plate>`
    },

    {
        level: 3,
        answer: 'plate pickle',
        elements: ['', 'pickle', 'plate', 'pickle' ],
        markup: `
        <pickle></pickle>
        <plate>
        <pickle class="bounce"></pickle>
        </plate>`
    },

    {
        level: 4,
        answer: '.small',
        elements: ['', 'Sorange', 'bento', '', 'plate', 'orange'],
        markup: `
        <orange class="small bounce"></orange>
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
        <apple class="small bounce"></apple>
        <apple></apple>
        <plate>
        <apple class="small bounce"></apple>
        </plate>`
    },

    {
        level: 6,
        answer: 'orange .small',
        elements: ['bento', 'Sorange', '', 'Sapple', 'plate', 'Sorange'],
        markup: `
        <bento>
        <orange class="small bounce"></orange>
        </bento>
        <apple class="small"></apple>
        <plate>
        <orange class="small bounce"></orange>
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
        <plate class="bounce" id="nice"></plate>`
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
        <pickle class="bounce"></pickle>
        </plate>
        <plate>
        <pickle></pickle>
        </plate>`
    },

    {
        level: 9,
        answer: 'plate *',
        elements: ['Nplate', 'pickle', '', 'pickle', 'bento', 'orange', 'plate', 'orange'],
        markup: `
        <plate id="nice">
        <pickle class="bounce"></pickle>
        </plate>
        <pickle></pickle>
        <bento>
        <orange></orange>
        </bento>
        <plate>
        <orange class="bounce"></orange>
        </plate>`
    },

    {
        level: 10,
        answer: '*',
        elements: ['', 'Sapple', 'bento', 'orange', '', 'pickle', 'plate', 'Sorange'],
        markup: `
        <apple class="small bounce"></apple>
        <bento class="bounce">
        <orange></orange>
        </bento>
        <pickle class="bounce"></pickle>
        <plate class="bounce">
        <orange class="small"></orange>
        </plate>`
    }
]

export function drawLevels (wrapper: HTMLDivElement, arrayOfLevels: Level[], current: number, object: string[]): void {
    for (let i = 0; i < arrayOfLevels.length; i += 1) {
        const level = document.createElement('div');
        level.classList.add('level');
        level.textContent = `${arrayOfLevels[i].level}`;
        if (current === i) level.classList.add('current');
        wrapper.appendChild(level);
    }

    const levelProgressArr = Array.from(document.querySelectorAll('.level'));

    for (let i = 0; i < object.length; i += 1) {
        if (object[i] === 'done') {
            const icon = document.createElement('span');
            icon.innerHTML = '&#10004';
            icon.style.color = 'rgb(151, 252, 105)';
            levelProgressArr[i].appendChild(icon);
        }
    }
}