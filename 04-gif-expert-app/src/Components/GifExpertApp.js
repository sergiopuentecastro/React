import React, { useState } from 'react'
import AddCategory from './AddCategory'
import GifGrid from './GifGrid'

export default function GifExpertApp() {

    const [categories, setCategories] = useState(['One punch'])

    // const handleAdd = () => {
    //     setCategories(['Pokemon', ...categories])
    // }

    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />
            <ol>
                {
                    categories.map((elm, idx) => (
                        <GifGrid category={elm} key={idx} />
                    ))
                }
            </ol>
        </div>

    )
}
