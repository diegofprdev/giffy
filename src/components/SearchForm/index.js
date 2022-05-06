import React, { useState } from "react";

import './styles.css';

const SearchForm = ({ onSumbit }) => {

    const [keyword, setKeyword] = useState('');

    const handleChange = (e) => {
        setKeyword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSumbit({ keyword });
    }

    return (
        <form className="c-search" onSubmit={handleSubmit}>
            <button className="btn">Search</button>
            <input className="c-search-input" onChange={handleChange} placeholder='...' type='text' value={keyword} />
        </form>
    )
}

export default React.memo(SearchForm);