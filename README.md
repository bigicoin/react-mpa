## Webpack Simple Server-Side (SSR) Rendered React Multi-Page App (MPA) Example

> A minimal example of an app that renders React components on the server and 'inflates' (becomes interactive) on the client.

#### Motivation

There are many examples of single page applications (SPA), but for many projects a SPA is overkill, leading to unnecessary work and complexity. We still want rich experiences, but don't care so much about client-side routing.

This project is by no means finished. I hope for others to contribute so that it can improve over time and become an example to others entering what has become a very complex development environment.

#### New setup/pre-requisites (bigicoin)

Currently using and tested on: Node 8, npm 5+. Install [nvm](https://github.com/creationix/nvm), then:
```bash
$ nvm intall 8
$ nvm use 8
```

Project currently using `pm2` to manage the node process, and contains pm2 configuration for auto build/restarts.
Install `pm2` globally:

```bash
$ npm install -g pm2
```

To build & start node server in dev environment:
```bash
$ npm install
$ npm start
```

#### Requirements

- [x] It must dynamically compile a bundle per page
- [x] It must create a 'commons' chunk with shared dependencies (eg. `(p)react`)
- [x] It must extract CSS into a separate `.css` per page file.
- [x] Each bundle must be able to indicate critical CSS modules that should be inlined
- [ ] Remove critical CSS from each page's CSS bundle
- [x] Our server needs to be able to know the hashed filenames so they can be rendered/loaded into the document
- [x] Page components can provide `<head>` content
- [x] Each page component has a dedicated node bundle for SSR
- [ ] Add a site-global app manifest using [webpack-app-manifest-loader](https://github.com/markdalgleish/web-app-manifest-loader)
- [ ] Include example of dynamic (lazy) imported modules
- [x] Support nested pages (eg. `articles/one`, `articles/two`)
- [x] Dynamically setup server-side routes
- [ ] Rebuild and restart server on file change
- [x] Error pages
- [ ] Decouple views from routes

#### Todo (bigicoin) for development ease

- [ ] Webpack config should allow prod and dev setup, outputs minified/unminified bundles - [link](https://stackoverflow.com/questions/25956937/how-to-build-minified-and-uncompressed-bundle-with-webpack)
- [x] Add PM2 to project (pre-req for several items below)
- [x] PM2 watch setup to autorestart server on file changes - [link](http://pm2.keymetrics.io/docs/usage/watch-and-restart/)
- [x] Node server with ES6 / babel transpiling to code server JS code in full ES6 - [link](http://pm2.keymetrics.io/docs/tutorials/using-transpilers-with-pm2)
- [x] Subtask: Server builds to `dist` bundle for PM2 to run for production setup
- [x] Subtask: Example server logic files per route in ES6 code
- [ ] PM2 webpack setup so client JS code also auto rebuilds and restarts - [link](https://stackoverflow.com/questions/34230275/how-to-run-webpack-watch-using-pm2)
- [ ] Option to build/include no client JS bundle at all for some pages (static)

#### Webpack Dev server

[Webpack-Dev-Server](https://github.com/webpack/webpack-dev-server) has been purposefully omitted to keep the development environment as close to production as possible.
