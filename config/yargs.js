const { demand, alias } = require('yargs')

const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias:'l',
        default:10
    }
}


const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Genera en un archivo tabla de multiplicar', opts)
    .help()
    .argv;//se cierra el yargs




module.exports = {
    argv
}