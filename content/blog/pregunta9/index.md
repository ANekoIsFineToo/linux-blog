---
title: 9. Montaje y desmontaje del dispositivo del sistema operativo.
date: '2019-01-26T15:28:00.000Z'
---

Montar equivale a crear un acceso desde un directorio a una unidad o dispositivo. No significa copiar sino establecer un enlace entre tal directorio y el dispositivo. Desmontarla es eliminar ese enlace. A los usuarios de ms-dos os sonará a algo parecido que se hacía con las unidades comprimidas dblspace o drivespace. Su equivalente en sistemas windows son las unidades virtuales que instalan programas tales como el clone cd, que para poder leer una imagen iso es necesario montarla de un modo similar a como se hace en GNULinux.

De forma predeterminada LINUX nos ofrece directorios en los que se montan dispositivos comúnmente utilizados, /floppy en el que accedemos a las disqueteras y otro llamado /cdrom para unidades ópticas. Esto no es común para todas las distribuciones, pero dado que lo más probable es que estéis utilizando Guadalinex, ésta si lo distribuye así. No obstante, cada quien puede montar las cosas tal y como prefiera, lo más normal es que los dispositivos se monten dentro de un directorio llamado /mnt. El montaje, tanto de Linux en modo gráfico, como de windows, se hace automáticamente al intentar acceder a la unidad, pero en el modo texto de Linux se montan de forma prácticamente manual.

## Comando para montar dispositivos


> $ mount -t

- "-t" indica que a continuación se especificará el montaje obligatorio con formatos:

    - ext2 (formato de linux).

    - ext3 (formato de linux para montaje de sistemas de archivos).

    - reisers (formato de linux utilizado en servidores).

    - vfat (formato fat utilizado para disketes y para particiones win9x).

    - ntfs (formato para particiones windows nt/2000/xp).

    - iso9660 (dispositivos ópticos).

Este tipo de montaje extendido solamente puede hacerlo el ROOT, los usuarios podrán hacer exclusivamente el montaje reducido.

Desmontar es eliminar ese enlace. Su equivalente en sistemas windows son las unidades virtuales que instalan programas tales como el clone cd,que para poder leer una imagen iso es necesario montarla de un modo similar a como se hace en GNULinux.

Al igual que ocurría cuando montábamos dispositivos, tampoco se puede desmontar en el directorio de montaje, por lo que será necesario salirse de él antes de ejecutar la orden.

MOUNT (sin parámetros)nos ofrecerá la INFORMACIÓN SOBRE los MONTAJES

## Comando para desmontar dispositivos

> $ umount dispositivo

EJEMPLO: umount /dev/hda1

No se debe retirar un diskete antes de desmontarlo o posiblemente acabaremos por hacer que el sistema se desestabilice y se cuelgue. La regla es, cuando se trate de dispositivos que se muevan, primero se desmonta y después se retira.