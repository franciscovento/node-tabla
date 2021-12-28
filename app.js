const { crearArchivo } = require('./helpers/multiplicar');
var colors = require('colors/safe');
const argv = require('./config/yargs');

console.log(argv);
crearArchivo(argv.b, argv.l, argv.h)
  .then(resp => console.log(colors.red(resp)))
  .catch(err => console.log(err))

console.log(`base yargs: ${argv.base}`);





// const [, , arg3 = 'base=5'] = process.argv;
// const [ , base = 5] = arg3.split('=');



// crearArchivo(base)
//   .then( nombreDeArchivo => console.log( nombreDeArchivo, 'creado'))
//   .catch(err => console.log(err));

  // const resp = async () => {
  //   data = await crearArchivo(base);
  //   return data;
  // }

  
