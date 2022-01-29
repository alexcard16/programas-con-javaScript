class Calculadora{

	sumar(num1,num2) {
	return parseInt(num1) + parseInt(num2) ;
	
	}
 


	restar(num1,num2) {
	return num1 - num2 ;
	
	}
	multiplicar(num1,num2) {
	return num1 * num2 ;
	
	}

	dividir(num1,num2) {
	return num1 / num2 ;
	
		}
	raizCaudrada(num1){

	return	Math.sqrt(num1);
	}

	potencia(num1,num2){

	return num1**num2;
	}

}
 
 const calculadora = new Calculadora();

alert("ingesa un valor: 1 = sumar, 2 = restar, 3 = multiplicar, 4 = dividir, 5 = Raiz Caudrada, 6 = potencia  ")

let opera = prompt("ingrese la operacion deseada")

if (opera == 1 ){
	let num1 = prompt("ingrese el numero 1");
    let num2 = prompt("ingrese el numero 2");
	resultado=calculadora.sumar(num1,num2);
	alert(resultado);
}

else if (opera == 2 ){
	let num1 = prompt("ingrese el numero 1");
    let num2 = prompt("ingrese el numero 2");
	resultado= calculadora.restar(num1,num2);
	alert(resultado);
}

else if (opera == 3 ){
	let num1 = prompt("ingrese el numero 1");
    let num2 = prompt("ingrese el numero 2");
	resultado= calculadora.multiplicar(num1,num2);
	alert(resultado);
}

else if (opera == 4 ){
	let num1 = prompt("ingrese el numero 1");
    let num2 = prompt("ingrese el numero 2");
	resultado= calculadora.dividir(num1,num2);
	alert(resultado);
}

else if (opera == 5){
	let num1 = prompt("ingrese un numero para hallar su raiz");
	resultado = calculadora.raizCaudrada(num1);
	alert(resultado);
}

else if (opera == 6){
	let num1 = prompt("ingrese la base");
	let num2 = prompt("ingrese el exponente");
	resultado = calculadora.potencia(num1,num2);
	alert(resultado);
}