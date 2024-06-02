document.getElementById('reservar').addEventListener('click', function () {

    const confirmacion = confirm("¿Estás seguro de que deseas enviar el formulario?");


    if (confirmacion) {
        const nombre = document.getElementById('nombre').value;
        const fecha = document.getElementById('fecha').value;

        if (nombre && fecha) {
            document.getElementById('mensaje').textContent = `¡Cita para ${nombre} reservada para el ${fecha}!`;
        } else {
            document.getElementById('mensaje').textContent = 'Por favor completa todos los campos.';
        }
    }
});
