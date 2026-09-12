// Función corregida para enviar el pedido directo a tu WhatsApp de Audio Work
function enviarPedido(producto, precio) {
    // Mensaje predefinido ordenado que te llegará a tu teléfono
    const mensaje = `Hola Audio Work 👋, vi su página web y deseo realizar un pedido en Quito:\n\n` +
                    `📦 *Producto:* ${producto}\n` +
                    `💵 *Precio:* $${precio}.00\n\n` +
                    `Por favor, me ayudan indicando el costo del envío a mi sector. ¡Muchas gracias!`;
    
    // Codificar el texto de forma segura para internet
    const mensajeCodificado = encodeURIComponent(mensaje);
    
    // Enlace directo corregido con tu número 593979339137 sin llaves confusas
    const urlWhatsApp = "https://wa.me" + mensajeCodificado;
    
    // Abrir el chat de WhatsApp en una pestaña nueva
    window.open(urlWhatsApp, '_blank');
}
