/* 1. Construir el algoritmo para un programa que ingrese tres
notas de un alumno, si el promedio es menor o igual a 3.9
mostrar un mensaje "Estudie“, de lo contrario un mensaje que
diga "becado" 

    */
let notas=[];

function pedirnotas(notas){
    for(let i=0;i<3;i++){
        let nota = prompt(`Ingrese la nota numero ${i} del estudiante: `);
        notas.push(nota);
    }
    return notas
}


let suma = notas.reduce ((acumulado , cur) => {
    return acumulado+cur.notas 
},0)

suma < 3.9  ? "Estudie no sea como los de sputnik" : "Sos un pro master estas becado"


console.log(pedirnotas(notas)) 