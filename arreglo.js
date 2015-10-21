Invertir el orden del arreglo
/*
 arreglo = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
 areglo.reverse();
 
 var arreglo = [0,1,2,3,4,5,6,7,8,9]
 console.log(arreglo);

 for (var i = arreglo.length - 1; i >= 0 ; i-- ){
 	console.log(arreglo[i]);
 }

*/


 var arreglo = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
 var longitud = array.length;

var izquierda = 0;
var derecha = 0;
for (izquierda = 0, derecha = longitud - 1; izquierda < derecha; izquierda += 1, derecha -= 1)
{
    var temporal = arreglo[izquierda];
    arreglo[izquierda] = arreglo[derecha];
    array[derecha] = temporal;
}
console.log (arreglo)
