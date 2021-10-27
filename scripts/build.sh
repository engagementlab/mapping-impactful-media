#!/bin/bash

echo "Running production build."

# Source/load nvm
[[ -s $HOME/.nvm/nvm.sh ]] && . $HOME/.nvm/nvm.sh;

nvm install --legacy-peer-deps;
npm i;
npm run build;
