---
title: UD01 - Introducción
author: Angel Berlanas Vicente
header-includes: |
lang: es-ES
keywords: [DAW,DIW]
---

# Tarea: GitHub - Uso Esencial

Vamos a practicar un poco los comandos más habituales que se utilizan en Git.


## Prerequisitos

Partimos de que tenemos un repositorio creado para el módulo y de que comenzaremos con todo actualizado en nuestras máquinas respectivas.

Es decir: 

`git status` 

desde raiz de nuestro repositorio ha de mostrar un mensaje como este:

![Git Limpio](./rsrc/gitLimpio.png)
\

Una vez tengamos esto...procedamos...

## Creación de los ficheros

Comenzaremos por crear una carpeta en nuestro repositorio:

`tmp` 

Y dentro creamos un fichero que se llame : `texto.txt` tal y como aparece en la imagen siguiente:

![Git Esencial 10](./rsrc/gitEsencial_01.png)
\

El contenido del fichero ha de ser:

`
Texto Plano
`

Una vez realizado esto, añadir mediante :

`git add` 

La carpeta y el fichero, y realizar un commit con el comentario: "*Temporales frescos*"

utilizando :

`git commit `

Una vez realizado el commit, si todo ha ido bien, al ejecutar el comando de `status` nos deberia mostrar un mensaje indicando que nos encontramos 1 commit por delante de nuestro *Origin*.

Vamos a crear unos pocos archivos más...

```bash
cd tmp
echo "Esto en otro archivo" > otro.txt
echo "Esto en otro diferente" > diferente.txt
echo "Y esto ultimo en otro" > ultimo.txt
```




