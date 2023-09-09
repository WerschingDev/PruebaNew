function area() {

    const PI = 3.14;
    var radio = document.getElementById("radio").value;
    var resultado = PI * radio * radio;
    document.getElementById("resultado").value = resultado ;
}

var fechaElemento = document.getElementById("fecha");
var times = new Date(0);
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', 
minute: 'numeric', second: 'numeric', hour12: false };
var fechaFormateada = times.toLocaleDateString("es-AR", options);


fechaElemento.textContent = "la fecha es : " + fechaFormateada;


//evaluation

var functionName = "multiply";
var functionBody = "return a * b;";
var functionDefinition = functionName + " = function(a, b) { " + functionBody + " };";
eval(functionDefinition);

var product = multiply(5, 3);
console.log(product);

var a = 4;
var b = 5;
var d= "a + b";
console.log(eval(d));

//parse

var ab = parseFloat("10");
var bc = parseFloat("20curso");

console.log(bc);

var xc= parseInt("10.532");
console.log(xc);

var dateString = "2023-08-28T12:00:00"; //muestra el tiempo en milisegundos
var tiempoMilisegundos = Date.parse(dateString);

console.log(tiempoMilisegundos);

