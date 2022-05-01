import React from "react";
import { Link } from "wouter";

const Category = ({ name, options = [] }) => {

    return <>
        <h3>{ name }</h3>
        {
            options.map(popularGif => {
                return <span key={popularGif}>
                    <Link to={`/search/${popularGif}`}>
                        {popularGif} &nbsp;
                    </Link>
                </span>
            })
        }
    </>
}

export default Category;