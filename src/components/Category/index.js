import React from "react";
import { Link } from "wouter";

import './styles.css';

const Category = ({ name, options = [] }) => {

    return <>
        <h5 className="App-title">
            🔥{name}🔥
        </h5>
        {
            options.map(popularGif => {
                return <p className="Category" key={popularGif}>
                    <Link className="Category-text" to={`/search/${popularGif}`}>
                        {popularGif}
                    </Link>
                </p>
            })
        }
    </>
}

export default Category;