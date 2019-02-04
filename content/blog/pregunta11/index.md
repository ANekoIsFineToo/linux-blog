---
title: 11. Ficheros de logs y de configuración del sistema.
date: '2019-01-20T15:28:00.000Z'
templateKey: blog
---

# Logs en Linux

El sistema de logs de Linux (log = registro), es un mecanismo estándar que se encarga de recoger los mensajes generados por los programas, aplicaciones y demonios y enviarlos a un destino predefinido. En cada mensaje consta la fuente (el programa que generó el mensaje), la prioridad (nivel de importancia del mensaje), la fecha y la hora.

Hay varios niveles de prioridad de los mensajes (de menos a más prioritario: debug, info, notice, warning, warn, err, error, crit, alert, emerg y panic) y varios tipos de mensajes (auth, authpriv, cron, daemon, kern, lpr, mail, mark, news, security, syslog, user, uucp y local0-local7).

## Cómo funciona el sistema de logs

- El sistema de logs arranca con el script /etc/init.d/sysklogd, y tiene dos demonios:
    - syslogd: gestiona los logs del sistema. Distribuye los mensajes a archivos, tuberías, destinos remotos, terminales o usuarios, usando las indicaciones especificadas en su archivo de configuración /etc/syslog.conf, donde se indica qué se loguea y a dónde se envían estos logs.
    - klogd: se encarga de los logs del kernel. Lo normal es que klogd envíe sus mensajes a syslogd pero no siempre es así, sobre todo en los eventos de alta prioridad, que salen directamente por pantalla.
- Los logs se guardan en archivos ubicados en el directorio /var/log, aunque muchos programas manejan sus propios logs y los guardan en /var/log/. Además, es posible especificar múltiples destinos para un mismo mensaje. Algunos de los log más importantes son:
    - /var/log/messages: aquí encontraremos los logs que llegan con prioridad info (información), notice (notificación) o warn (aviso).
    - /var/log/kern.log: aquí se almacenan los logs del kernel, generados por klogd.
    - /var/log/auth.log: en este log se registran los login en el sistema, las veces que hacemos su, etc. Los intentos fallidos se registran en líneas con información del tipo invalid password o authentication failure.
    - /var/log/dmesg: en este archivo se almacena la información que genera el kernel durante el arranque del sistema. Podemos ver su contenido con el comando dmesg:
    - `$ dmesg`
- Los archivos de log crecen y con el tiempo se pueden volver muy extensos, pero no tenemos que preocuparnos porque en /etc/cron.daily (tareas que se ejecutan cada día) está el script /etc/cron.daily/logrotate, (cuyo archivo de configuración es /etc/logrotate.conf), que se encarga de comprimirlos y aplicar una rotación de archivos, añadiéndoles la extensión .1.gz, .2.gz, etc., volviendo a crear uno vacío (cuanto mayor sea el número más antiguo será el log).

## Monitorizar los logs en la consola

Para monitorizar los logs en la consola, utilizaremos el comando tail. Este comando muestra las últimas líneas de uno o más archivos de texto (por defecto las diez últimas), pero con la opción -f, en lugar de mostrar las últimas diez líneas y terminar, tail seguirá activo y conforme se añadan nuevas líneas al fichero las imprimirá, lo que es muy útil para monitorizar archivos.

Para monitorizar los logs en la consola, por ejemplo el archivo /var/log/messages, haremos lo siguiente:

> $ tail -f /var/log/messages

# Comandos para la administración del sistema

Los administradores de sistemas utilizan con frecuencia los siguientes comandos para vigilar lo que sucede con sus sistemas. 

- Este comando le mostrará las personas que han iniciado sesión en la computadora hoy y los terminales que están utilizando. 
    - `$ last`

- Este es un comando que usarás mucho si te presionan para obtener espacio en el disco duro. Una vez más, hay muchos programas que se ejecutan gráficamente que le informarán del espacio disponible en su partición de Linux. Pero esta es una forma muy buena, rápida y no gráfica de realizar un seguimiento del espacio en el disco duro. 
    - `$ df`

-  Este es un comando que puede usar si desea saber cuánta memoria RAM tiene libre en su sistema.
    - `$ free`

- Este comando sirve para ver qué procesos se están ejecutando. "Top" es un buen comando para usar cuando quiere ver lo que está haciendo su sistema. 'top' está diseñado para mostrarle cómo se usa su CPU. Le dará una lista bastante completa de todo lo que está sucediendo en su computadora.
    - `$ top`
