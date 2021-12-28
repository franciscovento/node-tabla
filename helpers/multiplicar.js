const fs = require('fs');
var colors = require('colors/safe');

const crearArchivo = async ( base = 5, l = false, h = 10 ) => {
  try {

  let salida = '';
  for (let i = 1; i <= h; i++) {
     salida += `${base} x ${i} = ${base * i}\n`
  }
  
  fs.writeFile(`./salida/tabla-${base}.txt`, salida, (err) => {
    if(err)
      throw err
    
    if(l)
      console.log(colors.rainbow(salida));
    
    console.log((colors.green('Tabla creada')));
    
    

  })
  return `tabla-${base}.txt`;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  crearArchivo,
}