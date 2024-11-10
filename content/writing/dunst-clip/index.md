---
author: "Lewin"
date: 2022-02-12
tags:
  - technology
title: "View your clipboard with desktop notifications"
resources:
  - name: capture
    title: Figura 1
    src: capture.png
---

![Desktop Notification with Dunst](capture)

[Dunst](https://github.com/dunst-project/dunst) is a simple and lightweight program that provides highly customizable notifications in _Linux_ environments. One of the applications I immediately thought of when I found out this program is displaying the contents of the clipboard. The process is straightforward: it involves sending the output of `xclip` to both the system clipboard and the primary clipboard as a desktop notification using `notify-send`.

Before proceeding, make sure to install the following dependencies:

- **notify-send** - Sends desktop notifications.
- **xclip** - Manages the clipboard. It is part of the popular X display server [xorg](https://wiki.archlinux.org/title/xorg).
- **dunst** - A daemon that receives and displays notifications on the screen.

Once all the dependencies are installed, you can execute the Bash script without any issues. Remember to make the file executable.

```bash
#!/bin/sh

clip=$(xclip -o -selection clipboard)
prim=$(xclip -o -selection primary)

[ -n "$clip" ] && notify-send "clipboard" "$clip"
[ -n "$prim" ] && notify-send "primary" "$prim"
```

One way to enhance this function is to bind the script to a keyboard shortcut. In my case, I have it configured for `SUPER + F1`.
