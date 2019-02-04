---
title: 13. Compresión/Descompresión y empaquetado/desempaquetado de datos.
date: '2019-01-25T15:28:00.000Z'
---

Cuando trabajamos en Linux frecuentemente necesitamos empaquetar y/o comprimir ficheros, en esta entrada del blog te explicaremos como hacerlo.

Primero vamos a definir qué es empaquetar y qué es comprimir para tener claros los conceptos:

- Empaquetar: Es agrupar en un solo fichero varios ficheros y/o directorios.
- Comprimir: Es reducir el tamaño de un fichero a través del uso de un algoritmo de compresión.

Ya no es muy habitual usar el terminal para gestionar archivos. No para el usuario medio de escritorio pero alguna vez no está de más recordar algo de teoría. Al contrario de lo que muchos pueden pensar empaquetar, comprimir o descomprimir ficheros no es más complicado en Linux que en el antiguo MS/DOS.

Volvemos al problema de siempre que se transforma en una ventaja para muchos usuarios avanzados de GNU/Linux y es la gran cantidad de alternativas o posibilidades disponibles. Esto para los más inexpertos puede resultar un problema al no saber bien cuál elegir, pero como digo, tener más posibilidades o la flexibilidad nunca es algo malo sino todo lo contrario. En este caso os hablaremos de los algoritmos y procedimientos de compresión y descompresión que existen en nuestra plataforma favorita para que los veas de otra forma y no como un gran lío al no saber cuál es la mejor opción en tu caso…

Lo cierto es que no solo existen herramientas tan usadas como tar con las que podemos crear empaquetados que además se les puede añadir algún tipo de compresión como estamos acostumbrados a ver en los famosos tarballs de los que ya hemos hablado en LxA en muchas ocasiones. También nos encontraremos con variantes de herramientas tan triviales y frecuentes como grep para buscar dentro de ficheros comprimidos como es el caso de bzfgrep, o incluso otras como less y more que también tienen sus variantes para ficheros comprimidos como lo son bzless y bzmore. Para verlas todas solo tenemos que echar un vistazo a la salida del siguiente comando:

> $ apropos compress

## Empaquetar
En linux contamos con el comando tar, que nos permite realizar el proceso de empaquetación, su sintaxis es la siguiente:

> $ tar [opciones] [nombre_fichero_tar] [directorio_origen]

Las opciones más utilizadas son (la versión con un guion es la corta y con dos guiones la larga, pero hacen lo mismo):

- c --create: Crea un nuevo archivo.
- x --extract: Extrae fucheros de un archivo.
- v --verbose: Lista detalladamente los ficheros procesados.
- f [fichero]: Empaqueta o desempaqueta en o hacia un fichero.
- t --list: Lista los contenidos de un archivo.

## Comprimir
Los comandos gzip y gunzip permiten comprimir y descomprimir ficheros respectivamente, su sintaxis básica es:

> $ gzip [archivo_a_comprimir]
> $ gunzip [archivo_a_descomprimir]

Por ejemplo, para comprimir el archivo edteam.tar usaremos:

> $ gzip edteam.tar

El comando anterior generará el archivo edteam.tar.gz, de manera que para descomprimir dicho archivo usaremos:

> $ gunzip edteam.tar.gz

## Comprimir y descomprimir con zip

Además de gzip y unzip, podemos comprimir y descomprimir a través de zip y unzip respectivamente, este formato de compresión es el más utilizado en sistemas operativos Windows.

Su sintaxis básica es la siguiente:

> $ zip -r [nombre_fichero_zip] [directorio_a_comprimir]
> $ unzip [nombre_fichero_zip]

Crear un archivo comprimido llamado edteam.zip con los archivos del directorio cursos:

> $ zip -r edteam.zip cursos

Descomprimir el archivo edteam.zip

> $ unzip edteam.zip

Aquí os ponemos un vídeo que os puede ayudar a comprender como se comprime y descomprime en Linux.
<iframe width="560" height="315" src="https://www.youtube.com/embed/wgze3bkhr4A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

