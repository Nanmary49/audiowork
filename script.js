function enviarPedido(producto, precio) {
    const mensaje = "Hola Audio Work, vi su página web y deseo realizar un pedido en Quito:\n\n" +
        "Producto: " + producto + "\n" +
        "Precio: $" + precio.toFixed(2) + "\n\n" +
        "Por favor, me ayudan indicando el costo del envío a mi sector y los datos para pagar por transferencia. ¡Muchas gracias!";
    const urlWhatsApp = "https://wa.me/593979339137?text=" + encodeURIComponent(mensaje);
    window.open(urlWhatsApp, "_blank", "noopener,noreferrer");
}
