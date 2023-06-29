import { getFlatArray } from "./table";

describe (
    'Get flat array from HTMLCollection',
    () => {
        document.body.innerHTML = '<div class="table"><plate><apple></apple></plate><bento></bento></div>';
        const plate = document.querySelector('plate');
        const bento = document.querySelector('bento');
        const apple = document.querySelector('apple');

        test(
            'flatting',
            () => {
                const collection = document.querySelector('.table')?.children as HTMLCollection;
                const res = getFlatArray(collection);
                expect(res).toEqual([plate, apple, bento]);
            }
        )
    }
)