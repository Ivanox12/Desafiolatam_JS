
/*
// Suma de numeros pares 

 var suma = 0; // This variable starts in 0 as it will save the sum

for (var i=0; i<=100; i++) { // This line has the for loop that start the variable from 0 under the 100 number and will count 1 to 1 
	
	if (i%2==0){ // This line is the conditional of a current number is even
		
		suma = suma +i; // To refactor this line can be used suma += i;
	}
}
//Show result

console.log("El resultado de la sumatoria es:" + suma);
*/

// Sum with out if

 var suma = 0; // This variable starts in 0 as it will save the sum

for (var i=0; i<=100; i+= 2) { // This line has the for loop that start the variable from 0 under the 100 number and will count from 2 from 2
		
		suma = suma +i; // To refactor this line can be used suma += i;
}
//Mostrar el resultado

console.log("El resultado de la sumatoria es:" + suma);