# react-dom-super-render

> enhance ReactDom.render method

[![NPM](https://img.shields.io/npm/v/react-dom-super-render.svg)](https://www.npmjs.com/package/react-dom-super-render) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-dom-super-render
```

## Usage

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

## License

MIT © [https://github.com/bowen31337](https://github.com/https://github.com/bowen31337)
