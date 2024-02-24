---
author: "Lewin"
date: 2022-05-04
tags:
- technology
title: "Automate hugo webpage deployment with Github"
---

When I first started using [Hugo](https://github.com/gohugoio/hugo), one of the challenges I encountered was how **non-intuitive** it was to publish the generated website to hosting, in my case, Github Pages. After creating all the static files, I had to set up a new repository and move all the files to it, along with all the associated steps. Initially, I came across various **solutions** that involved creating a submodule within the Hugo repository itself, but I could never get it to work correctly.

The solution I came up with involved creating the Bash script shown below. The process is straightforward:
1. Compile the source code into the hosting repository.
2. Add all the changes and commit them.
3. Publish the changes on Github.

To ensure that the commands are executed only if there are no errors, the `set -e` option is configured to make sure the program stops in case of an error. The complete script is provided below.

```bash
#!/bin/sh

set -e # exit on error

# declare some variables
writing="$HOME/code/writing"
repo="$HOME/code/lewinkoon.github.io"

hugo -s $writing &> /dev/null
hugo -s $writing -d $repo

git -C $repo add "." # stage all changes
git -C $repo commit -m "update" # commit message
git -C $repo push origin main # push to github

notify-send -i dot "Hugo" "Site deployed to Github"
```