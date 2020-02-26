# react-dom-super-render

> enhance ReactDom.render method

[![NPM](https://img.shields.io/npm/v/react-dom-super-render.svg)](https://www.npmjs.com/package/react-dom-super-render) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-dom-super-render
```

## Usage

index.html

```
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="theme-color" content="#000000">

    <link rel="manifest" href="%PUBLIC_URL%/manifest.json">

    <title>react-dom-super-render</title>
  </head>

  <body>
    <noscript>
      You need to enable JavaScript to run this app.
    </noscript>
    <div id="root"></div>
  </body>
</html>

```
index.js
```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import ReactDomRender from 'react-dom-super-render'

//second argument is enum
//type secondArg = "before" | "after" | "append" | "prepend" | "replaceWith"; 
//default value "replaceWith"
const superRender = ReactDomRender(ReactDOM.render,'replaceWith')

superRender(<App />, root)
```

Demo Page rendered from the codes is [https://bowen31337.github.io/react-dom-super-render/](https://bowen31337.github.io/react-dom-super-render/)

## License

MIT © [https://github.com/bowen31337](https://github.com/bowen31337)
