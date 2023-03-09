/* 1. Construir el algoritmo para un programa que ingrese tres
notas de un alumno, si el promedio es menor o igual a 3.9
mostrar un mensaje "Estudie“, de lo contrario un mensaje que
diga "becado" 

    */
let notas=[];

function pedirnotas(notas){
    for(let i=0;i<3;i++){
        let nota = Number(prompt(`Ingrese la nota numero ${i+1} del estudiante (0.0 a 5.0): `));
        notas.push(nota);
    }
    return notas
}
pedirnotas(notas)
console.log(notas) 

const inicio=0;
const suma = notas.reduce((acumulado , cur) =>acumulado + cur ,inicio);
let ifsimp = (suma/3) < 3.9  ? console.log("Estudie bajo, no sea como los de sputnik") : console.log("Sos un pro master estas becado");


