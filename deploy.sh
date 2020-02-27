#!/bin/env bash

# if a command fails then the deploy stops
set -e

printf "\033[0;32mDeploying updates to GitHub...\033[0m\n"

# build the project
hugo

# push blog
git add .
git commit -m "Update"
git push origin master

# push public
cd public
git add .
msg="rebuilding site $(date)"
if [ -n "$*" ]; then
	msg="$*"
fi
git commit -m "$msg"
git push origin master
