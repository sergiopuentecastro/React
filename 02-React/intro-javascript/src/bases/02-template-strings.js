const nombre = 'Sergio'
const apellido = 'Puente'

const nombreCompleto = `${nombre} ${apellido}`

console.log(nombreCompleto)

function getSaludo() {
    return 'Hola ' + nombre
}

console.log(getSaludo(nombre))