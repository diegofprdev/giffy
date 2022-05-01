import { useState, useEffect } from 'react';

import getTrendingTermsService from '../services/getTrendingTermsService';

export const useTrends = () => {

    const [trends, setTrends] = useState([]);

    useEffect(() => {

        getTrendingTermsService()
        .then(trends => {
            setTrends(trends);
        })
        .catch(err => {
            console.error(err);
            setTrends([]);
        })
        

    }, []);

    return { trends };

}