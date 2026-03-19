---
title: Desbloqueo Biométrico
description: Cómo configurar Face ID o Touch ID para desbloquear la app de CGC
---

# Desbloqueo Biométrico

El desbloqueo biométrico te permite iniciar sesión en la app de CGC usando Face ID o Touch ID en lugar de escribir tu contraseña cada vez. Es una forma rápida y segura de acceder a tu cuenta.

## Lo Que Puedes Hacer

- Habilitar Face ID o Touch ID para desbloquear la app de CGC
- Omitir el ingreso de tu contraseña cada vez que abras la app
- Desactivar el desbloqueo biométrico en cualquier momento si prefieres usar tu contraseña
- Usar el desbloqueo biométrico en iPhones, iPads y dispositivos Android compatibles

## Dispositivos Compatibles

- **Face ID:** iPhone X y posteriores, iPad Pro (2018 y posteriores)
- **Touch ID:** iPhone 5s hasta iPhone SE, iPads con botón de inicio o botón de encendido con Touch ID
- **Huella digital en Android:** La mayoría de dispositivos Android con Android 10 o posterior que cuenten con sensor de huella digital
- **Desbloqueo facial en Android:** Dispositivos Android selectos con hardware de reconocimiento facial

Tu dispositivo debe tener la seguridad biométrica configurada previamente en los ajustes del dispositivo antes de poder usarla en la app de CGC.

## Cómo Funciona

**Escenario: Habilitar el desbloqueo biométrico**
- **Dado que** tengo sesión iniciada y estoy en la pantalla de Configuración
- **Cuando** encuentro "Desbloqueo Biométrico" y lo activo
- **Entonces** se me pide confirmar con Face ID o Touch ID, y la función queda habilitada

**Escenario: Desbloquear la app con Face ID**
- **Dado que** tengo el desbloqueo biométrico habilitado y la app me pide iniciar sesión
- **Cuando** miro mi teléfono para usar Face ID
- **Entonces** la app me reconoce e inicia sesión automáticamente

**Escenario: Desbloquear la app con Touch ID**
- **Dado que** tengo el desbloqueo biométrico habilitado y la app me pide iniciar sesión
- **Cuando** coloco mi dedo en el botón de inicio o sensor de huella digital
- **Entonces** la app reconoce mi huella digital e inicia sesión automáticamente

**Escenario: Desactivar el desbloqueo biométrico**
- **Dado que** estoy en la pantalla de Configuración
- **Cuando** encuentro "Desbloqueo Biométrico" y lo desactivo
- **Entonces** la app ya no usa Face ID o Touch ID, y necesito ingresar mi contraseña para iniciar sesión

## Guía Paso a Paso

### Habilitar el Desbloqueo Biométrico

1. Abre la app de CGC y asegúrate de tener sesión iniciada.
<!-- TODO: Screenshot -->
2. Toca el ícono de **menú** o navega a **Configuración**.
<!-- TODO: Screenshot -->
3. Encuentra la opción **"Desbloqueo Biométrico"** (también puede aparecer como "Face ID" o "Touch ID" dependiendo de tu dispositivo).
<!-- TODO: Screenshot -->
4. Activa el interruptor a **Encendido**.
<!-- TODO: Screenshot -->
5. Cuando se te solicite, **confirma con Face ID, Touch ID o tu huella digital** para verificar que eres tú.
<!-- TODO: Screenshot -->
6. El desbloqueo biométrico ya está activo. La próxima vez que abras la app, podrás iniciar sesión con tu rostro o huella digital.

### Desactivar el Desbloqueo Biométrico

1. Abre la app de CGC y ve a **Configuración**.
<!-- TODO: Screenshot -->
2. Encuentra la opción **"Desbloqueo Biométrico"**.
<!-- TODO: Screenshot -->
3. Desactiva el interruptor a **Apagado**.
<!-- TODO: Screenshot -->
4. Ahora necesitarás ingresar tu correo electrónico y contraseña para iniciar sesión.

### Cuándo Se Solicita el Desbloqueo Biométrico

El desbloqueo biométrico se solicita en estas situaciones:

- Cuando abres la app después de que ha sido cerrada o estaba ejecutándose en segundo plano
- Cuando regresas a la app después de un período de inactividad
- Cuando intentas acceder a configuraciones sensibles de la cuenta

## Problemas Comunes

| Problema | Solución |
|----------|----------|
| No veo la opción "Desbloqueo Biométrico" en Configuración | Asegúrate de que Face ID o Touch ID (o huella digital) ya esté configurado en tu dispositivo. Ve a los ajustes de tu dispositivo y habilítalo ahí primero. |
| Face ID / Touch ID sigue fallando en la app | Asegúrate de que la biometría funcione correctamente en tu dispositivo probándola en los ajustes del dispositivo. Limpia tu sensor de huella digital si usas Touch ID. |
| Me pidieron mi contraseña aunque el desbloqueo biométrico está habilitado | Después de reiniciar el dispositivo, una actualización de software o varios intentos biométricos fallidos, la app puede pedir tu contraseña por razones de seguridad. |
| Tengo un teléfono nuevo y el desbloqueo biométrico no funciona | Necesitarás iniciar sesión con tu correo electrónico y contraseña en el nuevo dispositivo primero, luego habilitar el desbloqueo biométrico de nuevo en Configuración. |
| Quiero cambiar de Touch ID a Face ID | El desbloqueo biométrico usa automáticamente el método biométrico configurado en tu dispositivo. Si tu nuevo dispositivo usa Face ID en lugar de Touch ID, la app cambiará automáticamente. |

## ¿Necesitas Ayuda?

Contáctanos en support@christgospel.org
