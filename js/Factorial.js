Calcular numero factorial 


var answer = 1;
var n = 10; //5! =120
var i = 1;

do{
    if (n == 0) {

        break;
    }
    //result  = result * i;
    answer *= i;
    i++;
} while (i <= n);

console.log("The factorial of "+ n +" es " + answer );




