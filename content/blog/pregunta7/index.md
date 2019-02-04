---
title: 7. Búsqueda de información del sistema mediante comandos.
date: '2019-01-27T15:28:00.000Z'
---

# 1. Información del Sistema Operativo

Primero de todo nos centraremos en información general a nivel de software y del sistema operativo. Antes que nada, es importante que tengas en cuenta que muchos de estos comandos debas utilizarlos con permisos de superusuario (utilizando “sudo” en Ubuntu, o “su” en otras distros como Debian o Fedora).

## uname

El comando uname te mostrará por pantalla información del sistema operativo, como puede ser la plataforma, la versión del Kernel utilizada, o la arquitectura del sistema. El comando acepta diversas opciones, algunas de las cuales tienes a continuación.

## who

El comando who te listará los usuarios conectados en el sistema en tiempo real. Asimismo, te indicara la sesión en la que esta logueado cada usuario.

## whoami

El comando whoami muestra por pantalla el nombre del usuario que acaba de ejecutar el comando.

## ifconfig

La sentencia ifconfig te servirá para ver todas las interfaces de red que tienes habilitadas en tu PC o dispositivo, junto con varios parámetros como el nombre de la interfaz red, la dirección MAC, la dirección IPv4 e IPv6, la máscara subred, y otros varios

# 2. Información a Nivel de Hardware

Visto ya la información a nivel del sistema operativo, en el siguiente apartado verás como conseguir determinada información del hardware en el que se ejecuta tu sistema. Esto te será especialmente útil, sobretodo teniendo en cuenta que la información relativa al hardware que puedes obtener desde tu entorno de escritorio es bastante general y con muy poco grado de detalle.

## dmidcode

Con esta sentencia tendrás acceso a un enorme rango de información sobre el hardware del equipo, ya sea relativa al fabricante o ensamblador del dispositivo, fabricante de la placa base, de la CPU, y un larguísimo etcétera que puedes ir descubriendo probando con las diferentes opciones.

## cat /proc

El comando cat /proc/version te muestra información detallada de la versión del Kernel utilizada, incluyendo datos tales como la versión del compilador GCC, el nombre de la persona que compiló el Kernel, y la fecha de compilación.

## lshw
El comando lshw te mostrará una lista con todos los componentes de hardware detectados, junto con la información que se puede extraer, como el fabricante, la versión del firmware, etc. El comando permite categorizar la información en clases  acepta multitud de opciones.

# 3. Información Externa

Como información externa se refiere a aquella información externa a un sistema, como podría ser la fecha, hora, condiciones meteorológicas, etc.

## date

El comando date te imprimirá por pantalla la fecha actual del sistema operativo. Acepta algunas opciones, pero en general su uso es muy sencillo.

## cal

El comando cal muestra el calendario de un mes o año especificados. Acepta diferentes opciones, algunas de las cuales son:

## curl wttr.in

Con esta simple sentencia podrás consultar la previsión meteorológica directamente desde la consola. Sería la forma geek de consultar el tiempo.