# Text Adventure App

> Turn your writings into an interactive app that blends game and book into one experience.

## Project setup

The idea when working with this souce code is to create your own repository first, it will be the one with your customizations to it &mdash; CSS changes mostly &mdash; and then add this repo as a new remote.
```
mkdir my-new-text-adventure-app
cd my-new-text-adventure-app
git init
git remote add app git@github.com:svub/text-adventure-app.git
```

Now you can add the latest Text Adventure App code to your project like this:
```
git pull app
```

While working on your book app, you won´t need to update the app code usually. If you want to update to the latest version though, it goes like this:
* First, fetch the new code
* Check if the changes are fine with you, e.g. check if an import change of yours would be overwritten, 
* And if your OK with everything, merge the new version in
```
git fetch app
git diff ..app/main
git merge app/main
```

```
yarn install
```

### Test your app locally
```
yarn serve
```

### Compile and minify for production
```
yarn build
```
