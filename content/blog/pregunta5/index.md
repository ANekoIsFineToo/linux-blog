---
title: 5. Gestión de enlaces o accesos directos.  
date: '2019-01-28T15:28:00.000Z'
---

Multitud de personas que se inician en Linux se preguntan como crear lo que en Windows se denomina un acceso directo para poder acceder de forma rápida y cómoda a los programas o ubicaciones de uso más habitual.

## ¿Existen los accesos directos en Linux?

Lo primero que tenemos que saber es que en Linux no existe lo que en Windows se llama acceso directo. En Linux los accesos directos se llaman enlaces.

Además existen dos tipos de enlaces, los enlaces duros y los enlaces simbólicos. En los siguiente apartados explicaremos y veremos en detalle que son y para que podemos usar cada uno de los tipos de enlaces que acabamos de citar.

# 1. ENLACES DUROS, FUERTES O HARD LINKS
## ¿Qué son los enlaces duros?

Para entender lo que es un enlace duro, lo primero que tenemos que saber es que en Linux cada fichero y cada carpeta del sistema operativo tienen asignado un número entero llamado inodo.

Este inodo es único para cada uno de los archivos y cada una de las carpetas. La información que almacena cada uno de los inodos de los distintos archivos y carpetas es la siguiente:

- Los permisos del archivo o carpeta.
- El propietario del fichero y carpeta.
- La posición/ubicación del archivo o de la carpeta dentro de nuestro disco duro.
- La fecha de creación del archivo o directorio.

Una vez comprendido esto, podemos decir que un enlace duro es un archivo que apunta al mismo contenido almacenado en disco que el archivo original.

Por lo tanto los archivos originales y los enlaces duros dispondrán del mismo inodo y consecuentemente ambos estarán apuntando hacia el mismo contenido almacenado en el disco duro. De este modo, tal y como se puede ver representado en la imagen, un enlace duro no es más que una forma de identificar un contenido almacenado en el disco duro con un nombre distinto al del archivo original.

Se podrá realizar un enlace duro de un archivo siempre y cuando el archivo esté en la misma partición del disco duro que pretendemos crear el enlace.

## ¿Cómo podemos crear un enlace duro?

> ln archivo.txt nombreEnlace

- ln: Es el comando encargado de realizar enlaces entre ficheros.
- archivo.txt: Es la ruta o nombre del archivo original que tenemos en nuestro disco duro.
- nombreEnlace: Corresponde a la ruta o nombre del enlace duro que vamos a crear.

# 2. ENLACES SIMBÓLICOS, BLANDOS
## ¿Qué es un enlace simbólico o blando?

Los enlaces simbólicos son parecidos a los accesos directos en Windows y son los enlaces que todos los usuarios comunes acostumbran a usar de forma habitual.

Acabamos de ver que los enlaces duros apuntan a un archivo almacenado en nuestro disco duro. En contraposición, tal y como se puede ver representado en la imagen, los enlaces simbólicos apuntan al nombre de un archivo y posteriormente el archivo apunta a un contenido almacenado en nuestro disco duro.

A diferencia del caso anterior, cada enlace simbólico dispone de su propio número de inodo y es diferente al del archivo original. Por lo tanto podremos crear enlaces simbólicos de archivos y de carpetas aunque estén en discos duros diferentes o en particiones diferentes.

## ¿Cómo podemos crear un enlace simbólico o soft link?

> $ ln -s /home/usuario/archivo.txt /home/usuario/Escritorio/nombreEnlace

- ln: Es el comando encargado de realizar enlaces entre ficheros.
- -s: Es la parte del comando que indica que el tipo de enlace que queremos crear es un enlace simbólico.
- /home/usuario/archivo.txt: Es la ruta o nombre del archivo original que tenemos en nuestro disco duro.
- /home/usuario/Escritorio/nombreEnlace: Corresponde a la ruta o nombre del enlace duro que vamos a crear.

# Eliminar enlaces (Duros y Simbolicos)

Si en algún momento precisamos eliminar alguno de los enlaces que hemos hemos creado lo podemos hacer de forma muy fácil. Así por ejemplo si queremos eliminar el enlace simbólico que creamos anteriormente tan solo tenemos que ejecutar el siguiente comando en la terminal:

> $ unlink /home/usuario/Escritorio/nombreEnlace