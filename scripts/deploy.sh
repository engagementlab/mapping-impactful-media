#!/bin/bash

# Source/load nvm
[[ -s $HOME/.nvm/nvm.sh ]] && . $HOME/.nvm/nvm.sh;

nvm use;
rm -rf /srv/mapping-impactful-media/source/.cache; 
npm i -g pm2;
npm i;

pm2 restart 'mim-client'; 
