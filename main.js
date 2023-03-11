/*
8. Programa que Ingrese por teclado:
a. el valor del lado de un cuadrado para mostrar por pantalla el
perímetro del mismo
b. la base y la altura de un rectángulo para mostrar el área del
mismo
*/
let datos = {
    medida_del_cuadrado:[],
    Perimetro_del_cuadrado:[],
    Medidas_del_triangulo:{altura:[],base:[]},
    area_del_triangulo:[]
}

let can="si";
while(can=="si"){
    let lado=prompt("Ingrese la medida de los lado del cuadrado")
    
    let base = prompt("Ingrese la base del triangulo")
    let altura = prompt("Ingrese la altura del triangulo")
    
    datos.medida_del_cuadrado.push(lado)
    datos.Perimetro_del_cuadrado.push(lado*4)
    datos.Medidas_del_triangulo.altura.push(altura)
    datos.Medidas_del_triangulo.base.push(base)
    datos.area_del_triangulo.push((base*altura)/2)

    console.log(`El perimetro del cuadrado es ${lado*4}`)
    console.log(`El Area del triangulo es: ${(base*altura)/2}`)

    can = prompt("Desea ingresar otros datos para ser recalculados(si o no):")
}
console.table(datos)


