## NPM Setup and Start The project 

```bash
npm init
npm install -D parcel  ( needed a bundler like vite , parcel etc)
npm install react react-dom ( need react and react dom )
npx parcel index.html  ( in packge.json remove the main:  so we can say parcel  that main fileis index.html or else parcel is designed to  statrt the main:example.js as main starting file) 
 npx parcel build index.html (Production build → optimizes/minifies/bundles the files → creates the final files that you can deploy/host.)

```
npx runs Parcel → Parcel takes index.html as the entry point → processes/bundles your HTML, CSS, JS/React code → starts the development server → your app is available in the browser.

main is optional; it is mainly used to specify the JavaScript entry point of a package/library. For a Parcel application, we can directly specify index.html with npx parcel index.html.
### Important

* **package.json** → project info + dependencies
* **package-lock.json** → exact versions of dependencies
* **node_modules** → installed packages → **don't push to Git**

After cloning the project:

```bash
npm install
```

This automatically creates `node_modules` from `package.json` + `package-lock.json`.
