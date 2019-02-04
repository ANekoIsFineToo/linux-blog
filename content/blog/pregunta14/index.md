---
title: 14. Programar tareas. Cron.
date: '2019-01-17T15:28:00.000Z'
templateKey: blog
---
**VIDEO cortesia de YOUTUBE de como usarlo**
<iframe width="560" height="315" src="https://www.youtube.com/embed/nZdrAqT_0Ug" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

####Combinando SSH, Cron Y At

De nuevo vamos a tratar de un tema en donde la terminal en modo texto y programas desde la linea de comandos son los protagonistas. Probablemente, este articulo no le sirva de mucho a un usuario domestico, con un solo ordenador en casa, pero si quieres ir conociendo tu sistema mas a fondo, y tienes que administrar mas de una maquina/servidor, sigue leyendo que puede que aprendas algo.

En este articulo vamos a ver como conectarse sin clave de acceso a otros ordenadores, de una manera segura, con ssh. Tambien veremos como configurar nuestro sistema para que trabaje por nosotros, automatizando tareas con cron y at. Y por ultimo, como combinando estas tecnicas, podemos ejecutar trabajos y recoger informacion de forma automatica de muchos ordenadores a un servidor central.

####SSH Sin Clave De Acceso

No vamos a tratar como instalar SSH (cliente/servidor) en vuestras maquinas. Esto no deberia de ser un problema en las distribuciones de hoy en dia y muchas de ellas instalan este programa por defecto. Suponemos antes de seguir que tanto el cliente como el servidor SSH estan instalados y funcionando en vuestros ordenadores.

SSH (Security SHell) es un programa que permite conectarse de forma segura entre maquinas que tengan este programa instalado (cliente y servidor). Entre muchas de las cosas que SSH ofrece, la mas importante es que todo el trafico entre dos maquinas (incluido cuentas y claves de acceso) es encriptado. Con esto se evita que informacion importante y confidencial caiga en manos ajenas en el caso que alguien este 'escuchando' lo que viaja por la red con un programa 'packet sniffer'.

Para conectarse con SSH, como el usuario 'user', de una maquina llamada 'servidor1' a otra llamada 'servidor2', podemos escribir en una terminal lo siguiente

Lo normal es que haya que escribir la clave de acceso cuando nos conectamos a otro servidor. Esto no es un problema siempre y cuando estemos trabajando de forma interactiva y podamos escribir la clave, tampoco es un gran problema si nos conectamos pocas veces. Pero si queremos que una maquina se conecte de forma automatica a otra para realizar un trabajo, o tenemos que conectar muchas veces a diferentes maquinas, el tener que escribir la clave todo el tiempo termina siendo un problema. Esto lo podemos solucionar usando lo que se llaman claves privadas y publicas. No vamos a explicar que significa esto, esto se escapa del tema del articulo, pero al final damos unos enlaces que podeis usar para profundizar en el tema si quereis.

Para generar nuestras claves publica y privada vamos a utilizar el programa ssh-keygen que forma parte de SSH. A continuacion teneis un ejemplo de como podemos generar estas claves:

[ralf@servidor1]# ssh-keygen -t rsa

_Generating public/private rsa key pair.
_Enter file in which to save the key (/home/ralf/.ssh/id_rsa): 
Enter passphrase (empty for no passphrase): 
Enter same passphrase again: 
Your identification has been saved in /home/ralf/.ssh/id_rsa.
Your public key has been saved in /home/ralf/.ssh/id_rsa.pub.
The key fingerprint is
09:f7:58:bc:07:3f:f4:70:7b:d7:ce:cb:6b:61:f8:9c ralf@servidor1_

###CRON
Para los que no lo saben, cron es un administrador de procesos en segundo plano que ejecuta trabajos a intervalos regulares. Cron se utiliza para automatizar tareas que hay que realizar periodicamente. Los procesos que deben ejecutarse y la hora en la que deben hacerlo se especifican en el archivo crontab del usuario que ejecutara los procesos.

Para editar este fichero podemos utilizar nuestro editor favorito. Para ello tenemos que tener la variable de entorno EDITOR definida y usar crontab -e para editar nuestro crontab. Un ejemplo usando el editor emacs:

###AT
at tambien se puede usar para ejecutar, solamente una vez, un trabajo a una determinada hora. Al contrario de cron que ejecuta de forma periodica hasta que no definamos lo contrario en el crontab del usuario.

Podemos definir los comandos a ejecutar o bien por la entrada estandar o en un fichero. El formato en uno u otro caso seria, at hora:minuto o at -f fichero hora:minuto. Un ejemplo nos aclarara las cosas. (^D significa que pulsamos las teclas Ctrl + D). Estos dos ejemplos hacen lo mismo (arrancan de nuevo la maquina) aunque se definen de manera distinta.:


###Combinando SSH, Cron Y At
El uso combinado de SSH sin clave y cron/at es una tecnica usada muchisimo por administradores de sistemas Unix/Linux con responsabilidad de muchas maquinas/servidores. Es una manera facil y eficaz de recoger informacion o ejecutar un trabajo en muchas maquinas de manera rapida. Vamos a poner un par de ejemplos para ver como podemos hacer esto.

Estos ejemplo necesitan acceso como root para funcionar, lo mas facil es actualizar el fichero ~/.ssh/authorized_keys de 'root' en las maquinas a acceder, con nuestra clave publica. Otra alternativa seria usar sudo.

En este ejemplo vamos a arrancar de nuevo todas las maquinas de nuestra subred 10.1.1.0/24 para que arranquen con el nuevo kernel que hemos instalado. El trabajo lo vamos a ejecutar mañana a las 23:00 horas.:

Supongo que os podreis hacer una idea de las posibilidades infinitas de automatizacion que tenemos con lo que hemos explicado y la ayuda indispensable que da a los administradores de sistemas Unix/Linux. En fin, espero que este articulo os ayude un poco mas a tener control de vuestros sistemas, esto es todo por hoy.




