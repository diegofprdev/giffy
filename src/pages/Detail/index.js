import React from "react";
import { Redirect } from 'wouter';
import Helmet from "react-helmet";

import { useSingleGif } from "../../hooks/useSingleGif";

import Spinner from '../../components/Spinner';
import Gif from '../../components/Gif';

const Detail = ({ params }) => {

    const { id } = params;
    const { gif, loading, error } = useSingleGif({ id });
    const title = gif?.title ?? '';

    if (loading) {

        return <>
            <Helmet>
                <title>Loading...</title>
            </Helmet>
            <Spinner />
        </>
    }
    if (error) return <Redirect to="/404" />
    if (!gif) return null

    return (
        <>
            <Helmet>
                <title>{title} | Giffy</title>
                <meta
                    name="description"
                    content={`Detail of ${title}`}
                />
            </Helmet>
            <Gif
                {...gif}
            />
        </>
    )
}

export default Detail;