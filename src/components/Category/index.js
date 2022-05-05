import React from "react";
import { Link } from "wouter";

const Category = ({ name, options = [] }) => {

    return <>
        <h5 className="App-title">
            ⚡{name}⚡
        </h5>
        {
            options.map(popularGif => {
                return <p style={{ margin: 0}} key={popularGif}>
                    <Link style={{ fontSize: '17px', fontWeight: 'bold'}} to={`/search/${popularGif}`}>
                        {popularGif} &nbsp;
                    </Link>
                </p>
            })
        }
    </>
}

export default Category;