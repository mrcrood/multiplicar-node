//Requires filesystem
const fs = require('fs');
//Importacion de colors
const colors = require('colors');


const listarTabla = (num, limit = 10) => {

    console.log('============='.cyan);
    console.log(`Tabla de ${num}`.cyan);
    console.log('============='.cyan);
    
    for (let i = 1; i <= limit; i++){
            console.log( `${i} * ${num} = ${i * num}`.cyan);    
        }
        
}

const  crearArchivo = (num, limite = 10) =>{
    return new Promise ((resolve, reject) => {
        if(!Number(num)){
            reject(`El valor ingresado ${num} no es número`);
            return;
        }

        let data = '';
        for (let i = 1; i <= limite; i++){
            data += `${i} * ${num} = ${i * num}\n`;    
        }
    
        fs.writeFile(`./files/tabla-${num}-al-${limite}.txt`, data, (err) => {
            if(err)
                reject(err);
            else
                resolve(`tabla-${num}-al-${limite}.txt`.cyan);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}



