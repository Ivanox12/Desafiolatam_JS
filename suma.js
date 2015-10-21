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


// Sum with out if

 var suma = 0; // This variable starts in 0 as it will save the sum

for (var i=0; i<=100; i+= 2) { // This line has the for loop that start the variable from 0 under the 100 number and will count from 2 from 2
		
		suma = suma +i; // To refactor this line can be used suma += i;
}
//Mostrar el resultado

console.log("El resultado de la sumatoria es:" + suma);



// Sums using function 

function sum(){
	var suma = 0; // This variable starts in 0 as it will save the sum

	for (var i=0; i<=100; i++) { // This line has the for loop that start the variable from 0 under the 100 number and will count 1 to 1 
		if (i%2==0){ // This line is the conditional of a current number is even
			suma += i; // To refactor this line can be used suma += i;
		}
    }
	return suma;
}
//Show result

var answer = sum();
console.log("El resultado de la sumatoria es:" + answer);



function sum(inicio, fin){
	var suma = 0; // This variable starts in 0 as it will save the sum
	if (inicio <= fin){
		for (var i=inicio; i<=fin; i++) { // This line has the for loop that start the variable from 0 under the 100 number and will count 1 to 1 
		
			suma += i; // To refactor this line can be used suma += i;
		}
    }
	return suma;
}
//Show result

var answer = sum(100, 200);
console.log("El resultado de la sumatoria es:" + answer);

*/


function operacion(inicio, fin, tipo){
	var resultado;  // This variable starts in 0 as it will save the sum

	if(tipo == "sumatoria"){
		answer = 0;
	} else if (tipo == "factorial"){
		answer = 1;
	} else{
		answer = "error"
	}

	if (inicio <= fin){
		for (var i=inicio; i<=fin; i++) { // This line has the for loop that start the variable from 0 under the 100 number and will count 1 to 1 
			if(fin == 0){
			break;
		}

		if (tipo == "sumatoria"){
				answer += i;
			} else if (tipo == "factorial") {
				answer *= i;
			} else{
				answer = "This operation is not supported"
				return answer
			}
   	 	 }
	}

return answer ;
}
//Show result

var answer = operacion(1,3,"perro");
console.log("El resultado de la sumatoria es:" + answer);




