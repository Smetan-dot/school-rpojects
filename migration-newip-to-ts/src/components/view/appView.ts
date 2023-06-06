import { News, INews } from './news/news';
import { Sources, ISources } from './sources/sources';

export interface INewsData {
    status: string,
    totalResults?: number,
    articles?: INews[]
}

export interface ISourcesData {
    status: string,
    sources?: ISources[]
}

export class AppView {
    private news: News;

    private sources: Sources;
    
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    public drawNews(data: INewsData): void {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    public drawSources(data: ISourcesData): void {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
