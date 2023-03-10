/*
7. Programa que pida el ingreso del nombre y precio de un artículo y la
cantidad que lleva el cliente. Mostrar lo que debe pagar el comprador
en su factura.
*/
let datos = {
    nombre:[],
    precio:[],
    cantidad:[]   
}
let can="si";
while(can=="si"){
    let nom = prompt("Ingrese el nombre del articulo")
    let pre = Number(prompt(`Ingrese el precio del articulo`))
    let cant = Number(prompt(`Ingrese cuantas  unidades compro`))
    datos.nombre.push(nom)
    datos.precio.push(pre)
    datos.cantidad.push(cant)
    can = prompt("Desea ingresar los datos de otro articulo (si o no): ")
}
let vlr=0;
console.table(datos)
for(var i=0;i<datos.precio.length;i++){
    vlr += (datos.precio[i]*datos.cantidad[i])
}

console.log(`El valor a pagar de toda la factura es: ${vlr}`)
