# Formulario de Reservación de Cita

Esta es una página web simple que permite a los usuarios reservar una cita para el baño de su mascota.

## HTML

Se utilizó para estructurar la página y definir los elementos del formulario de reservación.

## CSS
Se empleó para dar estilo a los elementos HTML y mejorar la apariencia visual de la página.

## JS
Se usó para darle interactividad a la página, como la validación del formulario y mostrar mensajes de confirmación. A continuación se brindan detalles de la función:

1. **Listener de Eventos:**

Se utilizó document.getElementById('reservar').addEventListener('click', function() {...}) para agregar un listener de eventos al botón de reserva (#reservar). Este evento se activa cuando el usuario hace clic en el botón.

2. **Mensaje de Confirmación:**

Se utilizó const confirmacion = confirm("¿Estás seguro de que deseas enviar el formulario?"); para mostrar un mensaje de confirmación al usuario utilizando la función confirm(). Este mensaje solicita al usuario que confirme si desea enviar el formulario.

3. **Continuación con la Reserva:**

Si el usuario confirma el envío, se ejecuta la lógica de reserva dentro de la condición if (confirmacion) {...}.
Se obtienen los valores del nombre de la mascota y la fecha de la cita del formulario.
Se verifica si ambos campos del formulario están completos (if (nombre && fecha) {...}).
Si los campos están completos, se muestra un mensaje de confirmación de la reserva con los detalles de la mascota y la fecha de la cita.
Si algún campo falta por completar, se muestra un mensaje indicando al usuario que complete todos los campos antes de enviar la reserva.

