#!/bin/bash

echo "Running static build."

# Source/load nvm
[[ -s $HOME/.nvm/nvm.sh ]] && . $HOME/.nvm/nvm.sh;

nvm use;
npm run build-ci;
