
// Pre-entrega 1 - Simulador de Comiquería

alert("¡Bienvenido a la Comiquería !");

let seguirComprando = true;

while (seguirComprando) {
    const nombreCliente = prompt("Ingrese su nombre:");
    const nombreComic = prompt("¿Qué cómic querés comprar?");
    const cantidad = parseInt(prompt("¿Cuántas unidades querés?"));
    const precioUnitario = parseFloat(prompt("¿Cuál es el precio unitario?"));

    // Validaciones
   if (
    nombreCliente === "" ||
    nombreComic === "" ||
    isNaN(cantidad) ||
    isNaN(precioUnitario) ||
    cantidad <= 0 ||
    precioUnitario <= 0
) {
    alert("Por favor, completá todos los datos correctamente.");
} else {
    const totalCompra = cantidad * precioUnitario;

    const mensaje = "Hola " + nombreCliente +
        ". Compraste " + cantidad +
        " unidad/es de " + nombreComic +
        " y el total es de $" + totalCompra;

    alert(mensaje);
    console.log(mensaje);
}
