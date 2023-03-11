/*
10. Desarrolle un programa cíclico que capture un dato
numérico cada vez, y los vaya acumulando. El programa se
detiene cuando el usuario digita un cero. El programa debe
mostrar: LA SUMATORIA DE LOS VALORES, EL VALOR DEL
PROMEDIO, CUÁNTOS VALORES FUERON DIGITADOS, MAYOR
VALOR Y MENOR VALOR.
*/
numeros=[];

let can = "si";
while(can=="si"){
    num = Number(prompt(`Ingrese otro numero (digite 0 para terminar)`))
    num == 0?can="no":numeros.push(num);
}

var maximo=Math.max(...numeros)
var minimo=Math.min(...numeros)
var canda =numeros.length
const suma = numeros.reduce((acumulado , cur) =>acumulado + cur ,0);

console.table(numeros)
console.log(`La suma total de los numeros ingresados es: ${suma}`)
console.log(`La el promedio de los numeros es : ${suma/canda}`)
console.log(`la cantidad de numeros ingresados fueron ${canda}`)
console.log(`el numero menor fue ${maximo} Y el numero menor es de ${minimo}`) 


