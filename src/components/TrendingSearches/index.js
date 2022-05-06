import React, { Suspense } from "react";

import { useNearScreen } from "../../hooks/useNearScreen";

import Spinner from "../Spinner";

const TrendingSearches = React.lazy(() => {
    return import('./TrendingSearches');
});

const LazyTrending = () => {

    const { show, elementRef } = useNearScreen({ distance: '100px' });

    return (
        <Suspense fallback={<Spinner/>}>
            <div ref={elementRef}>
                {show ? <TrendingSearches /> : null}
            </div>
        </Suspense>
    )
}

export default LazyTrending;