import { useState, useEffect, useContext } from "react";

import getGifs from '../services/getGifs';

import GifsContext from '../contexts/GifsContext';

const INITIAL_PAGE = 0;

export const useGifs = ({ keyword } = { keyword : null }) => {

    const { gifs, setGifs } = useContext(GifsContext);
    const [page, setPage] = useState(INITIAL_PAGE);
    const [loading, setLoading] = useState(false);
    const [loadingNextPage, setLoadingNextPage] = useState(false); 

    const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random';

    useEffect(() => {
        setLoading(true);
        getGifs({ keyword: keywordToUse })
            .then(gifs => {
                setLoading(false);
                setGifs(gifs);
                localStorage.setItem('lastKeyword', keywordToUse);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
                setGifs([]);
                localStorage.setItem('lastKeyword', keywordToUse);
            });
    }, [keyword, keywordToUse, setGifs]);

    useEffect(() => {
        if(page === INITIAL_PAGE) return; 
        setLoadingNextPage(true);
        getGifs({ keyword: keywordToUse, page })
            .then(nextGifs => {
                setLoadingNextPage(false);
                setGifs(currentGifs => currentGifs.concat(nextGifs));
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            })
    }, [page, keywordToUse, setGifs])

    return { loading, loadingNextPage, gifs, setPage }
}
