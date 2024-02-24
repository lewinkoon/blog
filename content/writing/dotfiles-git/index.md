---
author: "Lewin"
date: 2022-11-13
tags:
- technology
title: "Manage your dotfiles with GitHub"
---

Since I started using [Archlinux](https://archlinux.org/) as my operating system, I've always had the same question: how to save configuration files.

These files, known as *dotfiles* in English, are typically created from a basic configuration file provided by the program and are modified as needed.

In my case, I invested many hours in customization until I believe it fits my requirements. That's why, when I reinstall the operating system for any reason, it's a massive time drain to re-research each of the options offered by each program and setup each configuration separately.

The first idea that came to mind to address this issue was to upload all the files to [Google Drive](https://www.google.com/drive/). However, this system had two critical disadvantages:

- You can't **view the content** of the file from the browser.
- There is no **version history**.

After some online searching, I came across a post on [Hacker News](https://news.ycombinator.com/item?id=11071754) that explained a simple solution using a [git repository](https://git-scm.com/).

```bash
git init --bare $HOME/.dotfiles
alias dot="/usr/bin/git --git-dir=$HOME/.dotfiles/ --work-tree=$HOME"
dot config status.showUntrackedFiles no
```

In this way, any file in the `/home` folder can be easily registered using basic commands.

```bash
dot status
dot add .vimrc
dot commit -m "add .vimrc"
dot add .config/aliasrc
dot commit -m "add aliasrc"
dot push origin main
```

Furthermore, there is no need for additional tools or *symlinks*, and when you want to replicate the files on another computer, you only need to clone the repository.