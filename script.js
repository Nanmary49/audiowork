function enviarPedido(producto, precio) {
    const mensaje = "Hola Audio Work 👋, vi su página web y deseo realizar un pedido en Quito:\n\n" +
                    "📦 Producto: " + producto + "\n" +
                    "💵 Precio: $" + precio + ".00\n\n" +
                    "Por favor, me ayudan indicando el costo del envío a mi sector. ¡Muchas gracias!";
    
    const mensajeCodificado = encodeURIComponent(mensaje);
    
    // 👇 ¡MIRA AQUÍ! AQUÍ ESTÁ TU NÚMERO CON EL CÓDIGO DE ECUADOR (593):
    const urlWhatsApp = "https://wa.me" + mensajeCodificado;
    
    window.open(urlWhatsApp, '_blank');
}


