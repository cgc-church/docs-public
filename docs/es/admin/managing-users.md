---
title: Gestión de Usuarios
description: Cómo ver, buscar y gestionar cuentas de usuario y roles en el panel de administración de CGC
---

# Gestión de Usuarios

## Lo Que Puedes Hacer
- Ver una lista de todos los usuarios registrados de la app
- Buscar usuarios por nombre, correo electrónico o detalles de cuenta
- Asignar y cambiar roles de usuario
- Ver y gestionar membresías de planes familiares
- Exportar datos de usuarios para fines de reportes

## Cómo Funciona

**Escenario: Buscando un usuario**
- **Dado que** estoy en la pantalla de Usuarios en el panel de administración
- **Cuando** escribo un nombre o dirección de correo electrónico en la barra de búsqueda
- **Entonces** se muestran las cuentas de usuario que coinciden en los resultados

**Escenario: Asignando un rol a un usuario**
- **Dado que** he encontrado un usuario en la lista de usuarios
- **Cuando** hago clic en su cuenta y selecciono un nuevo rol del menú desplegable de roles
- **Entonces** los permisos del usuario se actualizan para coincidir con el nuevo rol

**Escenario: Viendo el plan familiar de un usuario**
- **Dado que** estoy viendo los detalles de la cuenta de un usuario
- **Cuando** me desplazo a la sección de Plan Familiar
- **Entonces** veo los detalles del plan familiar incluyendo todos los miembros vinculados a ese plan

**Escenario: Exportando datos de usuarios**
- **Dado que** estoy en la pantalla de Usuarios
- **Cuando** hago clic en **Exportar** y elijo mi formato preferido
- **Entonces** se descarga un archivo con los datos de los usuarios para reportes

## Roles de Usuario

| Rol | Lo Que Pueden Hacer |
|-----|---------------------|
| **Super Admin** | Acceso completo a todo. Puede gestionar todas las configuraciones, contenido, usuarios y funciones de administración. |
| **Admin** | Puede gestionar contenido, usuarios y enviar notificaciones. No puede cambiar configuraciones del sistema. |
| **Editor** | Puede crear y editar contenido. No puede gestionar usuarios ni configuraciones del sistema. |
| **Media** | Puede subir y gestionar archivos multimedia. No puede editar otro contenido ni gestionar usuarios. |
| **Viewer** | Usuario estándar de la app. Puede ver contenido en la app pero no tiene acceso al panel de administración. |

## Guía Paso a Paso

### Ver la Lista de Usuarios
1. Inicia sesión en el panel de administración.
<!-- TODO: Screenshot -->
2. En la navegación izquierda, haz clic en **Usuarios**.
<!-- TODO: Screenshot -->
3. Verás una lista de todos los usuarios registrados con su nombre, correo electrónico, rol y fecha de registro.
<!-- TODO: Screenshot -->

### Buscar un Usuario
1. En la pantalla de Usuarios, ubica la barra de búsqueda en la parte superior.
<!-- TODO: Screenshot -->
2. Escribe el nombre, dirección de correo electrónico u otra información de identificación del usuario.
3. Presiona **Enter** o haz clic en el ícono de búsqueda.
4. La lista se filtrará para mostrar los resultados que coincidan.

### Cambiar el Rol de un Usuario
1. Encuentra al usuario en la lista de usuarios (usa la búsqueda si es necesario).
2. Haz clic en el nombre del usuario para abrir los detalles de su cuenta.
<!-- TODO: Screenshot -->
3. En los detalles de la cuenta, encuentra el menú desplegable de **Rol**.
4. Selecciona el nuevo rol que deseas asignar:
   - Super Admin
   - Admin
   - Editor
   - Media
   - Viewer
<!-- TODO: Screenshot -->
5. Haz clic en **Guardar** para aplicar el cambio.
6. Los permisos del usuario se actualizarán inmediatamente.

### Gestionar Planes Familiares
1. Abre los detalles de la cuenta de un usuario haciendo clic en su nombre en la lista de usuarios.
2. Desplázate hacia abajo hasta la sección de **Plan Familiar**.
<!-- TODO: Screenshot -->
3. Aquí puedes ver:
   - Si el usuario está en un plan familiar
   - Quién es el propietario del plan
   - Todos los miembros vinculados al plan
4. Para agregar o eliminar miembros familiares, usa los controles en esta sección.

### Exportar Datos de Usuarios
1. En la pantalla de Usuarios, haz clic en el botón **Exportar** (generalmente en la parte superior derecha).
<!-- TODO: Screenshot -->
2. Elige el formato que deseas (por ejemplo, CSV o Excel).
3. Elige cualquier filtro que desees aplicar (por ejemplo, solo usuarios activos o usuarios con un rol específico).
4. Haz clic en **Descargar**.
5. El archivo se guardará en tu computadora.

## Problemas Comunes

| Problema | Solución |
|----------|----------|
| No puedo encontrar un usuario en la lista | Asegúrate de estar buscando por el nombre o correo electrónico correcto. Intenta buscar por nombre parcial o dirección de correo electrónico. |
| El cambio de rol no toma efecto | Asegúrate de haber hecho clic en **Guardar** después de cambiar el rol. Pide al usuario que cierre sesión y vuelva a iniciarla para ver los permisos actualizados. |
| No puedo asignar el rol de Super Admin | Solo los Super Admins existentes pueden promover a otros usuarios a Super Admin. Contacta a otro Super Admin si necesitas que esto se haga. |
| La exportación no se descarga | Revisa la configuración de descargas de tu navegador. Intenta con un navegador diferente si el problema persiste. Asegúrate de que los bloqueadores de ventanas emergentes no estén impidiendo la descarga. |
| Un usuario dice que no puede acceder al panel de administración | Verifica que su rol esté configurado como Admin, Editor, Media o Super Admin. Los usuarios con el rol de Viewer no tienen acceso al panel de administración. |

## ¿Necesitas Ayuda?
Contáctanos en support@christgospel.org
