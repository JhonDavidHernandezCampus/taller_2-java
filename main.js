/*
 4. Construir el algoritmo que solicite el nombre y edad de 3
personas y determine el nombre de la persona con mayor edad.

*/
let datos={
    anombre:[],
    edad:[]
}
let cont=0;
let mayor=0;
for(let i=0; i<3 ; i++){
    let nom = prompt("ingrese se nombre: ")
    let edad = Number(prompt(`ingrese su edad Miss ${nom}`));
    datos.edad.push(edad)
    datos.anombre.push(nom)
}
for(let i=0;i<datos.edad.length;i++)
    if(mayor< datos.edad[i] ){
        mayor=datos.edad[i]
        cont=i
        
}
let pos = datos.edad.indexOf(mayor)
console.table(`${datos.anombre} ${datos.edad}`)
console.log(`la persona con mayor edad es ${datos.anombre[pos]} con una edad de ${mayor}`)

