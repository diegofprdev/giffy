import React, { useCallback } from "react";
import Helmet from "react-helmet";

import { useGifs } from "../../hooks/useGifs";

import SearchForm from "../../components/SearchForm";
import Spinner from "../../components/Spinner"
import ListOfGifs from "../../components/ListOfGifs";
import TrendingSearches from "../../components/TrendingSearches/index";

const Home = () => {

    const { loading, gifs } = useGifs();

    return (
        <div>
            <Helmet>
                <title>Home | Giffy</title>
            </Helmet>
            <header className="o-header">
                <SearchForm />
            </header>
            <br />
            <div className="App-wrapper">
                <div className="App-main">
                    <div className="App-results">
                        <h5 className="App-title">
                            🕵️ Last search
                        </h5>
                        <div className="App-content-gifs">
                            {
                                loading
                                    ?
                                    <Spinner />
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
        </div>
    )
}

export default Home;