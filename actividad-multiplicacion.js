/* Tomar los números de un arreglo llamado 'numeros', [1, 4, 7, 9, 19, 15, 46, 27, 40, 123]
- multiplicar cada numero por dos
-guardar los resultados en un arreglo llamado 'resultado'
-imprimir en consola o en el body cada elemento del arreglo 'resultado'
 */


const numeros = [1,4,7,9,19,15,46,27,40,123];
console.log(numeros);

let resultados=[];

numeros.forEach(function(elemento){
    let multi=elemento*2;
    return resultados.push(multi);
})
console.log(resultados);

for(let i=0; i<resultados.length; i++){
    console.log("Elemento:"+resultados[i]);
}