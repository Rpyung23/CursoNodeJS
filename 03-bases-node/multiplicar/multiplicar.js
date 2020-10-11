//required
const fs = require('fs');
const colors = require('colors');
/** Archivos .txt **/

let listarDatos = (base,limite )=>
{
    for(let i = 1;i<=limite;i++)
    {
        console.log(`${i} * ${base} = ${base*i} \n`.green);
    }
}


let generarTabla = (base)=>
{
    let data = '';
    for(let i = 1;i<=10;i++)
    {
        data+=`${i} * ${base} = ${base*i} \n`;
    }
    return data;
}
/** Export modulo para usar en otro archivo**/
let generararchivo = (name_archivo,base)=>
{
    return new Promise((resolve, reject)=>
    {
        fs.writeFile(name_archivo,generarTabla(base),(err)=>
        {
            if (err)
            {
                reject(err);
            }else
                {
                    resolve(true);
                }
        });

    });
}
/** OTRA FORMA DE EXPORT MODULO  para usar en otro archivo***/
module.exports =
    {
        listarDatos,
        generararchivo
    }

