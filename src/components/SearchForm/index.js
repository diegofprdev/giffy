import React from "react";
import { useLocation } from 'wouter';

import { RATINGS } from '../../services/getRatings';

import { useForm } from "./hooks/useForm";

import './styles.css';

const SearchForm = ({ initianKeyword = '', initialRating = 'g' }) => {

    const [path, setPath] = useLocation();

    const { keyword, rating, times, updateKeyword, updateRating } = useForm({ initianKeyword, initialRating });

    const handleChange = (e) => {
        updateKeyword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setPath(`/search/${keyword}/${rating}`);
    }

    const handleChangeRating = (e) => {
        updateRating(e.target.value);
    }

    return (
        <form className="c-search" onSubmit={handleSubmit}>
            <button id="btn-search" className="btn">
                <span>🔍 Search</span>
            </button>
            <input
                className="c-search-input"
                onChange={handleChange}
                placeholder='...'
                type='text'
                value={keyword}
            />
            <select
                className="c-search-list"
                onChange={handleChangeRating}
                value={rating}>
                {
                    RATINGS.map(({ rating, emoji }) => {
                        return <option className="c-search-list-option" key={rating} value={rating}>
                            {rating} {emoji}
                        </option>
                    })}
            </select>
            <span className="c-search-counter">{times}</span>
        </form>
    )
}

export default React.memo(SearchForm);