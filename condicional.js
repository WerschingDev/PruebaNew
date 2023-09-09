var a = 3;
if (a > 5) {

    console.log("es mayor");
    document.getElementById("caja").innerHTML = "ES MAYOR"

} else {

    console.log("es menor");
    document.getElementById("caja").innerHTML = "ES MENOR"
}

let curso = "python";

switch (curso) {
    case "java":
        console.log("java");
        break;
    case "python":
        console.log("python");
        break;
    case "javascript":
        console.log("javascript");
        break;

    default:
        break;
}