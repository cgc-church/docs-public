---
title: Notificaciones Push
description: Cómo enviar notificaciones push a los usuarios de la app CGC desde el panel de administración
---

# Notificaciones Push

## Lo Que Puedes Hacer
- Enviar notificaciones push a todos los usuarios de la app o a audiencias específicas
- Segmentar notificaciones por grupo de usuarios, rol o estado de suscripción
- Programar notificaciones para una fecha y hora futura
- Rastrear el estado de entrega para ver cuántos usuarios recibieron tu notificación
- Escribir títulos y mensajes personalizados para las notificaciones

## Cómo Funciona

**Escenario: Enviando una notificación inmediata a todos los usuarios**
- **Dado que** estoy en la pantalla de Notificaciones Push en el panel de administración
- **Cuando** escribo un título y mensaje de notificación, selecciono **Todos los Usuarios** como audiencia y hago clic en **Enviar Ahora**
- **Entonces** la notificación se entrega a todos los usuarios de la app que tienen las notificaciones activadas

**Escenario: Dirigiendo una notificación a un grupo específico**
- **Dado que** estoy creando una nueva notificación push
- **Cuando** selecciono una audiencia específica como **Suscriptores** o un grupo de usuarios
- **Entonces** solo los usuarios en ese grupo recibirán la notificación

**Escenario: Programando una notificación para después**
- **Dado que** estoy redactando una notificación push
- **Cuando** establezco una fecha y hora futura y hago clic en **Programar**
- **Entonces** la notificación queda en cola y se enviará automáticamente a la hora programada

**Escenario: Verificando el estado de entrega**
- **Dado que** he enviado una notificación push
- **Cuando** voy al historial de notificaciones y hago clic en una notificación enviada
- **Entonces** puedo ver cuántos usuarios recibieron la notificación y la marca de tiempo de entrega

## Guía Paso a Paso

### Enviar una Notificación Push
1. Inicia sesión en el panel de administración.
<!-- TODO: Screenshot -->
2. En la navegación izquierda, haz clic en **Notificaciones** o **Notificaciones Push**.
<!-- TODO: Screenshot -->
3. Haz clic en **Crear Nueva Notificación**.
<!-- TODO: Screenshot -->
4. Llena los detalles de la notificación:
   - **Título** -- Un encabezado corto que llame la atención (mantenlo en menos de 50 caracteres).
   - **Mensaje** -- El cuerpo de la notificación (mantenlo en menos de 150 caracteres para mejor visualización).
<!-- TODO: Screenshot -->
5. Elige tu audiencia:
   - **Todos los Usuarios** -- Todos los que tienen la app instalada y las notificaciones activadas.
   - **Suscriptores** -- Solo usuarios con una suscripción activa.
   - **Grupo Específico** -- Dirigido a un ministerio o grupo de usuarios particular.
<!-- TODO: Screenshot -->
6. Elige cuándo enviar:
   - **Enviar Ahora** -- Entrega la notificación inmediatamente.
   - **Programar** -- Elige una fecha y hora futura.
7. Haz clic en **Enviar** o **Programar** para confirmar.

### Programar una Notificación
1. Mientras creas una notificación, selecciona **Programar** en lugar de **Enviar Ahora**.
<!-- TODO: Screenshot -->
2. Usa el selector de fecha y hora para elegir cuándo se debe enviar la notificación.
3. Haz clic en **Programar**.
4. La notificación aparecerá en tu lista de notificaciones con un estado de "Programada".
5. Puedes editar o cancelar una notificación programada antes de que sea enviada.

### Ver el Historial de Notificaciones
1. Ve a **Notificaciones** en el panel de administración.
2. Verás una lista de todas las notificaciones pasadas y programadas.
<!-- TODO: Screenshot -->
3. Cada entrada muestra el título, audiencia, fecha de envío y estado de entrega.
4. Haz clic en cualquier notificación para ver información detallada de entrega.

## Mejores Prácticas

- **Sé breve.** Los títulos de notificación deben tener menos de 50 caracteres y los mensajes menos de 150 caracteres.
- **Sé relevante.** Solo envía notificaciones que aporten valor al destinatario.
- **Elige bien el momento.** Evita enviar notificaciones muy temprano en la mañana o muy tarde en la noche. Considera la zona horaria de tu audiencia.
- **No envíes de más.** Enviar demasiadas notificaciones puede hacer que los usuarios las desactiven o desinstalen la app.
- **Usa la segmentación.** Envía notificaciones a la audiencia correcta en lugar de a todos cuando sea posible.

## Problemas Comunes

| Problema | Solución |
|----------|----------|
| La notificación no fue entregada | Verifica que la audiencia que seleccionaste tenga las notificaciones activadas. Los usuarios que han desactivado las notificaciones en la app o en su dispositivo no las recibirán. |
| La notificación programada no se envió | Verifica la fecha, hora y zona horaria. Revisa el estado de la notificación en el historial -- puede mostrar un error. |
| El texto de la notificación aparece cortado | Mantén los títulos en menos de 50 caracteres y el cuerpo del mensaje en menos de 150 caracteres. El texto más largo puede truncarse en algunos dispositivos. |
| Envié una notificación por error | Desafortunadamente, las notificaciones push no pueden retirarse una vez enviadas. Verifica el contenido y audiencia de tu notificación antes de hacer clic en Enviar. |
| Solo algunos usuarios recibieron la notificación | Los usuarios que han desactivado las notificaciones en su dispositivo o en la app no recibirán notificaciones push. Este es un comportamiento normal. |

## ¿Necesitas Ayuda?
Contáctanos en support@christgospel.org
