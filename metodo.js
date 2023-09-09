//foreach

var a = [1,2,3,4,5,6];

a.forEach((value) => {
    console.log(value == 5);
})


var nombres = ["Alice", "Bob", "Charlie", "David"];

nombres.forEach(function(nombre, indice) {
  console.log("Nombre en el índice " + indice + ": " + nombre);
});


for(i=0; i<a.length; i++){

   console.log(a [i]);

}

//some

var numeros = [10, 5, 8, 3, 12];

const resultado = numeros.some(function(numero, index, array) {
  console.log(`Procesando elemento ${numero} en el índice ${index}`);
  return numero > 10; // Devuelve true si el número es mayor que 10

  });

  if (resultado) {
    console.log(`hay un numero mayor de 10`);
  } else {
    console.log("Ningún número es mayor que 10");
  }

  let numeross = [1,2,3,4,5,6,7];
  
  console.log(numeross.some((value) =>{
        return(value < 0);

  }));

  //every

  var numeros1 = [2, 4, 6, 8, 10];

  const todosPares = numeros1.every(numero => numero % 2 === 0);
  console.log(todosPares); // Devuelve true, ya que todos los elementos son pares
  
  const todosMayoresQueCero = numeros1.every(numero => numero > 0);
  console.log(todosMayoresQueCero); // Devuelve true, ya que todos los elementos son mayores que cero
  
  const todosMayoresQueCinco = numeros1.every(numero => numero > 5);
  console.log(todosMayoresQueCinco); // Devuelve false, ya que no todos los elementos son mayores que cinco
  
//map

const numeros2 = [1, 2, 3, 4, 5];

const cuadrados = numeros2.map(numero => numero * numero);
console.log(cuadrados); // Devuelve [1, 4, 9, 16, 25]

const duplicados = numeros2.map(numero => numero * 2);
console.log(duplicados); // Devuelve [2, 4, 6, 8, 10]

let arrai = [1,2,3,4,5,6,7];

let dupli = arrai.map((value) => {return value * 2});
console.log(dupli);


//filter

const numeros3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosPares = numeros3.filter(function(numero) {
  return numero % 2 === 0;
});

console.log(numerosPares); // Resultado: [2, 4, 6, 8, 10]

let numero5 = [2500,1300,2400, 7000, 400, 900, 3200];

let numeros_grandes = numero5.filter((value)=>{

  return (value > 2000);
});

console.log(numeros_grandes);


//reduce

const numeros6 = [1, 2, 3, 4, 5];
const suma = numeros6.reduce(function(acumulador, numero) {
  return acumulador + numero;
}, 0);

console.log(suma); // Resultado: 15

let numero7 = [1,2,3,4,5,6,7];

let respuesta = numero7.reduce((sumar,dato_act)=> sumar + dato_act,0);

console.log(respuesta);

const numeros8 = [1, 2, 3, 4, 5,6,7,8,9];
const suma1 = numeros8.reduce(function(acumulador, numero) {
  return acumulador * numero;
}, 1);

console.log(suma1); // devuelve factorial