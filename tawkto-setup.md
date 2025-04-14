# Configuración de tawk.to para ClimaBethel

Este documento explica cómo configurar tawk.to como solución de chat en vivo para la página web de ClimaBethel.

## ¿Qué es tawk.to?

tawk.to es una plataforma de chat en vivo gratuita que permite a los propietarios de sitios web comunicarse con sus visitantes de manera fácil y eficiente. Algunas ventajas:

- Completamente gratuito (sin límites de chats ni agentes)
- Fácil de configurar
- Aplicaciones móviles para responder a los chats desde cualquier lugar
- Personalizable para que coincida con la apariencia de tu sitio web
- Traducciones automáticas para comunicarse con clientes de diferentes idiomas

## Paso 1: Crear una cuenta en tawk.to

1. Visita [tawk.to](https://www.tawk.to/) y regístrate para obtener una cuenta gratuita.
2. Puedes registrarte usando tu correo electrónico, Google o Facebook.

## Paso 2: Configurar tu propiedad

1. Después de registrarte, serás dirigido al panel de administración.
2. Si es tu primera vez, se creará automáticamente una "Propiedad" para ti.
3. Si necesitas crear una nueva propiedad:
   - Haz clic en "Administration" en el menú lateral.
   - Selecciona "Properties" y luego "Add Property".
   - Dale un nombre a tu propiedad (ej. "ClimaBethel Website").

## Paso 3: Obtener el código de integración

1. En el panel de administración, haz clic en "Administration".
2. Selecciona "Chat Widget".
3. Verás tu código de integración, similar al que ya está en tu sitio web.
4. Copia el valor de "TAWK_TO_PROPERTY_ID" (será un código alfanumérico).

## Paso 4: Integrar tawk.to en tu sitio web

1. Abre el archivo `index.html` en un editor.
2. Busca el script de tawk.to cerca del final del archivo:
   ```javascript
   <script type="text/javascript">
     var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
     (function(){
       var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
       s1.async=true;
       s1.src='https://embed.tawk.to/62c4409d7b967b1179981df7/default';
       s1.charset='UTF-8';
       s1.setAttribute('crossorigin','*');
       s0.parentNode.insertBefore(s1,s0);
     })();
   </script>
   ```
3. Reemplaza `TAWK_TO_PROPERTY_ID` con el código que copiaste en el paso anterior.
4. Guarda el archivo.

## Paso 5: Personalizar el widget de chat

1. En el panel de administración de tawk.to, ve a "Administration" > "Chat Widget".
2. Aquí puedes personalizar:
   - Colores (configúralos para que coincidan con la paleta de colores de ClimaBethel: azul #0077b6)
   - Textos y mensajes
   - Posición del widget (derecha o izquierda)
   - Comportamiento (auto-inicio, sonidos, etc.)
   - Formulario pre-chat para recopilar información del visitante

## Paso 6: Configurar respuestas automáticas (opcional)

1. Ve a "Administration" > "Canned Responses".
2. Crea mensajes predefinidos para preguntas frecuentes sobre servicios de aire acondicionado.
3. Estos mensajes te ayudarán a responder rápidamente a consultas comunes.

## Paso 7: Configurar horario de atención (opcional)

1. Ve a "Administration" > "Working Hours".
2. Configura los horarios en que estarán disponibles para chatear en vivo.
3. Fuera de ese horario, los visitantes pueden dejar mensajes que recibirás por correo electrónico.

## Paso 8: Instalar la aplicación móvil

1. Descarga la aplicación tawk.to para [Android](https://play.google.com/store/apps/details?id=to.tawk.android) o [iOS](https://apps.apple.com/app/tawk-to/id907458277).
2. Inicia sesión con tu cuenta.
3. Esto te permitirá responder a los chats desde tu teléfono cuando estés en movimiento o en instalaciones de clientes.

## Consejos adicionales

- Responde a los chats lo más rápido posible. Los clientes valoran la respuesta inmediata.
- Utiliza un tono profesional pero amigable que refleje la marca ClimaBethel.
- Configura notificaciones en el panel y en tu dispositivo móvil para no perder ningún chat.
- Revisa regularmente las transcripciones de chat para mejorar el servicio al cliente.
