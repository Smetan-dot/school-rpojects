import drawHtmlViewer from "./html-viewer";
import { levels } from "../levels/levels";

describe (
    'check creating html-viewer',
    () => {
        document.body.innerHTML = `<div class="editor"></div>`;
        const editor = document.querySelector('.editor') as HTMLDivElement;
        const current = 6;
        const res = '<section class=\"table\"><plate><apple></apple></plate><plate id=\"nice\"></plate></section>';

        test (
            'drawing',
            () => {
                drawHtmlViewer (editor, levels, current);
                expect(editor.contains(document.querySelector('.editor-title'))).toBeTruthy();
                expect(editor.contains(document.querySelector('.column-numbers'))).toBeTruthy();
                expect(editor.contains(document.querySelector('.markup'))).toBeTruthy();
            }
        ),

        test (
            'check markup',
            () => {
                drawHtmlViewer (editor, levels, current);
                const markup = document.querySelector('.markup') as HTMLDivElement;
                expect(markup.textContent).toEqual(res);
            }
        )
    }
)