
// Pre-entrega 1 - Simulador de Comiquería

alert("¡Bienvenido a la Comiquería!");

let seguirComprando = true;

while (seguirComprando) {
    const usuario = prompt("Ingresá tu nombre:");
    const comic = prompt("¿Qué cómic querés comprar?");
    const cantidad = parseInt(prompt("¿Cuántas unidades querés?"));
    const precio = parseFloat(prompt("¿Cuál es el precio de cada unidad?"));

    const total = cantidad * precio;

    const mensaje = "Hola " + usuario +
        ", compraste " + cantidad +
        " cómic/s de " + comic +
        ". El total es $" + total;

    alert(mensaje);
    console.log(mensaje);

    seguirComprando = confirm("¿Querés hacer otra compra?");
}

alert("¡Gracias por usar el simulador!");
