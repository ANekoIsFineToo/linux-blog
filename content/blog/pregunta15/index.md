---
title: 15. Procesos. Tipos. Estados. Estructura.
date: '2019-01-24T15:28:00.000Z'
---

# Procesos y estados en Linux

Podríamos definir a los procesos como programas que están corriendo en nuestro Sistema Operativo. Dependiendo de la forma en que corren estos programas en LINUX se los puede clasificar en tres grandes categorías:
- Procesos Normales.
- Procesos Daemon.
- Procesos Zombie.

---

> - running (R) : Procesos que están en ejecución.
> - sleeping (S) : Procesos que están esperando su turno para ejecutarse.
> - stopped (D) : Procesos que esperan a que se finalice alguna operación de Entrada/Salida.
> - zombie (Z) : Procesos que han terminado pero que siguen apareciendo en la tabla de procesos.

<img aling="middle" style="position: relative; display: block; margin-left: auto; margin-right: auto; z-index: 1;" src="https://www.monografias.com/trabajos26/estados-proceso-hilos/gra1.jpg">

---

Los procesos en GNU/Linux son organizados de forma jerárquica, cada proceso es lanzado por un proceso padre y es denominado proceso hijo. De está forma, todos los procesos en GNU/Linux son hijos de init ya que este es el primer proceso que se ejecuta al iniciar el ordenador y init es padre de todos los procesos. Si se mata al proceso padre, también desaparecerán los procesos hijos.

## Proceso normal

![Proceso normal](https://3.bp.blogspot.com/-HqF9cgEwnb8/T9WzdauYOVI/AAAAAAAAA2s/aTTeiOMn6Js/s200/tux-logo.png)

Los procesos de tipo normal generalmente son lanzados en una terminal (tty) Y corren a nombre de un usuario. Osea, son los programas que utiliza el usuario generalmente y se encuentran conectados a una terminal. El programa aparecerá el pantalla y interactuara con el usuario.

## Proceso daemon

![Proceso daemon](https://4.bp.blogspot.com/-TjV54hWOmOo/T9Wzb-GNu0I/AAAAAAAAA2c/Xw56_3_RWB0/s200/kianzo-tux-devil-2066.png)

Los procesos de tipo Daemon corren a nombre de un usuario y no tienen salida directa por una terminal, es decir corren en 2º plano. Generalmente los conocemos como servicios. La gran mayoría de ellos en vez de usar la terminal para escuchar un requerimiento lo hacen a través de un puerto.

## Proceso zombie

![Proceso zombie](https://2.bp.blogspot.com/-tYLDhOMbFPE/T9WzcpVSfOI/AAAAAAAAA2k/kqwFWlgXoh4/s200/superstar-zombie-tux-1963.png)

En sistemas operativos Unix un proceso zombie es un proceso que ha completado su ejecución pero aún tiene una entrada en la tabla de procesos. Esto se debe a que dicho proceso (proceso hijo) no recibió una señal por parte del proceso de nivel superior (proceso padre) que lo creó informándole que su vida útil ha terminado. Se pueden deber a errores de programación, a situaciones no contempladas por el programador y generalmente provocan lentitud y/o inestabilidad en el Sistema.
Los principales estados en los que pueden encontrarse los procesos en Linux/Unix son los siguientes:



