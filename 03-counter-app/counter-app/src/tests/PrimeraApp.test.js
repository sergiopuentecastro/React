import React from 'react'
import { shallow } from 'enzyme'
// import { shallow, ShallowWrapper } from 'enzyme'
import PrimeraApp from "../PrimeraApp"
// import { render } from "@testing-library/react"
import '@testing-library/jest-dom'


describe('Prueba en <PrimeraApp />', () => {

    // test('debe de mostrar el mensaje "Hola, soy Sergio"', () => {
    //     const saludo = 'Hola, soy Sergio'
    //     const { getByText } = render(<PrimeraApp saludo={saludo} />)
    //     expect(getByText(saludo)).toBeInTheDocument()
    // })

    test('debe de mostrar <PrimeraApp /> correctamente', () => {

        const saludo = 'Hola, soy Sergio'
        const wrapper = shallow(<PrimeraApp />)
    })

})
