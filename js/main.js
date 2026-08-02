const nombreCliente = prompt("¿Cuál es tu nombre?");
const nombreComic = prompt("¿Qué cómic querés comprar?");

const cantidad = parseInt(prompt("¿Cuántas unidades querés comprar?"));
const precioUnitario = parseFloat(prompt("¿Cuál es el precio de cada cómic?"));

const totalCompra = cantidad * precioUnitario;

const mensajeFinal = "Hola " + nombreCliente +
    ", elegiste comprar " + cantidad +
    " unidad/es de " + nombreComic +
    ". El total de tu compra es $" + totalCompra + ".";

console.log(mensajeFinal);
alert(mensajeFinal);