---
title: 6. Estructura de directorios del sistema operativo.
date: '2019-01-25T15:28:00.000Z'
templateKey: blog
---
Por conveniencia, el sistema de archivos de Linux generalmente se piensa en una estructura de árbol. En un sistema Linux estándar, encontrará que el diseño generalmente sigue el esquema que se presenta a continuación.

## Figura 3-1. Diseño del sistema de archivos de Linux

![visual](FS-layout.png)

La mayoría de las distribuciones de Linux, inclusive las que forman parte de Free Software Standards, no aplican de forma estricta y al 100% el estándar, aunque las diferencias son minimas.

### Existen dos tipos de distinciones cuando hablamos del tipo de contenido de un directorio: Estaticos/dinamicos y compartibles/no compartibles.

#### Estaticos: 
Contiene binarios, bibliotecas, documentacion y otros ficheros que no cambian sin intervencion del administrador. Pueden estar en dispositivos de solo lectura (read-only) y no necesitan que se hagan copias de seguridad tan a menudo como con ficheros dinamicos
### Dinamicos: 
Contiene ficheros que no son estaticos. Deben de encontrase en dispositivos de lectura-escritura (read-write). Necesitan que se hagan copias de seguridad a menudo
### Compartibles: 
Contiene ficheros que se pueden encontrar en un ordenador y utilizarse en otro
### No compartibles: 
Contiene ficheros que no son compartibles

A continuacion teneis algunos ejemplos para aclarar ideas:

- **Estaticos:** /bin, /sbin, /opt, /boot, /usr/bin
- **Dinamicos:** /var/mail, /var/spool, /var/run, /var/lock, /home
- **Compartibles:** /usr/bin, /opt
- **No compartibles:**/etc, /boot, /var/run, /var/lock
Todos los ficheros y directorios aparecen debajo del directorio raíz «/» (El equivalente en el mundo Unix al C:\ de Windows) aunque se encuentren en discos/dispositivos distintos. En Linux/Unix no existen letras de discos (C:, D:, etc) Los dispositivos se 'montan' (empiezan a formar parte) del arbol de directorios del sistema.

A continuacion teneis una lista con los directorios mas importantes del sistema y para que se usan. Para acceder a los mismos podeis usar el comando cd 'nombre del directorio'. Para ver el contenido de los mismos podeis usar el comando ls -l 'nombre del directorio'.


Directorio        Descripción
-----------------------------------------------------------------------------------------
> -/bin/		
Comandos/programas binarios esenciales (cp, mv, ls, rm, etc.),
> -/boot/		
Ficheros utilizados durante el arranque del sistema (núcleo y discos RAM)
> -/dev/	
	Dispositivos esenciales, discos duros, terminales, sonido,
	video, lectores dvd/cd, etc

> -/etc/	
	Ficheros de configuración utilizados en todo el sistema y que
	son específicos del ordenador

> -/etc/opt/	
	Ficheros de configuración utilizados por programas alojados dentro
	de /opt/

> -/etc/X11/	
	Ficheros de configuración para el sistema X Window (Opcional)
> -/etc/sgml/	
	Ficheros de configuración para SGML (Opcional)
> -/etc/xml/	
	Ficheros de configuración para XML (Opcional)

> -/home/		
	Directorios de inicios de los usuarios (Opcional)
> -/lib/	
	Bibliotecas compartidas esenciales para los binarios de /bin/, /sbin/ y
	el núcleo del sistema.

> -/mnt/
	Sistemas de ficheros montados temporalmente.
> -/media/
	Puntos de montaje para dispositivos de medios como unidades lectoras
	de discos compactos.

> -/opt/
	Paquetes de aplicaciones estáticas.
> -/proc/
	Sistema de ficheros virtual que documenta sucesos y estados del
	núcleo. Contiene principalmente ficheros de texto.

> -/root/
	Directorio de inicio del usuario root (super-usuario) (Opcional)
> -/sbin/
	Comandos/programas binarios de administración de sistema.
> -/tmp/
	Ficheros temporales
> -/srv/
	Datos específicos de sitio servidos por el sistema.
> -/usr/
	Jerarquía secundaria para datos compartidos de solo lectura (Unix system
	resources). Este directorio puede ser compartido por
	múltiples ordenadores y no debe contener datos específicos del
	ordenador que los comparte.

> -/usr/bin/
	Comandos/programas binarios.
> -/usr/include/
	Ficheros de inclusión estándar (cabeceras de cabecera utilizados
	para desarrollo).

> -/usr/lib/
	Bibliotecas compartidas.
> -/usr/share/
	Datos compartidos independientes de la arquitectura del
	sistema. Imágenes, ficheros de texto, etc.

> -/usr/src/
	Códigos fuente (Opcional)
> -/usr/X11R6/
	Sistema X Window, versión 11, lanzamiento 6 (Opcional)
> -/usr/local/	
	Jerarquía terciaria para datos compartidos de solo lectura
	específicos del ordenador que los comparte.

> -/var/	
	Ficheros variables, como son logs, bases de datos, directorio raíz
	de servidores HTTP y FTP, colas de correo, ficheros temporales, etc.

> -/var/cache/	
	Cache da datos de aplicaciones.
> -/var/crash/	
	Depósito de información referente a caidas del sistema (Opcional)

> -/var/games/
	Datos variables de aplicaciones para juegos (Opcional)
> -/var/lib/
	Información de estado variable. Algunos servidores como MySQL y
	PostgreSQL almacenan sus bases de datos en directorios subordinados de éste.

> -/var/lock/
	Ficheros de bloqueo.
> -/var/log/
	Ficheros y directorios de registro del sistemas (logs).
> -/var/mail/
	Buzones de correo de usuarios (Opcional)
> -/var/opt/
	Datos variables de /opt/.
> -/var/spool/
	Colas de datos de aplicaciones.
> -/var/tmp/
	Ficheros temporales preservados entre reinicios.
