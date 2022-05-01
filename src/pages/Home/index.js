import React, { useCallback } from "react";
import { useLocation } from 'wouter';

import { useGifs } from "../../hooks/useGifs";

import SearchForm from "../../components/SearchForm";
import ListOfGifs from "../../components/ListOfGifs";
import TrendingSearches from "../../components/TrendingSearches/index";

const Home = () => {

    const [path, setPath] = useLocation();
    const { loading, gifs } = useGifs();

    const onSubmit = useCallback(({ keyword }) => {
        setPath(`/search/${keyword}`);
    }, [setPath])

    return (
        <div>
            <SearchForm onSumbit={onSubmit}/>
            <div className="App-main">
                <div className="App-results">
                    <h3 className="App-title">Última búsqueda</h3>
                    <div className="App-content-gifs">
                        {
                            loading
                                ?
                                <i>Cargando ... ⏳</i>
                                :
                                <ListOfGifs gifs={gifs} />
                        }
                    </div>
                </div>
                <div className="App-category">
                    <TrendingSearches />
                </div>
            </div>
        </div>
    )
}

export default Home;