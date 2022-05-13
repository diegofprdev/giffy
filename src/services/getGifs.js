import { API_KEY, API_URL_BASE } from './settings';

const getGifs = ({ keyword = 'pandas', limit = 10, page = 0, rating } = {}) => {

    const urlApi = `${API_URL_BASE}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${page * limit}&rating=${rating}&lang=en`;

    return fetch(urlApi)
        .then(res => res.json())
        .then(res => {
            const { data } = res;
            const gifs = data.map(image => {
                const { id, title, images } = image; 
                const { url } = images.downsized_medium;
                return { id, title, url };
            });
            return gifs;
        });

}

export default getGifs;