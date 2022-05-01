import React from "react";

import "./styles.css"

import Gif from "../Gif";

const ListOfGifs = ({ gifs }) => {

    return (
        <div className="ListOfGifs">
            {
                gifs.map(({ id, title, url, ...restOfGif }) => {
                    return <Gif
                        id={id}
                        key={id}
                        title={title}
                        url={url}
                        extraInfo={restOfGif}
                    />
                })
            }
        </div>
    );
}

export default ListOfGifs;