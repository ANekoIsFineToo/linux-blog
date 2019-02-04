---
title: 10. Establecer permisos.
date: '2019-01-21T15:28:00.000Z'
templateKey: blog
---

## ¿Cómo Se Cambian Los Permisos De Ficheros Y Directorios En Linux?

 Estructura básica de permisos en archivos
Hay 3 atributos básicos para archivos simples: lectura, escritura y ejecutar.

**Permiso de lectura** (read)
Si tienes permiso de lectura de un archivo, puedes ver su contenido.

 **Permiso de escritura** (write)
Si tienes permiso de escritura de un archivo, puedes modificar el archivo. Puedes agregar, sobrescribir o borrar su contenido.

 **Permiso de ejecución** (execute)
Si el archivo tiene permiso de ejecución, entonces puedes decirle al sistema operativo que lo ejecute como si fuera un programa. Si es un programa llamado “foo” lo podremos ejecutar como cualquier comando.
O un script (interprete) que necesita permiso de lectura y ejecución, un programa compilado solo necesita ser lectura.

Los caracteres atribuidos a los permisos son:
r quiere decir escritura y viene de Read
w quiere decir lectura y viene de Write
x quiere decir ejecución y viene de eXecute

Usando chmod para cambiar los permisos
chmod (change mode) es el comando utilizado para cambiar permisos, se pueden agregar o remover permisos a uno o mas archivos con + (mas) o – (menos)

Si quieres prevenirte de modificar un archivo importante, simplemente quita el permiso de escritura en tu “archivo” con el comando chmod

>$ chmod -w tuArchivo

si quieres hacer un script ejecutable, escribe

>$ chmod +x tuScript

si quieres remover o agregar todos los atributos a la vez

>$ chmod -rwx archivo

>$ chmod +rwx archivo

también puedes usar el signo = (igual) para establecer los permisos en una combinación exacta, este comando remueve los permisos de escritura y ejecución dejando solo el de lectura

>$ chmod =r archivo
----
.- Estructura básica de permisos en directorios
En el caso de los directorios tenemos los mismo permisos, pero con un significado diferente.

**Permiso de lectura en un directorio**
Si un directorio tiene permiso de lectura, puedes ver los archivos que este contiene. Puedes usar un “ls (list directory)” para ver su contenido, que tengas permiso de lectura en un directorio no quiere decir que puedas leer el contenido de sus archivos si no tienes permiso de lectura en esos.

**Permiso de escritura en un directorio**
Con el permiso de escritura puedes agregar, remover o mover archivos al directorio

**Permiso de ejecución en un directorio**
Ejecución te permite usar el nombre del directorio cuando estas accediendo a archivos en ese directorio, es decir este permiso lo hace que se tome en cuenta en búsquedas realizadas por un programa, por ejemplo, un directorio sin permiso de ejecución no seria revisado por el comando find

###Usuarios, Grupos y Otros###
Ahora conocemos los 3 permisos y como agregar o remover estos, pero estos 3 permisos son almacenados en 3 lugares diferentes llamados.
Usuario (u) proviene de user
Grupo (g) proviene de group
Otros (o) proviene de other

Cuando ejecutas

>$ chmod =r archivo

Cambia los permisos en 3 lugares, cuando haces una lista de directorios con “ls -l” veras algo parecido a.

-r--r--r--    1  wada  users  4096 abr 13 19:30 archivo

###chmod en octal###

La representación octal de chmod es muy sencilla

Lectura tiene el valor de 4
Escritura tiene el valor de 2
Ejecución tiene el valor de 1

El modo en octal es un número en base 8 (octal) que especifique el permiso. Los números en octal se especifican empezando el número por un 0. Por ejemplo, 0777 es indica todos los permisos posibles para todos los tipos de usuario. 0666 indica que se dan permisos de lectura y escritura, pero no de ejecución. 0766 indica que se dan permisos de lectura y escritura, pero sólo tienen permiso de ejecución para los usuarios que son dueños del archivo. 0755 indica permisos para lectura y ejecución, pero escritura sólo para el usuario que es dueño del archivo. 

Por ejemplo: 

>$ chmod 0777 archivo.txt
 
Asigna todos los permisos al archivo archivo.txt 

>$ chmod 0666 * 

Asigna permisos de lectura y escritura, no de ejecución a todos los archivos y directorios del directorio donde ejecutamos el comando. 

>$ chmod -R 0644 * 

Esto da permisos a todos los archivos y directorios del directorio donde se invoca el comando y de todos los directorios que cuelgan de él. Los permisos asignados son de lectura a todos los usuarios, de escritura sólo al dueño del archivo y de ejecución a nadie. 

