# Configuración de EmailJS para el formulario de contacto

Este documento explica cómo configurar EmailJS para hacer funcional el formulario de contacto de ClimaBethel.

## Paso 1: Crear una cuenta en EmailJS

1. Visita [EmailJS](https://www.emailjs.com/) y regístrate para obtener una cuenta gratuita.
2. La cuenta gratuita permite hasta 200 correos electrónicos por mes, lo cual es suficiente para la mayoría de los sitios pequeños.

## Paso 2: Configurar un servicio de correo electrónico

1. Una vez que tengas tu cuenta, ve al panel de control.
2. Haz clic en "Email Services" y luego en "Add New Service".
3. Selecciona tu proveedor de correo electrónico (Gmail, Outlook, etc.)
4. Sigue las instrucciones para conectar tu cuenta de correo electrónico.
5. Anota el ID del servicio (lo necesitarás para configurar el sitio).

## Paso 3: Crear una plantilla de correo electrónico

1. En el panel de control, ve a "Email Templates" y haz clic en "Create New Template".
2. Diseña la plantilla de correo electrónico para los mensajes del formulario de contacto.
3. Utiliza las siguientes variables en tu plantilla (estas coinciden con las que se envían desde el formulario):
   - `{{from_name}}` - Nombre del remitente
   - `{{reply_to}}` - Correo electrónico del remitente
   - `{{phone_number}}` - Número de teléfono
   - `{{service_needed}}` - Servicio solicitado
   - `{{message}}` - Mensaje del formulario
4. Guarda la plantilla y anota el ID de la plantilla.

## Paso 4: Configurar el sitio web

1. Abre el archivo `index.html` en un editor.
2. Busca la sección con el script de EmailJS (cerca del final del archivo).
3. Reemplaza `"YOUR_PUBLIC_KEY"` con tu clave pública de EmailJS que encontrarás en la configuración de tu cuenta.
4. Abre el archivo `js/main.js` en un editor.
5. Busca la línea: `emailjs.send('service_id', 'template_id', templateParams)`
6. Reemplaza `'service_id'` con el ID de tu servicio de correo.
7. Reemplaza `'template_id'` con el ID de tu plantilla.
8. Asegúrate de que el correo de destino (to_email) sea "contacto@climabethel.cl"

## Limitaciones y consideraciones

- La versión gratuita de EmailJS tiene un límite de 200 correos por mes.
- Para sitios con alto tráfico, considera actualizar a un plan de pago.
- Este método expone tu clave pública de EmailJS, pero esta clave está diseñada para ser usada en el lado del cliente.
- Para mayor seguridad, considera implementar un servidor backend para manejar los envíos de correo.
