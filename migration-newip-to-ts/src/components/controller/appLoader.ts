import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '42845d8f6e3c493aba1ccf4002a5f508', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
