/**Ejecuta trabajo sincrono o asincronos y despues q de qtermina ejecutar alog en particulas**/
let empleados = [
    {
        id:1,
        nombre:'Fernando'
    },{
        id:2,
        nombre:'Melissa'
    },{
        id:3,
        nombre:'Juan'
    }];
let salarios = [
    {
        id:1,
        price:1000
    },
    {
        id:2,
        price:1780
    }];

/**DEfinicion de la funcion**/
let getEmpleado = (id_)=>
{

    return new Promise((resolve,reject)=> /**resolve y reject pueden teener cualqiuer nombre**/
    {                                             /**resolve donde todo es exitoso_ **/
                                                  /**reject donde esta el error**/
        let empleadodb = empleados.find((empleado) =>
            empleado.id === id_);
        if (!empleadodb)
        {
            reject(`No existe ${id_}`);
        }else
        {
            resolve(empleadodb);
        }
    });
}

let getSalario = (Oempleado)=>
{
    let salarioDB = salarios.find(salario_ => salario_.id===Oempleado.id);
    return new Promise((resolve,reject)=>
    {
        if (!salarioDB)
        {
            reject(`No existe salario para el empleado ${Oempleado.id}`);
        }else
            {
                resolve(salarioDB);
            }
    });
}


/**Llamada a la funcion FORMA 1 **/
getEmpleado(3).then((empleado) => /** el .then ejecuta el resolve de la promisa todo bn **/
                                       /** el (error) ejecuta el reject alog salio mal**/
{
    console.log(`Empleado ${empleado.nombre}`);

    getSalario(empleado).then((salario)=>
    {
        console.log(`Salario de : ${salario.price}$`);
    },(error)=>
    {
       console.log(error);
    });
},(error)=>
{
   console.log(error);
});
/**Llamada a la funcion FORMA 2 **/
getEmpleado(2).then((empleado)=>
{
    console.log(`Empleado ${empleado.nombre}`);
    return getSalario(empleado);
}).then((salario)=>
{
    console.log(`Salario de : ${salario.price}$`);
}).catch()
{
    console.log((error)=>
    {
        console.log(error);
    });
}