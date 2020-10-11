let nombre = 'Deadpool';
let real = 'Wade Winston';

console.log(nombre+' '+real);/**Forma 1**/
function getNombres()
{
    return `${'Mi nombre es '+nombre+' '+real}`;
}
console.log(`${getNombres()}`);