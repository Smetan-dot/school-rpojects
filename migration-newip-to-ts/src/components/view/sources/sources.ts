import './sources.css';

interface ISources {
    id: string,
    name: string,
    description: string,
    url: string,
    category: string,
    language: string,
    country: string
}

class Sources {
    public draw(data: ISources[]): void {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;

            const itemName = sourceClone.querySelector('.source__item-name');
            if (itemName instanceof HTMLElement) itemName.textContent = item.name;

            const elName = sourceClone.querySelector('.source__item');
            if (elName instanceof HTMLElement) elName.setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        const sources = document.querySelector('.sources');
        if (sources instanceof HTMLElement) sources.append(fragment);
    }
}

export default Sources;
