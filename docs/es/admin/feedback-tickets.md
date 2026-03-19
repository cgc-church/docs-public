---
title: Tickets de Retroalimentación
description: Cómo ver y gestionar la retroalimentación y tickets de soporte de usuarios en el panel de administración de CGC
---

# Tickets de Retroalimentación

## Lo Que Puedes Hacer
- Ver todos los tickets de retroalimentación y soporte enviados por los usuarios de la app
- Leer los detalles de cada ticket incluyendo el mensaje del usuario e información de contacto
- Responder a tickets directamente desde el panel de administración
- Actualizar el estado del ticket (Abierto, En Progreso, Resuelto, Cerrado)
- Priorizar tickets según la urgencia
- Filtrar y buscar tickets para encontrar problemas específicos

## Cómo Funciona

**Escenario: Viendo los tickets de retroalimentación entrantes**
- **Dado que** he iniciado sesión en el panel de administración
- **Cuando** voy a **Retroalimentación** o **Tickets**
- **Entonces** veo una lista de todos los tickets enviados por los usuarios ordenados del más reciente al más antiguo

**Escenario: Respondiendo a un ticket**
- **Dado que** estoy viendo un ticket de retroalimentación abierto
- **Cuando** escribo una respuesta en el campo de respuesta y hago clic en **Enviar**
- **Entonces** el usuario recibe mi respuesta y el ticket se actualiza con la respuesta

**Escenario: Cambiando el estado del ticket**
- **Dado que** estoy viendo un ticket de retroalimentación
- **Cuando** cambio el estado de **Abierto** a **En Progreso**
- **Entonces** el ticket se marca como en proceso y la actualización de estado es visible en el historial del ticket

**Escenario: Resolviendo un ticket**
- **Dado que** he atendido el problema del usuario y enviado una respuesta
- **Cuando** cambio el estado del ticket a **Resuelto**
- **Entonces** el ticket se mueve a la lista de resueltos y el usuario es notificado de que su problema ha sido atendido

## Estados de los Tickets

| Estado | Significado |
|--------|-------------|
| **Abierto** | Ticket nuevo que aún no ha sido revisado |
| **En Progreso** | Un miembro del equipo está trabajando activamente en este problema |
| **Resuelto** | El problema ha sido atendido y se ha enviado una respuesta |
| **Cerrado** | El ticket está completo y no se necesita ninguna acción adicional |

## Guía Paso a Paso

### Ver Tickets
1. Inicia sesión en el panel de administración.
<!-- TODO: Screenshot -->
2. En la navegación izquierda, haz clic en **Retroalimentación** o **Tickets**.
<!-- TODO: Screenshot -->
3. Verás una lista de tickets con los siguientes detalles:
   - Asunto o título
   - Nombre y correo electrónico del usuario
   - Fecha de envío
   - Estado actual
   - Nivel de prioridad
<!-- TODO: Screenshot -->

### Responder a un Ticket
1. Haz clic en un ticket para abrir sus detalles.
<!-- TODO: Screenshot -->
2. Lee el mensaje del usuario cuidadosamente.
3. Escribe tu respuesta en el campo de **Respuesta** en la parte inferior.
<!-- TODO: Screenshot -->
4. Haz clic en **Enviar** para entregar tu respuesta al usuario.
5. La respuesta aparecerá en el historial de conversación del ticket.

### Actualizar el Estado del Ticket
1. Abre el ticket que deseas actualizar.
2. Encuentra el menú desplegable de **Estado** (generalmente cerca de la parte superior del ticket).
<!-- TODO: Screenshot -->
3. Selecciona el estado apropiado:
   - **En Progreso** -- cuando estás trabajando activamente en el problema
   - **Resuelto** -- cuando el problema ha sido atendido
   - **Cerrado** -- cuando no se necesita ninguna acción adicional
4. El cambio de estado se guarda automáticamente.

### Priorizar Tickets
1. Abre el ticket que deseas priorizar.
2. Encuentra el campo de **Prioridad**.
<!-- TODO: Screenshot -->
3. Establece el nivel de prioridad:
   - **Alta** -- Problemas urgentes que necesitan atención inmediata
   - **Media** -- Importantes pero no urgentes
   - **Baja** -- Retroalimentación general o problemas menores
4. Los tickets de alta prioridad aparecerán en la parte superior de la lista cuando se ordene por prioridad.

### Buscar y Filtrar Tickets
1. En la pantalla de Tickets, usa la barra de búsqueda para encontrar tickets por palabra clave, nombre de usuario o correo electrónico.
2. Usa las opciones de filtro para limitar los resultados por:
   - Estado (Abierto, En Progreso, Resuelto, Cerrado)
   - Prioridad (Alta, Media, Baja)
   - Rango de fechas
<!-- TODO: Screenshot -->

## Problemas Comunes

| Problema | Solución |
|----------|----------|
| No puedo ver ningún ticket | Verifica los permisos de tu rol. Solo los Admins y Super Admins pueden ver los tickets de retroalimentación. |
| Mi respuesta no se envió | Asegúrate de haber hecho clic en **Enviar** después de escribir tu respuesta. Revisa tu conexión a internet e inténtalo de nuevo. |
| Cerré un ticket por accidente | Vuelve a abrir el ticket cambiando el estado de **Cerrado** a **Abierto** o **En Progreso**. |
| Los tickets no están ordenados correctamente | Haz clic en los encabezados de columna para ordenar por fecha, prioridad o estado. Revisa tus filtros activos para asegurarte de que no estén ocultando tickets. |
| Un usuario dice que no recibió mi respuesta | Verifica que la dirección de correo electrónico del usuario sea correcta en su cuenta. Pídele que revise su carpeta de spam o correo no deseado. |

## ¿Necesitas Ayuda?
Contáctanos en support@christgospel.org
