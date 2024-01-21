import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App'
import * as serviceWorker from './serviceWorker'

const root = createRoot(document.getElementById("root"))
root.render(<App />)
serviceWorker.register()
