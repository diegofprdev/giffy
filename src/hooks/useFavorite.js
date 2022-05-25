import { useState, useContext } from 'react';

import FavoritesContext from '../contexts/FavoritesContext';

export const useFavorite = ({ id }) => {

    const { favoriteGifs, setFavoriteGifs } = useContext(FavoritesContext);
    const [favorite, setFavorite] = useState(() => {
        return favoriteGifs.includes(id);
    });

    const addToFavorite = () => {
        setFavoriteGifs(prevFavorites => [...prevFavorites, id]);
        setFavorite(true);
    }

    const removeToFavorite = () => {
        const newFavorites = favoriteGifs.filter(gif => gif !== id);
        setFavoriteGifs(newFavorites);
        setFavorite(false);
    }

    return { favorite, addToFavorite, removeToFavorite }

}