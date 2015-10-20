Calcular numero factorial 


function factorial(numero)
{
    if(numero<0)
     return "Indefinido";
    var factorial=1;
    for(var i=numero;i>1;i--)
      factorial*=i;
    return factorial;
 }

