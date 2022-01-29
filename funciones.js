
function sumar(num1,num2) {
	let res = num1 + num2 ;
	document.write(res)
}
 


function restar(num1,num2) {
	let res = num1 - num2 ;
	document.write(res)
}

function multiplicar(num1,num2) {
	let res = num1 * num2 ;
	document.write(res)
}

function dividir(num1,num2) {
	let res = num1 / num2 ;
	document.write(res)
}


 

alert("ingesa un valor: 1 = sumar, 2 = restar, 3 = multiplicar, 4 = dividir ")

let opera = prompt("ingrese la operacion deseada")

if (opera == 1 ){
	let num1 = prompt("ingrese el numero 1");
    let num2 = prompt("ingrese el numero 2");
	sumar(num1,num2);
}

else if (opera == 2 ){
	let num1 = prompt("ingrese el numero 1");
    let num2 = prompt("ingrese el numero 2");
	restar(num1,num2);
}

else if (opera == 3 ){
	let num1 = prompt("ingrese el numero 1");
    let num2 = prompt("ingrese el numero 2");
	multiplicar(num1,num2);
}

else if (opera == 4 ){
	let num1 = prompt("ingrese el numero 1");
    let num2 = prompt("ingrese el numero 2");
	dividir(num1,num2);
}