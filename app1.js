//Requires
const {crearArchivo} = require('./multiplicar/multiplicar');

//leyendo los pareametros mediante consola
let argv = process.argv; //guardar los datos del arreglo de url's
let parametro = argv[2];//Acceder al tercer dato del arreglo
let base = parametro.split('=')[1] //Dividir con split y elegir del arreglo el segundo dato


crearArchivo(base)
    .then(file => console.log(`File created: ${file}`))
    .catch(e => console.log(e));

