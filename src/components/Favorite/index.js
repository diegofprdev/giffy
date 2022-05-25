import React from "react";
import { HiOutlineHeart, HiHeart } from "react-icons/hi";

import { useFavorite } from "../../hooks/useFavorite";

const Favorite = ({ id }) => {

    const { favorite, addToFavorite, removeToFavorite } = useFavorite({ id });

    return <>
        {
            favorite
                ?
                <button onClick={removeToFavorite} className="btn-fav btn-fav-danger">
                    <HiHeart />
                </button >
                :
                <button onClick={addToFavorite} className="btn-fav btn-fav-outline">
                    <HiOutlineHeart />
                </button >
        }
    </>
}

export default Favorite;