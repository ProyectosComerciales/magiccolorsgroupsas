
  function enviarWhatsAppSuscripcion() {
    const nombre = document.getElementById("nombreSus").value;
    const correo = document.getElementById("correoSus").value;
    const ciudad = document.getElementById("ciudadSus").value;
    const direccion = document.getElementById("direccionSus").value;
    const telefono = document.getElementById("telefonoSus").value;

    const mensaje = ` ***Suscripción Nueva - Magic Colors Group*** 10% Descuento *%0A
 
 Nombre: ${nombre}%0A
 Correo: ${correo}%0A
 Ciudad: ${ciudad}%0A
 Dirección: ${direccion}%0A
 Teléfono: ${telefono}`;

    window.open(`https://wa.me/573126435567?text=${mensaje}`, "_blank");
  }

  function enviarWhatsAppCotizacion() {
    const nombre = document.getElementById("nombreCot").value;
    const ciudad = document.getElementById("ciudadCot").value;
    const producto = document.getElementById("productoCot").value;

    const mensaje = `*Solicitud de Cotización - Magic Colors Group*%0A
 Nombre: ${nombre}%0A
 Ciudad: ${ciudad}%0A
 Producto o servicio: ${producto}`;

    window.open(`https://wa.me/573126435567?text=${mensaje}`, "_blank");
  }

