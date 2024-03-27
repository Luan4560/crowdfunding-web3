import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThirdwebProvider } from '@thirdweb-dev/react'
import { App } from './App'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThirdwebProvider activeChain="sepolia">
    <Router>
      <App />
    </Router>
  </ThirdwebProvider>
)
