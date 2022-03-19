---
author: "Lewin"
title: Publicar Hugo en Github Pages
date: 2022-02-14
categories:
- Coding
tags:
- hugo
- bash
- git
---

Uno de los problemas que tenía cuando descubrí [Hugo](https://github.com/gohugoio/hugo) era lo poco intuitivo que resultaba publicar la página web generada al *hosting*, en mi caso Github Pages. Ya que, una vez creado todos los archivos estáticos, había que crear un nuevo repositorio y mover todos los archivos a este, con todos los pasos que conlleva. Al principio, encontré varias soluciones que involucraban crear un submódulo en el propio repositorio de *hugo* pero nunca conseguí hacerlo funcionar correctamente.

La solución que se me ocurrió pasó por crear el script de `bash` que se muestra a continuación. El proceso es simple:
1.  Compilar el código fuente en el repositorio que hace de *host*
2. Añadir todos los cambios y realizar el *commit*
3. Publicar los cambios en Github

Para evitar que se ejecuten todos los comandos independientemente de que haya un error o no, se configura la opción `set -e` para asegurar que el program pare en caso de error. El script completo se muestra a continuación.

```bash
#!/bin/sh

set -e # exit on error

# declare some variables
blog="$HOME/code/blog"
repo="$HOME/code/lewinkoon.github.io"

hugo -s $blog &> /dev/null
hugo -s $blog -d $repo

git -C $repo add "." # stage all changes
git -C $repo commit -m "update" # commit message
git -C $repo push origin main # push to github

notify-send -i dot "Hugo" "Site deployed to Github"
```