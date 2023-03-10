/*
5. Construir el algoritmo que lea por teclado dos números,
si el primero es mayor al segundo informar su suma y
diferencia, en caso contrario, informar el producto y la
división del primero respecto al segundo.
*/
let num1 = Number(prompt("ingrese el primer numero: "));
let num2 = Number(prompt("ingrese el segundo numero: "));


(num1 > num2)? console.log(`La suma de los numeros es: ${num1+num2} y su diferencia es de ${num1 - num2}`): 
console.log(`El producto de la divicion es:  ${num1 * num2} y la divicion de los numeros es: ${num1 / num2}`)