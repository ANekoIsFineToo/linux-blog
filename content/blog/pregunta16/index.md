---
title: 16. Monitorización de aplicaciones y procesos.
date: '2019-01-15T15:28:00.000Z'
templateKey: blog
---
####1.- Introducción
Para entender el funcionamiento general de los comandos de monitorización de rendimiento, se debe tener claro el concepto de monitorización, la cual es la mediación sistemática y planificada de indicadores de calidad; una actividad que tiene como objetivo identificar la existencia de situaciones problemáticas que hay que evaluar o sobre las que hay que intervenir [1].

CentOS es una distribución del SO de código abierto Linux, basado en la distribución Red Hat Enterprise Linux, que opera de manera similar, y cuyo objetivo es ofrecer al usuario un software de "clase empresarial" gratuito. Se define como robusto, estable y fácil de instalar y utilizar [2]. 

La terminal es una interfaz de gestión que permite, mediante órdenes escritas realizar todo tipo de operaciones, con unas pocas órdenes  se pueden realizar operaciones de forma masiva [3].

####2.- Desarrollo Práctico
En esta sección se describe el funcionamiento de los diversos comandos de monitorización de rendimientos de Linux, para ello se utiliza CentOS 7 y el intérprete de órdenes o terminal del mismo, en el cual se digitan los comandos y se visualiza los resultados según el comando utilizado.

**2.1. Comando uptime**
Este comando muestra información acerca de la carga del sistema, estas son: hora del sistema, el tiempo de marcha del sistema, la cantidad de usuarios conectados, y el valor medio de la carga 

**2.2. Comando time**
Permite conocer el tiempo toma ejecutar un comando en específico, en términos del procesador, en modo usuario y modo supervisor, en este caso se utiliza el gestor de imágenes de shotwell 

**2.3. Comando top**
Hace la función de un administrador de tareas en tiempo real, permite conocer los procesos que están en ejecución y quién los puso en marcha, es principalmente usado para conocer la memoria que consumen los procesos, esta información se actualiza constantemente cada determinado intervalo de tiempo que es configurable por el administrador 

Modificadores:

- top –d [time]: permite especificar el intervalo en la toma de datos.

- top –b:  se realiza un muestreo por lotes.

- top –u [user]: filtra los procesos de un usuario en específico.

**2.4. Comando ps**
Este comando permite visualizar las actividades de los procesos, con su identificador del proceso (PID), terminal asociado (TTY), tiempo de uso de CPU (TIME) y nombre del ejecutable (CMD)
Modificadores:

- ps –e: permite visualizar todos los procesos.

- ps –u [user]: indica los procesos ejecutados por el usuario especificado.

- ps –o [format]: la información tendrá el formato indicado en la sentencia.

**2.5. Comando vmstat**
Esta herramienta brinda un informe sobre la memoria física y virtual (memory), del intercambio entre memoria y disco (swap), las transferencias, interrupciones, cambios de contexto y uso del procesador (cpu). Este proceso es conocido como swapping.

 

Modificadores:

- vmstat –a: nos permite visualizar la memoria active e inactive.

- vmstat –f: muestra el número de tareas que se han creado desde que se arranca el sistema.

- vmstat –d: brinda estadísticas sobre el uso del disco.


**2.6. Comando free**
Muestra la cantidad de memoria libre y usada que tiene el sistema, además permite visualizar la memoria caché y de buffer consumida por el kernel (ver Figura 6).

Modificador:

- free –s t: la ejecución se realizará cada lapso de tiempo especificado.

**2.7. Comando df**
Provee información relacionada al uso del disco duro, las particiones disponibles y las unidades de disco montadas en el sistema (ver Figura 7).

Modificadores:

- df –h: muestra las unidades legibles en el sistema.

- df -i: informa sobre la utilización de los nodos en el sistema.

**2.7. Comando df**
Provee información relacionada al uso del disco duro, las particiones disponibles y las unidades de disco montadas en el sistema (ver Figura 7).

Modificadores:

- df –h: muestra las unidades legibles en el sistema.

- df -i: informa sobre la utilización de los nodos en el sistema.

**2.8. Comando du**
Este comando informa al usuario sobre la cantidad de espacio utilizado por los ficheros/archivos en el disco duro, además muestra la ruta de los mismos (ver Figura 8).

Modificadores:

- du –all: muestra el tamaño ocupado por todos los archivos.

- du -h: indica los tamaños de los archivos en un formato más entendible (GB, MB, KB).

**2.9. Comando hdparm**
Facilita un listado de opciones que permite al usuario modificar los parámetros del disco duro de la computadora, como por ejemplo las dimensiones de las particiones del disco, también nos permite eliminar o crear particiones (ver Figura 9).

Modificadores:

- hdparm –g: muestra la geometría del disco según la tripleta (cilindros / cabezales / sectores).

- hdparm -T: indica la velocidad de lectura de memoria caché de entrada/salida del SO.

- hdparm -t: revela la velocidad de lectura en sectores secuenciales que el disco es capaz de mantener.

**2.10. Comando w**
Muestra información sobre los usuarios que están conectados a la computadora y además indica los procesos correspondientes de cada uno, el parámetro JCPU revela el tiempo total de procesador usado por todos los procesos (ver Figura 10).

2.11. Comando mpstat


Modificadores:

- mpstat -P cpu_number: muestra las actividades de la CPU especificada mediante un número.

- mpstat -P ALL: indica las actividades de todas las CPU existentes.

**2.11. Comando iostat**

Muestra las estadísticas de E/S del disco, de igual manera con la actividad de la CPU. (ver Figura 12).

Modificadores:

- Iostat -c: muestra solo información de la CPU.

- Iostat -d: muestra solo información de los dispositivos.

- Iostat -k: utiliza Kilobytes por segundo para mostrar la información.

- Iostat -m: utiliza Megabytes por segundo para mostrar la información.

- Iostat -p: muestra detalles sobre las particiones existentes.


####3.- Resultados Obtenidos
Luego de analizar los comandos se puede realizar una evaluación al sistema, además de tomar medidas en caso de que el SO presente inconvenientes de rendimiento.

####4.- Conclusión
Se adquieren conocimientos sobre el funcionamiento de los comandos de monitorización de rendimiento de Linux, de esta manera se puede decidir correctamente que comandos utilizar ante cualquier situación que se presente en el SO.

**Enlace a Linux Monitorización de rendimiento**

http://www.dsi.uclm.es/personal/AntonioBueno/ESI/monitor%20en%20linux.pdf 


**Enlace a GOTOP, otra aplicacion para monitorizar la actividad en Linux**
 
https://protegermipc.net/2018/04/24/monitorizar-actividad-del-sistema-en-linux-con-gotop/ 