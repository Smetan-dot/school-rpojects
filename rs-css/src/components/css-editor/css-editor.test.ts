import { levels } from "../levels/levels";
import { drawCssEditor, typeAnswer, checkAnswer } from "./css-editor";

describe (
    'check typing answer with help-button',
    () => {
        document.body.innerHTML = `<input class="input" type="text"></input>
                                   <div>
                                       <div class="level"></div>
                                       <div class="level current"></div>
                                   </div>`;
        const input = document.querySelector('.input') as HTMLInputElement;
        const divLevel = document.querySelector('.current') as HTMLDivElement;
        const current = 1;
        const progress = ['', '', '', '', '', '', '', '', ''];

        jest.useFakeTimers();

        test (
            'check progress',
            () => {
                typeAnswer(input, levels, current, divLevel, progress);
                expect(progress[1]).toBe('done with help');
            }
        )
    }
)

describe (
    'checking creating css-block',
    () => {
        document.body.innerHTML = `<div class="editor"></div>`;
        const editor = document.querySelector('.editor') as HTMLDivElement;

        test (
            'drawing',
            () => {
                drawCssEditor(editor);
                expect(editor.contains(document.querySelector('.editor-title'))).toBeTruthy();
                expect(editor.contains(document.querySelector('.column-numbers'))).toBeTruthy();
                expect(editor.contains(document.querySelector('.input'))).toBeTruthy();
                expect(editor.contains(document.querySelector('.answer-button'))).toBeTruthy();
                expect(editor.contains(document.querySelector('.help-button'))).toBeTruthy();
            }
        )
    }
)
