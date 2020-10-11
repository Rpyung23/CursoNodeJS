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


let getsalario = (empleado,callbackSalario)=>
{
    let salarioBD = salarios.find(salario_ => salario_.id
        === empleado.id);
    if (!salarioBD)
    {
        callbackSalario(`Sin salario`);
    }else
    {
        callbackSalario(null,salarioBD);
    }
}


let getEmpleado = (id_,callback)=>
{
    let empleadodb = empleados.find(empleado =>
        empleado.id === id_);
    if (!empleadodb)
    {
        callback(`No existe ${id_}`);
    }else
        {
            callback(null,empleadodb);
        }
}

getEmpleado(3,(err,empleado)=>
{
    if (err)
    {
        console.log(err);
    }
    else
        {
            console.log(`Empleado ${empleado.id} : ${empleado.nombre}`);
            getsalario(empleado,(error,salario_)=>
            {
                if (error)
                {
                    console.log(error);
                }else
                    {
                        console.log(`Salario es ${salario_.price}`)
                    }
            });
        }
});


