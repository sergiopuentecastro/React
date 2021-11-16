import React, { useState } from 'react'
import ReactPropTypes from 'react'

export default function CounterApp({ value }) {

    const [counter, setCounter] = useState(0)

    const handleAdd = (e) => {
        setCounter(counter + 1)
        // setCounter((c) => c + 1)
    }

    const handleSus = (e) => {
        setCounter(counter - 1)
    }

    const handleReset = (e) => {
        setCounter(value)
    }

    return (
        <div>
            <h1>CounterApp</h1>
            <h2> {counter} </h2>
            <button onClick={handleAdd}>+1</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleSus}>-1</button>
        </div>
    )
}

CounterApp.ReactPropTypes = {
    value: ReactPropTypes.number
}
