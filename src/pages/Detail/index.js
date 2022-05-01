import React from "react";

import { useGlobalGifs } from "../../hooks/useGlobalGifs";

import Gif from '../../components/Gif';

const Detail = ({ params }) => {

    const { id } = params;
    const { gifs } = useGlobalGifs();

    const gif = gifs.find(gif => gif.id === id);

    return (
        <Gif
            {...gif}
        />
    )
}

export default Detail;