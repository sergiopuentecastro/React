import React from 'react'
import ReactPropTypes from 'react'
// import { Fragment } from 'react'

export default function PrimeraApp({ saludo, subtitulo }) {

    return (
        <div>
            <h1>{saludo}</h1>
            <p>{subtitulo}</p>
        </div>
    )
}

PrimeraApp.ReactPropTypes = {
    saludo: ReactPropTypes.string
}

PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo'
}