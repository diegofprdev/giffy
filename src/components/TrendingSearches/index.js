import React, { Suspense } from "react";

import { useNearScreen } from "../../hooks/useNearScreen";

const TrendingSearches = React.lazy(() => {
    return import('./TrendingSearches');
});

const LazyTrending = () => {

    const { show, elementRef } = useNearScreen({ distance: '100px' });

    return (
        <Suspense fallback='Cargando Tendencias ...'>
            <div ref={elementRef}>
                {show ? <TrendingSearches /> : null}
            </div>
        </Suspense>
    )
}

export default LazyTrending;