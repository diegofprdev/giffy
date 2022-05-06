import { useTrends } from "../../hooks/useTrends";

import Category from '../Category/index';

const TrendingSearches = () => {

    const { trends } = useTrends();

    return <Category name='Trends' options={trends} />
}

export default TrendingSearches;