---
title: 4. Sistemas de archivos de Linux.
date: '2019-01-27T15:30:00.000Z'
templateKey: blog
---

## Gestión de sistemas de archivos mediante comandos.

---

Continuando con las últimas publicaciones relacionadas con la introducción a entornos Linux, con idea de demostraros lo realmente fácil que son este tipo de sistemas y podáis aprovechar esta inercia de aprendizaje para obtener en muy poco tiempo una certificación oficial que acredite estos conocimientos, hoy mostraré unos cuantos comandos con los que comenzar vuestra andadura en la terminal . Se trata de comandos básicos con los que poder moveros por el sistema de archivos y directorios sin necesidad de recurrir a la interfaz gráfica.

### 1.- cat
El comando cat , mostrará como salida el contenido del archivo que le pasemos como argumento. Cuando definamos el archivo a mostrar, deberemos tener en cuenta el escribir la ruta completa de este archivo. Aquí os dejo algunos ejemplos:

cat /etc/issue mostrará el contenido del fichero issue, que normalmente almacena el nombre de la distribución.
cat /proc/version que en este caso nos da como salida el contenido del fichero versión dentro de la carpeta /proc que como norma general contiene la versión del Kernel de la distribución que estamos usando.
cat --h nos mostrará todas las opciones que podemos usar para trabajar con este comando.
### 2.- cd
Con este comando podremos movernos por las diferentes carpetas. Vamos con los ejemplos:

cd /xxxx donde xxxx es el nombre del fichero al que queremos desplazarnos, siempre escribiendo la ruta completa, es decir, si la carpeta está en el escritorio del usuario1, por ejemplo, tendremos que poner cd /home/usuario1/Escritorio/xxxx.
cd .. Desde el directorio donde nos encontramos, retrocederemos un nivel en el árbol de directorio. Usando el ejemplo anterior, si nos encontramos en cd /home/usuario1/Escritorio/xxxx y usamos el comando cd .. Volveremos a /home/usuario1/Escritorio.
cd ../.. Con este otro no retrocederemos sólo un nivel si no dos, por lo que en el caso que hemos usado anteriormente, nos situaríamos en /home/usuario1.
### 3.- ls
El comando ls listará los ficheros y carpetas contenidas en el directorio donde nos situamos. Aquí unos ejemplos:

ls –l Mostrará los archivos y carpetas con un formato de lista. Incluye información de permisos, tamaño (en el caso de los ficheros), etc…
ls –a Mostrará todos los archivos y carpetas, incluidos los ocultos.
ls –h Nos “traducirá” el tamaño de los archivos a un método de lectura mucho más fácil de entender (normalmente los muestra en bytes), por ejemplo, en lugar de mostrar 1024bytes mostrará 1K.
### 4.- rm
Con este comando podremos eliminar ficheros simplemente pasándole como argumento el nombre del fichero deseado. Los ejemplos:

rm –v hará que se nos muestre el nombre del fichero antes de borrarlo.
rm –r borrará los subdirectorios de manera recursiva, por lo que deberemos tener mucho cuidado de ver sobre qué ubicación lo aplicamos.
rm –f fuerza el borrado de los archivos y directorios, omitiendo cualquier aviso que el sistema pueda ofrecer, así como la confirmación del usuario para ejecutar la eliminación.
rm –rf el comando definitivo para la eliminación, mucho cuidado con este, porque ejecutado en la raíz del sistema / causaría la eliminación inmediata de todas las carpetas contenidas en /.

### 5.- cp
Comando con el que copiaremos archivos o directorios de una ubicación a otra. También es usado normalmente para renombrar ficheros o carpetas. Algunos ejemplos:

cp archivo1 carpetadestino/ creará una copia del documento llamado archivo1 en la ubicación carpetadestino/.
cp archivo1 fichero2 creará una copia de archivo1 pero con el nombre fichero2. En el comando, si tras fichero2 especificamos una ruta, creará esa copia en la ubicación que le pasemos.
cp –u fichero1 /carpetadestino copiará el archivo fichero1 SÓLO si es más reciente que el archivo del mismo nombre de la ubicación que le acabamos de pasar. Muy útil para copias de seguridad.
### 6.- pwd
Un comando muy simple, pero muy útil porque nos mostrará en caso de que con tanto baile de directorios y ficheros nos hayamos desubicado, la ubicación actual donde nos encontramos .

### 7.- mkdir
Comando que creará directorios, bien dentro de la carpeta donde nos encontremos, bien en una ruta que le especifiquemos. Vamos con los ejemplos:

mkdir carpeta1 creará un directorio llamado carpeta1 dentro de la ubicación donde nos hallemos.
mkdir carpeta1 /etc/ creará el mismo directorio pero dentro de la carpeta /etc/
mkdir –p /etc/carpeta1/carpeta2 creará la estructura de carpetas padre y carpetas hijo que les especifiquemos y en la ruta que especifiquemos, como en el ejemplo, donde en /etc/ se creará la carpeta llamada carpeta1 y dentro de esta otra llamada carpeta2.
### 8.- rmdir
Antítesis del anterior, puesto que con este comando eliminaremos directorios. Algunos ejemplos:

rmdir /carpeta1 eliminará el directorio llamado carpeta1.
rmdir –p /carpeta1 elimina la carpeta indicada e intenta eliminar también la carpeta padre en caso de quedarse éstos vacíos. Si el directorio que contiene carpeta1 fuese /carpeta0 y /carpeta0 se quedase vacío al no estar /carpeta1, /carpeta0 también se eliminaría.
rmdir –ignore-fail-on-non-empty /carpeta1 eliminará el directorio llamado carpeta1 aunque éste contenga archivos en su interior.
### 9.- init
Este complejo comando, se usa normalmente para indicar qué apagado queremos realizar. Por ejemplo:

init 0 equivale al comando poweroff y apagará el equipo.
init 6 equivaldría al comando reboot y reiniciará el sistema.
### 10.- man
Este comando es uno de los que más usaréis aquellos que os iniciéis en el mundo Linux, puesto que seguido del comando del que queramos información, mostrará en pantalla el manual de uso de dicho comando. Aunque no sólo puede mostrarlo en pantalla, también podremos exportarlo a un fichero .pdf. Aquí algunos ejemplos de uso:

man comando1 mostrará la página del manual que contiene la información del comando que le pasemos como argumento.
man –w comando1 mostrará la ruta donde encontraremos el archivo que contiene la información del comando que le pasemos, por si en lugar de querer usar este comando preferimos hacer uso de cat.
man man (no se ha repetido por error ;D) mostrará la página del manual referentes al comando man, lo que vendría siendo el manual donde podremos ver todas las formas posibles en las que poder consultar la información de los comando que queramos conocer mejor.

Una nota importante, es que casi todos los comandos seguidos de un –h, - - h o - -help mostrarán una pequeña ayuda de uso , como os puse el ejemplo del comando cat.