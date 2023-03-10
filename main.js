/*
6. Construir el algoritmo en Javascript para un programa
para cualquier cantidad de estudiantes que lea el nombre,
el sexo y la nota definitiva y halle al estudiante con la mayor
nota y al estudiante con la menor nota y cuantos eran
hombres y cuantos mujeres.
*/
let datos = {
    nombre:[],
    sexo:[],
    nota:[]   
}
let can="si";
while(can=="si"){
    let nom = prompt("Ingrese el nombre del estudiante")
    let sex = (prompt(`${nom} Ingrese su genero Femenino o masculino(F o M)`)).toUpperCase()
    let nota = Number(prompt(`Ingrese la nota definitiva de ${nom} (0.0 a 5.0)`))
    datos.nombre.push(nom)
    datos.sexo.push(sex)
    datos.nota.push(nota)
    can = prompt("Desea ingresar los datos de otro estudiante (si o no): ")
    
}
var ch=0;
var cm =0;
for(let i=0;i < datos.sexo.length;i++){
    (datos.sexo[i]=="H")? ch++:cm++

}
console.table(datos)
var maximo=Math.max(...datos.nota)
var minimo= Math.min(...datos.nota)
console.log(`El estudiante ${datos.nota[datos.nota.indexOf(maximo)]} tiene la mayor nota que es : ${maximo}`)
console.log(`El estudiante ${datos.nota[datos.nota.indexOf(minimo)]} tiene la mayor nota que es : ${minimo}`)
console.log(`La cantidad de Mujeres son: ${cm}\nLa cantidad de hombres son ${ch} `)

