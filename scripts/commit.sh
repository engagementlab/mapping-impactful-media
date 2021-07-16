#!/bin/bash

echo "Commit staging database and generated static app."

cp -R ./build ./bin/app

git config --global user.name "ELDevBot"
git config --global user.email engagementlab@emerson.edu

git remote set-url origin https://$GH_TOKEN@github.com/engagementlab/mapping-impactful-media.git
git add bin/*
git commit --message "Automated database export and generated static app (GH action #$GHA_RUNNUM) [skip ci]"

git push