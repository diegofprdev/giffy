import { useState, useEffect } from 'react';

import getSingleGif from "../services/getSingleGif";

import { useGifs } from "../hooks/useGifs";

export const useSingleGif = ({ id }) => {

    const { gifs } = useGifs();

    const gifFromCache = gifs.find(singleGif => singleGif.id === id);

    const [gif, setGif] = useState(gifFromCache);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (!gif) {
            setLoading(true);
            getSingleGif({ id })
                .then(gif => {
                    setGif(gif);
                    setLoading(false);
                    setError(false);
                })
                .catch(err => {
                    setLoading(false);
                    setError(true);
                });
        }
    }, [gif, id])

    return { gif, loading, error };

}