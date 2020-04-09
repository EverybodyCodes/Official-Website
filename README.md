# Everybody-Codes-Website
The project for this site has yet to be started, but we are planning to begin devcelopment on React webapp (probably built with Gatsby) very soon!


# Usage

Please use node v12.16.1:
```
nvm use
```

Install dependencies:
```
yarn install
```

_NOTE: Use `yarn` to install deps... `npm i` screws up sometimes..._

Run locally (with hot module reloading):
```
npm start
```

then see the site at http://localhost:8000/

Create local build:
```
npm run build
```

Serve local build:
```
npm run serve
```

Run Unit Tests (TDD watch-mode style):
```
npm test
```

Run Unit Tests (Single run for CI and with code coverage output):
```
npm run test-once
```

Run BDD / E2e Tests (Locally With UI):
```
npm run e2e
```

Run BDD / E2e Tests (Headless Mode for CI):
```
node_modules/.bin/cypress run
```

Run linting (calls both prettier linting and tslint):
```
npm run lint
```

Deploy to Github Pages:
```
npm run deploy-gh
```

Live site: https://everybodycodes.github.io/Official-Website/


# Scaffolding

This project was proudly created with [https://evaluates2.github.io/Gatsby-Starter-TypeScript-Redux-TDD-BDD](https://evaluates2.github.io/Gatsby-Starter-TypeScript-Redux-TDD-BDD)!


## Learning More About Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

# From Scratch Setup Guide

If you are interested in learning how this project was created or would like to be your own modified starter, we have documented our steps as of the creating of this project below.

This project was initially created with the [gatsby-starter-default](https://github.com/gatsbyjs/gatsby-starter-default) project.

```
gatsby new myproject https://github.com/gatsbyjs/gatsby-starter-default
```


# Get Involved!
Want to help out with this project? Just send a tweet to President & Cofounder [Jim Lynch](https://twitter.com/JimLynchCodes), and we'll invite to you the Github org! ❤️
