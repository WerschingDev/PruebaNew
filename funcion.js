function suma(a,b) {
    var sum = a+b;
    console.log("la suma es " + sum);
        
    }

    suma(6,20);

    function dato_trabajador() {
        var salario = 2550;
        console.log("su salario es: " + salario);
    }

    var dato = dato_trabajador();

    function dato_trabajador1() {
        var salario1 = 2550;
        return salario1;
    }
    var valor = dato_trabajador1();
    console.log( "sueldo: " + valor);

    //funcion anonima

    var resta = function(n,m) {

        return n-m ;
        
    }

    console.log(resta(89,34));

    // funcion anonima flecha

    var resta1 = (n1,n2) => n1 - n2;
    console.log(resta1(67,23));

//
    var nombre = function () {
        return "juan";
    }
    console.log(nombre());

//
    var nombre1 = () => "victor";
    console.log(nombre1());

// funcion anidada

function operacion() {
    const PI = 3.14;
    function area(radio) {
        var area = PI * radio * radio;
        console.log("el arera del circulo es: "+ area);
    }
    operacion.area = area;

}

var radio = 5;
operacion();
operacion.area(radio);

