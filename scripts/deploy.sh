#!/bin/bash

# Source/load nvm
[[ -s $HOME/.nvm/nvm.sh ]] && . $HOME/.nvm/nvm.sh;

# Client
cd client; 

nvm use;
npm i -g pm2;
yarn;

pm2 stop 'mim-client'; 
yarn build;
pm2 start 'mim-client';

# API
cd ../api;
nvm use;
yarn;
pm2 restart 'mim-api';