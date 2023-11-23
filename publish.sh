#!/bin/bash
git checkout main
npm run build # test before publishing
read -p "Ready to publish?"
git checkout live
git merge --commit main
git push origin live
git checkout main
