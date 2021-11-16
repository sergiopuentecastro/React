import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp"
import heroes from "../../data/heroes"

describe('Puebas en funciones de Heroes', () => {

    test('debe retornar un heroe por Id ', () => {

        const id = 1
        const heroe = getHeroeById(id)
        const heroeData = heroes.find(h => h.id === id)

        expect(heroe).toEqual(heroeData)
    })

    test('debe retornar un undefined si el héroe no existe', () => {

        const id = 10
        const heroe = getHeroeById(id)
        const heroeData = heroes.find(h => h.id === id)

        expect(heroe).toBe(undefined)
    })

    test('debe retornar un array con los heroes de DC', () => {

        const owner = 'DC'
        const heroe = getHeroesByOwner(owner)
        const heroeData = heroes.filter((h) => h.owner === owner)

        expect(heroe).toEqual(heroeData)
    })

    test('debe retornar un array con los heroes de Marvel', () => {

        const owner = 'Marvel'
        const heroe = getHeroesByOwner(owner)
        const heroeData = heroes.filter((h) => h.owner === owner)

        expect(heroe.length).toBe(2)
    })

})


