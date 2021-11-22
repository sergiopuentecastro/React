import React from 'react'
import { useFetchGif } from '../hooks/useFetchGif'
import GifGridItem from './GifGridItem'

export default function GifGrid({ category }) {

    const { data, loading } = useFetchGif(category)

    // useEffect(() => {
    //     getGifs(category)
    //         .then(setImages)
    // }, [category])

    return (
        <>
            <h3>{category}</h3>
            {loading && <p>...Loading</p>}
            <div className='card-grid' >
                {
                    data.map((elm, idx) => (
                        <GifGridItem key={idx} {...elm} />
                    ))
                }
            </div>
        </>
    )
}
