import { API_KEY, API_URL_BASE } from './settings';

const getSingleGif = ({ id }) => {

    const urlApi = `${API_URL_BASE}/gifs/${id}?api_key=${API_KEY}`;

    return fetch(urlApi)
        .then(res => res.json())
        .then(res => {
            const { data } = res;
            const { id, title, images } = data;
            const { url } = images.downsized_medium;
            return { id, title, url };
        });
}

export default getSingleGif;