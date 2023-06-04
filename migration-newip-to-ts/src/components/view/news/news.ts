import './news.css';

interface INews {
    source: {
        id: string,
        name: string
        },
    author: string,
    title: string,
    description: string,
    url: string,
    urlToImage: string,
    publishedAt: string,
    content: string
}

class News {
    public draw(data: INews[]): void {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;
        
        news.forEach((item, idx) => {
            const newsClone = newsItemTemp.content.cloneNode(true) as HTMLElement; 

            if (idx % 2) {
                const newsItem = newsClone.querySelector('.news__item');
                if (newsItem instanceof HTMLElement) newsItem.classList.add('alt');
            } 

            const photo = newsClone.querySelector('.news__meta-photo');
            if (photo instanceof HTMLElement) {
                photo.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
            }
           
            const metaAuthor = newsClone.querySelector('.news__meta-author');
            if (metaAuthor instanceof HTMLElement) metaAuthor.textContent = item.author || item.source.name;
            
            const metaDate = newsClone.querySelector('.news__meta-date');
            if (metaDate instanceof HTMLElement) metaDate.textContent = item.publishedAt
                .slice(0, 10)
                .split('-')
                .reverse()
                .join('-');

            const desTitle = newsClone.querySelector('.news__description-title');
            if (desTitle instanceof HTMLElement) desTitle.textContent = item.title;
            
            const desSource = newsClone.querySelector('.news__description-source');
            if (desSource instanceof HTMLElement) desSource.textContent = item.source.name;
            
            const desContent = newsClone.querySelector('.news__description-content');
            if (desContent instanceof HTMLElement) desContent.textContent = item.description;
            
            const readMore = newsClone.querySelector('.news__read-more a');
            if (readMore instanceof HTMLElement) readMore.setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        const newsElement = document.querySelector('.news');
        if (newsElement instanceof HTMLElement) {
            newsElement.innerHTML = '';
            newsElement.appendChild(fragment);
        }
    }
}

export default News;
