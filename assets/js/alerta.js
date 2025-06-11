// Enviar datos a WhatsApp
  document.getElementById('subscription-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const ciudad = document.getElementById('ciudad').value;
    const direccion = document.getElementById('direccion').value;
    const telefono = document.getElementById('telefono').value;

    const mensaje = `Hola, soy ${nombre}, me suscribí en Magic Colors Group y quiero reclamar mi 10% de descuento.
Mis datos:
📧 Email: ${email}
📍 Ciudad: ${ciudad}
🏠 Dirección: ${direccion}
📱 Teléfono: ${telefono}`;

    const numeroWhatsApp = '573126435567'; // Reemplaza con tu número real
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, '_blank'); // Abre WhatsApp
    document.getElementById('popup').style.display = 'none'; // Cierra popup después de enviar
  });

  // Funcionalidad del botón de cierre (X)
  document.querySelector('.close-btn').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
  });