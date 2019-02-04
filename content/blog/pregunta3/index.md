---
title: 3. Rutas y nombres de archivos. Estructura jerárquica.
date: '2019-01-29T15:28:00.000Z'
---

Todo el mundo sabe qué es un archivo ... Es esa "foto", "documento" o "música" que utiliza. Los programas están hechos de archivos, de hecho, todo el sistema operativo Linux es solo una colección de archivos ... Pero, ahora, para la parte rara. ¡No solo es esa foto digital que subiste a tu computadora un archivo, sino que tu monitor es un archivo también! Ya ves, en Linux, todo es un archivo! ¡¡¡GUAU!!! ¿Como puede ser? Tratemos de explicarlo. 

En esta entrada del blog intentaremos explicar lo mas brevemente posible, como los directorios de un sistema Linux/Unix estan organizados y para que se usan. Uno de los problemas que tienen los nuevos usuarios de un sistema Linux/Unix es el no saber que significan y para que se utilizan los diferentes directorios del sistema.

## Estándar de jerarquía de ficheros

Existe un estandard que intenta definir unas bases, para que tanto los programas del sistema, como los usuarios y administradores, sepan donde encontrar lo que buscan.

Este estandard esta mantenido por la 'Free Standards Group', una organización sin fines de lucro constituida por compañías de hardware y software como AMD, Computer Associates, Debian, Dell, Fujitsu, Google, HP, IBM, Intel, MySQL, NEC, Novell, Red Flag, Red Hat, Sun Microsystems, Veritas y otros muchos. La mayoría de las distribuciones de Linux, inclusive las que forman parte de Free Software Standards, no aplican de forma estricta y al 100% el estándar, aunque las diferencias son minimas.

## Tipos de distinciones

- Estaticos: Contiene binarios, bibliotecas, documentacion y otros ficheros que no cambian sin intervencion del administrador. Pueden estar en dispositivos de solo lectura (read-only) y no necesitan que se hagan copias de seguridad tan a menudo como con ficheros dinamicos (/bin, /sbin, /opt, /boot, /usr/bin)
- Dinamicos: Contiene ficheros que no son estaticos. Deben de encontrase en dispositivos de lectura-escritura (read-write). Necesitan que se hagan copias de seguridad a menudo (/var/mail, /var/spool, /var/run, /var/lock, /home)
- Compartibles: Contiene ficheros que se pueden encontrar en un ordenador y utilizarse en otro (/usr/bin, /opt)
- No compartibles: Contiene ficheros que no son compartibles (/etc, /boot, /var/run, /var/lock)

## El directorio / dev 

Verás mucho amarillo delineado en negro. Estos son los dispositivos que su sistema usa o puede usar. Todo se considera un archivo en Linux, por lo que su disco duro se mantiene como un archivo que se encuentra allí. Si está utilizando un disco duro IDE (a diferencia de SCSI), su disco duro se conocerá como / dev / hda. No lo borres, porque tu disco duro girará, saldrá de tu computadora, aterrizará en el suelo y se derramará por todo el lugar. No en realidad no. Probablemente no tendrás que buscar mucho en / dev, así que no te preocupes por eso. 

## El directorio / boot 

> $ cd / boot

Te llevará al directorio / boot. No encontrarás botas, zapatos o calzado de ningún tipo. Ahí es donde suele estar el núcleo de Linux. Los usuarios avanzados pueden cambiar la ubicación del kernel por razones propias (pueden preferir / zapato), pero normalmente se coloca allí en la mayoría de los sistemas. Eventualmente tendrá que usar este directorio, ya que es posible que necesite usar dos o más tipos diferentes de kernels en el futuro. Eso será tomado en una lección más avanzada. 

## Directorio de root / root 

Si no está trabajando como 'root' y escribe cd / root, se lo llevará al directorio / root. Sin embargo, no podrás hacer nada mientras estés allí. El directorio de inicio de Root es un área restringida para todos los demás. La respuesta de Linux es algo así como 'No tienes que saber eso'. Los directorios personales de los usuarios también están sujetos a ciertas restricciones para otros usuarios. 

## El directorio / sbin 

/ sbin es otro de esos directorios fuera de límites. Puedes mirar, pero no puedes tocar. Este directorio es como / bin en el sentido de que ha utilizado con frecuencia programas en él, pero solo están destinados a ser utilizados por root. 'Shutdown' está ahí dentro. Sólo la raíz puede apagar el sistema. Si un usuario que no sea root intentó apagar el sistema, recibiría un mensaje que dice que solo root puede hacer eso. Entonces esa persona sería seguida por la policía secreta durante tres meses. 

## El directorio / tmp 

/ tmp es un directorio que se utiliza para almacenar archivos temporales, como su nombre puede sugerir. Más adelante encontrará que cuando use un sistema de estilo Windows con Linux como KDE, este administrador de ventanas creará los archivos allí para uso temporal. Cuando haces doble clic en un ícono de una foto, aparece la foto para que la veas, pero se crea un archivo temporal mientras miras la foto. El archivo temporal se elimina al cerrar el programa de imagen de KDE. Principalmente, los programas que funcionan bajo un administrador de Windows aprovechan este directorio. 

## El directorio / var 

/ var es un directorio para ciertos archivos que pueden cambiar su tamaño (es decir, tamaño variable) Por ejemplo, hay algunas bases de datos excelentes para Linux. Uno se llama MySQL. Normalmente, MySQL mantiene sus datos en un subdirectorio de / var llamado / var / mysql /. Si tuviera un sitio web de comercio electrónico, tendría una base de datos para registrar las compras. Esa base de datos obviamente crecería en tamaño. Y si no fuera así, estaría en problemas. También es el lugar normal donde los servidores de correo electrónico almacenan su correo entrante. Una vez más, el correo electrónico varía en tamaño también. 

## El directorio / lib 

/ lib es para archivos de biblioteca. De ahí viene el nombre / lib. Los programas pueden utilizar bibliotecas para llevar a cabo sus funciones. Diferentes programas utilizan las mismas bibliotecas, por lo que Linux los almacenará aquí para que cada programa sepa dónde encontrarlos. Es probable que no tenga que preocuparse mucho por este directorio a menos que comience a recibir mensajes como "no puedo encontrar una biblioteca compartida ...". Eso sucederá a veces cuando hayas descargado un programa y hay que compilarlo desde la fuente. Incluso entonces, obtener lo que se conoce como problemas de "dependencia" es bastante raro. La mayoría de los programas, incluso cuando se compilan desde la fuente, generalmente tienen un programa de configuración previa que se asegura de que puedan encontrar las bibliotecas de las que "dependen" para ejecutarse. Si no lo hacen, te dirán que no puedes instalar el programa. 

## El directorio / home (hogar dulce hogar!) 

Hablamos de / home antes. Este es un directorio para almacenar los archivos personales de los usuarios. Todos nosotros tenemos ciertas preferencias para usar programas. Estas preferencias generalmente se incluyen en los archivos de configuración que también se almacenan en los directorios personales de los usuarios. La mayoría de estos archivos comienzan con un '.' (punto / punto). 