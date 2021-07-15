#!/usr/bin/env bash
# Script for launching dev instance

export NVM_DIR=~/.nvm;
source ~/.nvm/nvm.sh;

npm i -g apollo-codegen;
apollo-codegen introspect-schema http://localhost:3000/ql/?schema=mapping-impactful-media --output schema.json;

nvm use;
yarn develop; 