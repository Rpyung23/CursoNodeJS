const yargs = require('yargs');

let opts =
    {
        base:
            {
                demand:true,
                alias :'b'
            },
        limite:
            {
                demand: true,
                alias :'l',
                default: 10

            }
    }
let argv = yargs.command('crear','Imprime en consola la tabla de multiplicar',opts)
    .command('listar','listando .... ',opts).argv;
module.exports =
    {
        argv
    }