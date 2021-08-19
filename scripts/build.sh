#!/bin/bash

echo "Running static build."

# Source/load nvm
[[ -s $HOME/.nvm/nvm.sh ]] && . $HOME/.nvm/nvm.sh;

nvm install;
npm i;
npm run build;
