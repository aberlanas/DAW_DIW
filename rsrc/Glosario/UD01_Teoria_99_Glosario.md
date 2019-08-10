---
title: Glosario
author: Angel Berlanas Vicente
header-includes: |
keywords: [ASIR, ISO]
abstract: Glosario de órdenes
---

\newpage
# Unidad 01: Ordenes del Terminal #

Un breve resumen de las diferentes órdenes (Comandos) que hemos visto en el Terminal.

| Comando | Descripción | Común en LinuX |
| :------|:------:|-------:|
| lsb_release -a | Mostrar versión de GNU/LinuX | Si |
| df -h | Muestra el uso del disco duro | Si |
| free -m | Muestra el uso de la memória RAM | Si|
| top | Lista los procesos activos y el uso de la CPU | Si |
| dpkg -l | Lista los paquetes instalados en el sistema | Debian/++ |
| dpkg -i ruta_al_deb.deb | Instalar un paquete deb | Debian/++ |
| dpkg -r nombre_paquete | Desinstalar un paquete deb | Debian/++ |

### Gestión de permisos y usuarios###

| Comando | Descripción | Común en LinuX |
| :------|:------:|-------:|
| su [usuario] | Hacer login con ese usuario | Si |
| sudo [orden] | Ejecutar como super usuario dicha orden | Si|
| sudo su | Forma cómoda de hacerse superusuario | Si |

### Inicio y apagado###

| Comando | Descripción | Común en LinuX |
| :------|:------:|-------:|
| reboot | reincio | Si |
| shutdown -h now | Apagado de la maquina | Si|
| shutdown -h +1 | Apagado en tiempo de la maquina | Si |
| telinit [0-6] | Establecer el estado de la maquina | Si|

### Gestión de usuarios###

| Comando | Descripción | Común en LinuX |
| :------|:------:|-------:|
| adduser [usuario] | Crea un usuario en el sistema | Si|
| adduser usuario grupo | Añade al grupo el usuario | Si|
| addgroup [grupo] | Añade el grupo al sistema | Si|
