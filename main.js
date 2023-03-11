/*
9. N atletas han pasado a finales en salto triple en los juegos
olímpicos femenino de 2022. Diseñe un programa que pida por
teclado los nombres de cada atleta finalista y a su vez, sus
marcas del salto en metros. Informar el nombre de la atleta
campeona que se quede con la medalla de oro y si rompió
récord, reportar el pago que será de 500 millones. El récord
esta en 15,50 metros.
*/

let datos = {
    nombre:[],
    msalto:[],
}

let can="si";
while(can=="si"){
    let nom =prompt("Ingrese el nombre del atleta")
    let sal = Number(prompt(`Ingrese la distancia del salto del atleta ${nom} (en metros (el . separador de desimales))`))
    datos.nombre.push(nom)
    datos.msalto.push(sal)
    
    can = prompt("Desea ingresar otros datos para ser recalculados(si o no):")
}

var maximo=Math.max(...datos.msalto)
var persona =datos.nombre[datos.msalto.indexOf(maximo)]
console.table(datos)
console.log(`La persona que se lleva la medalla de ORO es: ${persona}`)
if(maximo>15.50){
    console.log(`${persona} ha superado el record y resive 500 millones como bono`) 
}else{
    console.log(`${persona} Ha ganado la medalla de oro`)
}



