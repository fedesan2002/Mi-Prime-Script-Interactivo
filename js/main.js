
// Pre-entrega 1 - Simulador de Comiquería

alert("¡Bienvenido a la Comiquería !");

let seguirComprando = true;

while (seguirComprando) {
    const nombreCliente = prompt("Ingrese su nombre:");
    const nombreComic = prompt("¿Qué cómic querés comprar?");
    const cantidad = parseInt(prompt("¿Cuántas unidades querés?"));
    const precioUnitario = parseFloat(prompt("¿Cuál es el precio unitario?"));

    // Validacion para que no ingrese datos vacios o incorrectos
    if (isNaN(cantidad) || isNaN(precioUnitario) || cantidad <= 0 || precioUnitario <= 0) {
        alert("Por favor ingresá números válidos para la cantidad y el precio.");
    } else {
        const totalCompra = cantidad * precioUnitario;
        const mensaje = "Hola " + nombreCliente + "! El total por " + cantidad + " unidad/es de '" + nombreComic + "' es $" + totalCompra;
        
        alert(mensaje);
        console.log(mensaje);
    }

    seguirComprando = confirm("¿Querés consultar por otra compra?");
}

alert("¡Gracias por usar el simulador!");