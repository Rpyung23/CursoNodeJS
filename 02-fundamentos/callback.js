setTimeout(function ()
{
    console.log('Hola mundo');
},3000);

/** callback es una funcion**/
let getUsuarioById = (id,callbak)=>
{
    let usuario =
        {
            nombre : 'Juan',
            id
        }
        if (id==20)
        {
            callbak(`El usuario con la id ${id} no existe`)/** llamo y envio parametros aa la funcion llamada callback**/
        }else
            {
                callbak(null,usuario);/** llamo y envio parametros aa la funcion llamada callback**/
            }
}

getUsuarioById(2,(err,usuario)=>
      {
          if (err)
           {
               return console.log(err);
           }
          console.log('User BD ',usuario);
      }
     );