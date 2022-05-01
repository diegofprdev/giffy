import { useContext } from 'react';

import GifsContext from '../contexts/GifsContext';

export const useGlobalGifs = () => {

    const { gifs } = useContext(GifsContext);

    return { gifs };
    
}