const argv = require('yargs')
              .option('b', {
                alias: 'base',
                type: 'number',
                demandOption: true,
                describe: 'define la base para la tabla'
              })
              .option('l',{
                alias: 'listar',
                type: 'boolean',
                default: false,
                describe: 'Si se desea o no listar el resultado'
              })
              .option('h',{
                alias: 'hasta',
                type: 'number',
                default: 10,
                describe: 'limite para tabla'
              })
              .check((argv, options) => {
                if ( isNaN(argv.b)) {
                  throw 'La base tiene que ser un número';
                }
                return true;
              })
              .argv;


module.exports = argv;