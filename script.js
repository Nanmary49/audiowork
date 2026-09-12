// Función para enviar el pedido automático a tu WhatsApp de Audio Work
function enviarPedido(producto, precio) {
    // Tu número de WhatsApp con el código de Ecuador (593) sin el cero inicial
    const telefono = "593979339137";
    
    // Mensaje predefinido ordenado que te llegará a tu teléfono
    const mensaje = `Hola Audio Work 👋, vi su página web y deseo realizar un pedido en Quito:\n\n` +
                    `📦 *Producto:* ${producto}\n` +
                    `💵 *Precio:* $${precio}.00\n\n` +
                    `Por favor, me ayudan indicando el costo del envío a mi sector. ¡Muchas gracias!`;
    
    // Codificar el texto para que sea compatible con los enlaces de internet
    const mensajeCodificado = encodeURIComponent(mensaje);
    
    // Crear el enlace oficial de WhatsApp
    const urlWhatsApp = `https://wa.me{telefono}?text=${mensajeCodificado}`;
    
    // Abrir el chat de WhatsApp en una pestaña nueva
    window.open(urlWhatsApp, '_blank');
}
