import { API_KEY, API_URL_BASE } from './settings';

const getTrendingTermsService = () => {

    const urlApi = `${API_URL_BASE}/trending/searches?api_key=${API_KEY}`;

    return fetch(urlApi)
        .then(res => res.json())
        .then(res => {
            const { data } = res;
            return data;
        });

}

export default getTrendingTermsService;