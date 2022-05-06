import React, { useEffect, useRef, useCallback } from "react";
import Helmet from "react-helmet";

import debounce from "just-debounce-it";

import { useGifs } from "../../hooks/useGifs";
import { useNearScreen } from "../../hooks/useNearScreen";

import Spinner from "../../components/Spinner";
import ListOfGifs from "../../components/ListOfGifs";

const SearchResults = ({ params }) => {

    const { keyword } = params;
    const { loading, gifs, setPage } = useGifs({ keyword });
    const externalRef = useRef();
    const { show } = useNearScreen({
        externalRef: loading ? null : externalRef,
        once: false
    });

    const handleNextPage = () => setPage(prevPage => prevPage + 1);

    const debounceHandleNextPage = useCallback(debounce(handleNextPage, 200), []);

    useEffect(() => {
        if (show) debounceHandleNextPage();
    }, [show, debounceHandleNextPage])

    return (
        <>
            {
                loading
                    ?
                    <Spinner />
                    :
                    <>
                        <Helmet>
                            <title>Results of {decodeURI(keyword)} | Giffy</title>
                        </Helmet>
                        <h5 className="App-title">
                            🔍 Search result:
                            <span style={{ color: '#E401FB' }}>
                                &nbsp;"{decodeURI(keyword)}"
                            </span>
                        </h5>
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