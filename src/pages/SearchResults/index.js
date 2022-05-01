import React, { useEffect, useRef, useCallback } from "react";

import debounce from "just-debounce-it";

import { useGifs } from "../../hooks/useGifs";
import { useNearScreen } from "../../hooks/useNearScreen";

import ListOfGifs from "../../components/ListOfGifs";

const SearchResults = ({ params }) => {

    const { keyword } = params;
    const { loading, gifs, setPage } = useGifs({ keyword });
    const externalRef = useRef();
    const { show } = useNearScreen({
        externalRef : loading ? null : externalRef,
        once : false 
    });
    
    const handleNextPage = () => setPage(prevPage => prevPage + 1);

    const debounceHandleNextPage = useCallback(debounce(handleNextPage, 200),[]);

    useEffect(() => {
        if(show) debounceHandleNextPage();
    },[show, debounceHandleNextPage])

    return (
        <>
            {
                loading
                    ?
                    <i>Cargando ... ⏳</i>
                    :
                    <>
                        <h3 className="App-title">
                            {decodeURI(keyword)}
                        </h3>
                        <ListOfGifs
                            gifs={gifs}
                        />
                        <div ref={externalRef} id="visor"></div>
                    </>
            }
        </>

    )
}

export default SearchResults;