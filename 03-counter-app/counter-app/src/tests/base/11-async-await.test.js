import { getImagen } from "../../base/11-async-await"

describe('Pruebas con el asyn, await y fetch', () => {

    test('debe retornar la url de la imagen', async () => {

        const url = await getImagen()

        expect(url.includes('https://')).toBe(true)
    })

})
