/**Creo un Objeto Deadpool**/
let deadpool =
    {
        nombre : 'Wade',
        apellido: 'Winston',
        poder:'Regeneracion',
        getNombre :function ()
        {
            return `${this.nombre}${this.apellido} - poder : ${this.poder}`;
        }
    };
console.log(deadpool.getNombre());
//let {nombre,apellido,poder}=deadpool;/**deben tener el mismo nombre del objeto**/
let {nombre:primernombre,apellido,poder}=deadpool;/**asigno el nombre a otra variable llamada primernombre**/

console.log(`${primernombre+apellido+poder}`);/****/