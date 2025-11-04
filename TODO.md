# TODO: Implementar funcionalidad del formulario de contacto

## Información Recopilada
- El formulario está en `index.html` en la sección `#contact`.
- Actualmente usa Formspree, pero necesitamos enviarlo a `wazasoftsolutions@gmail.com`.
- El servidor está en `public/js/server.js`, corriendo en Node.js.
- Necesitamos manejar POST requests para enviar emails usando Nodemailer.

## Plan
- Instalar Nodemailer para envío de emails.
- Modificar `server.js` para manejar POST en `/contact`, parsear datos del formulario y enviar email a `wazasoftsolutions@gmail.com`.
- Cambiar el `action` del formulario en `index.html` a `/contact`.
- Configurar credenciales de Gmail (usuario proporcionará app password).

## Pasos
- [x] Instalar Nodemailer: `npm install nodemailer`
- [x] Modificar `server.js` para importar Nodemailer y manejar POST requests.
- [x] Actualizar `index.html` para cambiar el action del form.
- [x] Modificar `server.js` para redirigir a la página principal con parámetro de éxito después del envío.
- [x] Agregar JavaScript en `index.html` para mostrar mensaje personalizado basado en el parámetro de query.
- [x] Cambiar el envío del formulario a AJAX para mostrar alerta sin recargar la página.
- [x] Cambiar el parsing de datos en server.js de querystring a JSON.
- [x] Implementar lógica de envío AJAX en script.js para mostrar mensajes en la página sin recargar.
- [ ] Probar el envío de emails (usuario debe proporcionar GMAIL_APP_PASSWORD en .env).

## Dependencias
- Nodemailer para envío de emails.
- Credenciales de Gmail: email y app password.

## Seguimiento
- Completar cada paso y marcar como [x] cuando termine.
