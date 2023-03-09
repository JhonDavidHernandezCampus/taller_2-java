/* 2. Construir el algoritmo para determinar el voltaje de un
circuito a partir de la resistencia y la intensidad de corriente. */

let resis = Number(prompt(`Ingrese la resistencia de la corriente en (ohmios)`));
let intes = Number(prompt(`Ingrese la intensidad ed la corriente (Amperios)`));

console.log(`El voltaje de un circuito con una intensidaad de corriente= ${intes} ohmios Y 
una resistencia= ${resis} Amperios es : \n V=${resis* intes} Voltios`)
