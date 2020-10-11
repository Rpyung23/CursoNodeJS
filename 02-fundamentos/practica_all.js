let ArraysUsuarios = [
    {
        user:'Nelson',
        email:'nelson@gmail.com'
    },{
        user:'Juan',
        email:'juan@gmail.com'
    },{
        user:'Pedro',
        email:'pedro@gmail.com'
    },{
        user:'Luis',
        email:'luis@gmail.com'
    }];
let ArraysAutomovil = [
    {
      email:'nelson@gmail.com',
      placa:'NELSON-863'
    },{
        email:'juan@gmail.com',
        placa:'JUAN-969'
    },{
        email:'pedro@gmail.com',
        placa:'PEDRO-896'
    },{
        email:'luis@gmail.com',
        placa:'LUIS-8936'
    }];
let ArraysGanacias = [
    {
        placa : 'NELSON-863',
        ganacia :45.86
    },{
        placa : 'JUAN-969',
        ganacia :78.69
    },{
        placa : 'PEDRO-896',
        ganacia :15.86
    },{
        placa : 'LUIS-8936',
        ganacia :5.50
    }];

/**OBTENER DATOS USER CON callbacks(Normales)**/

let getUsuario = (email_,callback) =>
{
    let oUser = ArraysUsuarios.find(oU => oU.email === email_ );
    if (!oUser)/**VACIO**/
    {
        callback(`El email ${email_} no existe`,null)
    }else /**LLENO**/
        {
            callback(null,oUser);
        }
}
/**OBTENER PLACA AUTOMOVIL CON callbacks(Promesas)**/
let getPlaca = (oUer)=>
{
    /**Busqueda en arrys automovil**/
    let oPlaca = ArraysAutomovil.find( (oP) => oP.email===oUer.email );
    return new Promise( (resolve,reject)=>
    {
        if (!oPlaca)
        {
            reject(`No existe un automovil afiliado al correo ${oUer.email}`);
        }else
            {
                resolve(oPlaca);
            }
    });
};
/**OBTENER GANACIA CON callbacks(Async-Await)**/
let getGanacias = async (oPlaca)=>
{
    /**Buscar en el Arrays**/
    let oGan = ArraysGanacias.find((oG)=>oG.placa === oPlaca.placa);
    if (!oGan)
    {
        return `Sin Ganacias 0.00`;
    }else
        {
            return oGan;
        }
}
let info_gana = async (oPlaca)=>
{
    let oG = await getGanacias(oPlaca);
    return console.log(`Ganacia es de ${oG.ganacia}`);
}
getUsuario('nelson@gmail.com',(error,oUser)=>
{
    if (!error)/**Error no existe**/
    {
        console.log(`${oUser.user} posee el email ${oUser.email}`);
        getPlaca(oUser).then((oPlaca)=>
        {
            console.log(`Datos de Vehiculo afiliado : ${oPlaca.placa}`);
            info_gana(oPlaca);
        },(error)=>
        {
            console.log(error);
        }).catch((error)=>
        {
            console.log(error);
        });
    }else
        {
            console.log(error);
        }
});