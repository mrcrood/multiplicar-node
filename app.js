
//Importacion del yargs
const argv = require('./config/yargs').argv;
//Importacion de colors
const colors = require('colors');

//importar funciones de multiplicar.js
const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar');



let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)               
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(file => console.log(`File created: ${file}`))
            .catch(e => console.log(e));
    break;

    default:
        console.log('Comando no reconocido')
        break;
}