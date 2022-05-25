import React, { useState, useEffect } from "react";

const Context = React.createContext();

export const FavoritesContextProvider = ({ children }) => {

    const favoritesGifsSaved = JSON.parse(localStorage.getItem('favorites')) || [];

    const [favoriteGifs, setFavoriteGifs] = useState(favoritesGifsSaved);

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favoriteGifs));
    }, [favoriteGifs]);

    return <Context.Provider value={{ favoriteGifs, setFavoriteGifs }}>
        {children}
    </Context.Provider>
}

export default Context;
