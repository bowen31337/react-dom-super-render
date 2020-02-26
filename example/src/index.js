import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import App from './App'
import ReactDomRender from 'react-dom-super-render'

const superRender = ReactDomRender(ReactDOM.render,'replaceWith')

superRender(<App />, root)
