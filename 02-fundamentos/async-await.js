/**
 *  Async Await
 * ejecutar promesas en cadenas
 * **/

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
let getEmpleado = async (id_)=>
{
        let empleadodb = empleados.find((empleado) =>
            empleado.id === id_);

        if (!empleadodb)
        {
            throw new Error(`No existe ${id_}`);
        }else
        {
            return empleadodb;
        }
}

let getSalario = async (Oempleado)=>
{
    let salarioDB = salarios.find(salario_ => salario_.id===Oempleado.id);
        if (!salarioDB)
        {
            throw new Error(`No existe salario para el empleado ${Oempleado.id}`);
        }else
        {
            return (salarioDB);
        }
}



let getInformacion = async (id)=>
{
    let emple = await getEmpleado(id);
    let resp = await getSalario(emple);
    return `informacion ${emple.nombre}, ${resp.price}`;
}
getInformacion(2).then((msm)=>
{
    console.log(msm);
}).catch((error)=>
{
    console.log(error);
});
