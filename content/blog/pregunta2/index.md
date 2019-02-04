---
title: 2. Sistemas de archivos de Linux.
date: '2019-01-29T15:28:00.000Z'
templateKey: blog
---

## Uno de los conceptos que los recién llegados a Linux encuentran diferente es la idea de un sistema de archivos en Linux. 

---

Es decir, la forma en que los datos se almacenan y administran en Linux. La mayoría de los usuarios están familiarizados con los archivos. En los términos más simples posibles, se puede decir que los archivos son solo una colección de elementos de datos que se almacenan en un disco. Sin embargo, la forma en que esos archivos se almacenan en un disco puede variar dependiendo de varios factores diferentes. Velocidad, seguridad, redundancia de datos, etc. 

Linux soporta muchos tipos diferentes de formatos de sistemas de archivos. Éstos son sólo algunos ... 

- Ext2: Esto es como el sistema de archivos UNIX. Tiene los conceptos de bloques, inodos y directorios.

- Ext3: Es compatible hacia atrás con el sistema de archivos ext2, excepto que ha agregado capacidades de registro diario. La publicación permite la recuperación rápida del sistema de archivos. Incluye soporte para listas de control de acceso (ACL). 

- Isofs: Utilizado por el sistema de archivos CDROM (iso9660). 

- Procfs: el sistema de archivos proc actúa como una interfaz para las estructuras de datos internas en el kernel. Se puede usar para obtener información sobre el sistema y para cambiar ciertos parámetros del kernel en tiempo de ejecución utilizando el comando sysctl. 

## El sistema de archivos en realidad

Para la mayoría de los usuarios y para las tareas de administración del sistema más comunes, es suficiente aceptar que los archivos y directorios están ordenados en una estructura similar a un árbol. La computadora, sin embargo, no entiende nada sobre árboles o estructuras de árboles.

Cada partición tiene su propio sistema de archivos. Al imaginar todos esos sistemas de archivos juntos, podemos formar una idea de la estructura de árbol de todo el sistema, pero no es tan simple como eso. En un sistema de archivos, un archivo está representado por un inodo , un tipo de número de serie que contiene información sobre los datos reales que componen el archivo: a quién pertenece este archivo y dónde se encuentra en el disco duro.

Cada partición tiene su propio conjunto de inodos; En un sistema con varias particiones, pueden existir archivos con el mismo número de inodo.

Cada inodo describe una estructura de datos en el disco duro, almacenando las propiedades de un archivo, incluida la ubicación física de los datos del archivo. Cuando se inicializa un disco duro para aceptar el almacenamiento de datos, generalmente durante el proceso de instalación inicial del sistema o al agregar discos adicionales a un sistema existente, se crea una cantidad fija de inodos por partición. Este número será la cantidad máxima de archivos, de todos los tipos (incluidos directorios, archivos especiales, enlaces, etc.) que pueden existir al mismo tiempo en la partición. Normalmente contamos con 1 inodo por 2 a 8 kilobytes de almacenamiento.

En el momento en que se crea un nuevo archivo, obtiene un inodo libre. En ese inodo se encuentra la siguiente información:

- Propietario y propietario del grupo del archivo.

- Tipo de archivo (normal, directorio, ...)

- Permisos en el archivo.

- Fecha y hora de creación, última lectura y modificación.

- Fecha y hora en que esta información ha sido modificada en el inodo.

- Número de enlaces a este archivo.

- Tamaño del archivo

Una dirección que define la ubicación real de los datos del archivo.

La única información no incluida en un inodo, es el nombre del archivo y el directorio. Estos se almacenan en los archivos de directorio especial. Al comparar los nombres de los archivos y los números de inodo, el sistema puede componer una estructura de árbol que el usuario entiende. Los usuarios pueden mostrar números de inodo usando la opción -i para ls. Los inodos tienen su propio espacio separado en el disco.

