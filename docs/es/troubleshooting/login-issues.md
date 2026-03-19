---
title: Problemas de Inicio de Sesión
description: Soluciones para problemas al iniciar sesión en la app CGC
---

# Problemas de Inicio de Sesión

## Lo Que Puedes Hacer
- Restablecer tu contraseña si la olvidaste
- Resolver errores de "Credenciales inválidas"
- Solucionar problemas de bloqueo de cuenta
- Resolver problemas de inicio de sesión social (Google, Apple)
- Manejar mensajes de sesión expirada

## Cómo Funciona

**Escenario: Restableciendo una contraseña olvidada**
- **Dado que** estoy en la pantalla de inicio de sesión
- **Cuando** toco **Olvidé mi Contraseña** e ingreso mi dirección de correo electrónico
- **Entonces** recibo un correo electrónico de restablecimiento de contraseña con un enlace para crear una nueva contraseña

**Escenario: Corrigiendo un error de "Credenciales inválidas"**
- **Dado que** estoy intentando iniciar sesión con mi correo electrónico y contraseña
- **Cuando** veo el error "Credenciales inválidas"
- **Entonces** verifico mi correo electrónico y contraseña por errores de escritura, y si es necesario, restablezco mi contraseña

**Escenario: Desbloqueando una cuenta bloqueada**
- **Dado que** mi cuenta ha sido bloqueada por demasiados intentos fallidos de inicio de sesión
- **Cuando** espero 30 minutos o uso el enlace de **Olvidé mi Contraseña** para restablecer mi contraseña
- **Entonces** mi cuenta se desbloquea y puedo iniciar sesión de nuevo

**Escenario: Iniciando sesión con Google o Apple**
- **Dado que** estoy en la pantalla de inicio de sesión
- **Cuando** toco **Iniciar sesión con Google** o **Iniciar sesión con Apple**
- **Entonces** soy redirigido al flujo de inicio de sesión de Google o Apple y luego regreso a la app

**Escenario: Manejando un mensaje de sesión expirada**
- **Dado que** estoy usando la app y veo un mensaje de "Sesión expirada"
- **Cuando** toco **Iniciar Sesión** e ingreso mis credenciales
- **Entonces** inicio sesión de nuevo y puedo continuar usando la app

## Guía Paso a Paso

### Restablecer Tu Contraseña
1. En la pantalla de inicio de sesión, toca **Olvidé mi Contraseña**.
<!-- TODO: Screenshot -->
2. Ingresa la dirección de correo electrónico asociada a tu cuenta.
<!-- TODO: Screenshot -->
3. Toca **Enviar Enlace de Restablecimiento**.
4. Revisa la bandeja de entrada de tu correo electrónico para un mensaje de CGC (revisa tu carpeta de spam o correo no deseado si no lo ves).
5. Abre el correo electrónico y toca el enlace de **Restablecer Contraseña**.
6. Ingresa tu nueva contraseña y confírmala.
7. Regresa a la app e inicia sesión con tu nueva contraseña.

### Corregir "Credenciales Inválidas"
1. Asegúrate de estar usando la dirección de correo electrónico correcta. Revisa que no haya errores de escritura.
2. Asegúrate de estar ingresando la contraseña correcta. Las contraseñas distinguen entre mayúsculas y minúsculas.
3. Si tienes múltiples direcciones de correo electrónico, intenta iniciar sesión con cada una.
4. Si aún no puedes iniciar sesión, restablece tu contraseña usando los pasos anteriores.

### Desbloquear una Cuenta Bloqueada
1. Si tu cuenta está bloqueada, espera 30 minutos antes de intentar de nuevo.
2. Alternativamente, toca **Olvidé mi Contraseña** para restablecer tu contraseña. Esto también desbloqueará tu cuenta.
3. Después de restablecer, inicia sesión con tu nueva contraseña.

### Solucionar Problemas de Inicio de Sesión Social (Google o Apple)
1. Asegúrate de que la cuenta de Google o Apple que estás usando sea la misma con la que te registraste originalmente.
2. Verifica que tengas una conexión a internet funcionando.
3. Si usas Iniciar sesión con Apple, asegúrate de no haber elegido "Ocultar Mi Correo" con un Apple ID diferente al vinculado a tu cuenta CGC.
4. Intenta iniciar sesión con tu correo electrónico y contraseña en su lugar. Si nunca estableciste una contraseña, usa **Olvidé mi Contraseña** para crear una.
5. Si el problema persiste, contacta a soporte.

### Manejar "Sesión Expirada"
1. Este mensaje aparece cuando tu sesión de inicio de sesión ha expirado por razones de seguridad.
2. Simplemente toca **Iniciar Sesión** e ingresa tu correo electrónico y contraseña.
3. Si ves este mensaje frecuentemente, asegúrate de que tu app esté actualizada.

## Problemas Comunes

| Problema | Solución |
|----------|----------|
| Nunca recibí el correo de restablecimiento de contraseña | Revisa tu carpeta de spam/correo no deseado. Asegúrate de haber ingresado la dirección de correo correcta. Espera unos minutos e intenta de nuevo. |
| El enlace de restablecimiento dice que ha expirado | Los enlaces de restablecimiento de contraseña expiran después de cierto tiempo. Solicita uno nuevo tocando **Olvidé mi Contraseña** de nuevo. |
| No puedo recordar qué correo electrónico usé | Intenta con cada dirección de correo electrónico que podrías haber usado. Si ninguna funciona, contacta a soporte para ayuda localizando tu cuenta. |
| La app dice que mi cuenta no existe | Es posible que aún no hayas creado una cuenta. Intenta tocar **Crear Cuenta** para registrarte. Si estás seguro de que tenías una cuenta, contacta a soporte. |
| Me siguen cerrando la sesión | Asegúrate de que tu app esté actualizada. Verifica que la configuración de fecha y hora de tu dispositivo sea correcta (establécela en automático). Borra la caché de la app e intenta de nuevo. |
| El botón de inicio de sesión social no responde | Revisa tu conexión a internet. Reinicia la app. Asegúrate de estar usando la versión más reciente de la app. |

## ¿Necesitas Ayuda?
Contáctanos en support@christgospel.org
