
// Pre-entrega 1 - Simulador de Comiquería

alert("¡Bienvenido a la Comiquería!");

let seguirComprando = true;

while (seguirComprando) {
    const nombre = prompt("Ingresá tu nombre:");
    const comic = prompt("¿Qué cómic querés comprar?");
    const cantidad = parseInt(prompt("¿Cuántas unidades querés?"));
    const precio = parseFloat(prompt("¿Cuál es el precio de cada unidad?"));

    if (nombre === "" || comic === "" || isNaN(cantidad) || isNaN(precio)) {
        alert("Ingresaste algún dato incorrecto.");
    } else {
        const total = cantidad * precio;
        const mensaje = "Hola " + nombre + ", compraste " + cantidad +
            " unidad/es de " + comic + ". Total: $" + total;

        alert(mensaje);
        console.log(mensaje);
    }

    seguirComprando = confirm("¿Querés hacer otra compra?");
}

alert("¡Gracias por usar el simulador!");
