import React from 'react'

export default function GifGridItem(props) {

    return (
        <div className='card animate__animated animate__bounce' >
            <img src={props.url} alt={props.title} />
            <p>{props.title}</p>
        </div>
    )
}
