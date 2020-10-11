const argv = require('./config/config.js').argv;
const color = require('colors');

const { listarDatos,generararchivo } = require('./multiplicar/multiplicar.js');

let generarMultiplicarText = (base)=>
{
    generararchivo(`./tablas/tabla_${base}.txt`,base).then((resolve)=>
    {
        if (resolve)
        {
            console.log('Archivo creado satisfactoriamente');
        }
    },(reject)=>
    {
        console.log(reject);
    });
}
/*
generarMultiplicarText(8);*/
let argv2 = process.argv; /// obtengo los datos de la conslola nodemon app --base=2 -> --base=2 los datos q yo envio
//let base = argv[2];// como es un array ontengo el array en la posicion 2
/*let basevalor = base.split('=')[1]; // con el split obtengo el valor q se asigno
console.log(argv);
console.log(base);
console.log(basevalor);
//console.log(base);
generarMultiplicarText(basevalor);*/
//console.log(argv2)
console.log("yargs : -> base " +argv.base+" ->limit : "+argv.limite);
console.log(argv._[0]);
switch (argv._[0])
{
    case 'crear':
        generarMultiplicarText(argv.base)
        break;
    case 'listar':
        listarDatos(argv.base,argv.limite);
        break
}