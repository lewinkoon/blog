---
author: "Lewin"
title: How to manage dotfiles with git
date: 2022-11-13
categories:
- programación
---

Desde que empecé a utilizar [Archlinux](https://archlinux.org/) como sistema operativo, siempre me ha surgido la misma pregunta: cómo guardar los archivos de configuración.

Estos archivos, llamados *dotfiles* en inglés, normalmente se crean a partir de un archivo de configuración básico proporcionado por el programa y se modifican hasta que se considere necesario.

En mi caso, suelo echarle muchas horas de customización hasta que considero que encaja con mis necesidades. Por ello, cuando tengo que instalar de nuevo el sistema operativo por cualquier motivo, es un gasto de tiempo gigante el tener que volver a investigar cada una de las opciones que ofrece cada programa y programar cada configuración por separado.

La primera idea que me surgió para abordar esta problemática fue subir todos los archivos a [Google Drive](https://www.google.com/drive/). Sin embargo, este sistema tenía dos problemas críticos:

- No se puede visualizar el contenido del archivo desde el navegador.
- No existe un histórico de versiones.

Buscando un poco por internet me encontré con un post en [Hacker News](https://news.ycombinator.com/item?id=11071754) donde explicaba una sencilla solución a partir de un repositorio [git](https://git-scm.com/).

```bash
git init --bare $HOME/.dotfiles
alias dot="/usr/bin/git --git-dir=$HOME/.dotfiles/ --work-tree=$HOME"
dot config status.showUntrackedFiles no
```

De esta forma cualquier archivo en la carpeta *HOME* se puede registrar con comandos básicos:

```bash
dot status
dot add .vimrc
dot commit -m "add .vimrc"
dot add .config/aliasrc
dot commit -m "add aliasrc"
dot push origin main
```

Y tampoco hacen faltas herramientas extra, ni symlinks y cuando quieras replicar los archivos en otro ordenador tan solo tienes que clonar el repositorio.