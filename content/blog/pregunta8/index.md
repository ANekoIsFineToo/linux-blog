---
title: 8. Identificación del software instalado.
date: '2019-01-23T15:31:00.000Z'
templateKey: blog
---

## Como saber la lista de programas instalados en Ubuntu

Si queremos saber los programas que tenemos instalados en nuestro Ubuntu tan solo tenemos que abrir una Terminal y escribir el siguiente comando:

> $ dpkg --get-selections

En mi caso al escribir este comando en la Terminal me aparece la lista de programas instalados que tengo pero no los muestra todos. Aparecen ordenados por orden alfabético y, como ya he dicho antes, solo aparecen los últimos. Si queremos ver la lista completa tendríamos que exportar el resultado de este comando a un fichero y allí si podremos ver la lista completa de programas instalados en Ubuntu. El comando es el siguiente:

> $ dpkg --get-selections | grep python

Si la lista es muy larga, podemos buscar solo el programa que necesitamos:

> $ dpkg --get-selections > fichero

Y para saber donde está situado:

> $dpkg -L phyton-apt

De esta forma se creara un archivo llamado “fichero” y para ver el contenido de dicho fichero solo tenemos que abrirlo con un editor de texto, en mi caso usare “gedit”, que es el editor de texto que viene con Ubuntu por defecto y podre ver el contenido con el siguiente comando:

> $ gedit fichero

Después de escribir este comando se abrirá el editor de texto y en el podremos ver toda la lista completa de programas instalados en Ubuntu. Después podremos buscar el nombre del programa que queramos buscar y podremos hacer lo que deseemos con el.

Por cortesía de Tannhausser, autor de La mirada del replicante, un blog imprescindible para los amantes de Linux, os pongo como hacer esto mismo en las distribuciones RPM, como OpenSuse o Fedora y despues para Arch y sus derivadas:

> $ rpm -qa >lista_paquetes

> $ pacman -Qe >lista_paquetes