import React, { useState } from "react";

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
        <form onSubmit={handleSubmit}>
            <button>Buscar</button>
            <input onChange={handleChange} placeholder='Search a gif here ...' type='text' value={keyword} />
        </form>
    )
}

export default React.memo(SearchForm);