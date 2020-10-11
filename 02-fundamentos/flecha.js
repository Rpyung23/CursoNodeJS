/** funciones de flecha **/
//function sumar(a,b)
/*{
    return a+b;
}
console.log(sumar(10,20));
*/
let sumar = (a,b) =>
{
    return a+b;
}
console.log(sumar(10,20));
/** si solo existe un linea de la funcion se puede escribir en una linea la funcion se
 * puede escribir de esta otra manera**/

let sumar2 = (a,b)=>a+b;

console.log(sumar2(10,20));


let saludo = () => 'Hola Mundo';
console.log(saludo());

let deadpool =
    {
        nombre : 'Wade',
        apellido: 'Winston',
        poder:'Regeneracion',
        getNombre :function ()
        {
            return `${this.nombre}+' '+${this.apellido} - poder : ${this.poder}`;
        },
        getNombreFlecha() { return `${this.nombre}+' '+${this.apellido} - poder : ${this.poder}`}
    };
console.log(deadpool.getNombreFlecha())