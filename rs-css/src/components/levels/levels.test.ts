import { levels, drawLevels } from "./levels";


describe (
    'checking levels properties',
    () => {
        levels.forEach(test => {
            it (
                'has level',
                () => {
                    expect(test).toHaveProperty('level');
                }
            ),
            it (
                'has answer',
                () => {
                    expect(test).toHaveProperty('answer');
                }
            ),
            it (
                'has elements',
                () => {
                    expect(test).toHaveProperty('elements');
                }
            ),
            it (
                'has markup',
                () => {
                    expect(test).toHaveProperty('markup');
                }
            )
        })
    }
)

describe (
    'checking creating levels-block',
    () => {
        const block = document.createElement('div');
        const progress = ['', 'done', '', '', 'done with help', '', '', '', ''];
        const current = 0;

        const span = document.createElement('span');
        span.innerHTML = '&#10004';
        span.style.color = 'rgb(151, 252, 105)';

        const icon = document.createElement('span');
        icon.innerHTML = '&#10004';
        icon.style.color = 'rgb(150, 150, 150)';

        test (
            'drawing',
            () => {
                drawLevels(block, levels, current, progress);
                expect(block.children.length).toBe(levels.length);
            }
        ),

        test (
            'show current',
            () => {
                drawLevels(block, levels, current, progress);
                expect(block.children[current].classList.contains('current')).toEqual(true);
            }
        ),

        test (
            'show checks',
            () => {
                drawLevels(block, levels, current, progress);
                expect(block.children[1].children[0]).toEqual(span);
            }
        ),

        test (
            'show checks with help',
            () => {
                drawLevels(block, levels, current, progress);
                expect(block.children[4].children[0]).toEqual(icon);
            }
        )
    }
)