import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThirdwebProvider } from '@thirdweb-dev/react'
import { App } from './App'
import './index.css'
import { StateContextProvider } from './context'
import { Sepolia } from "@thirdweb-dev/chains";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThirdwebProvider activeChain={Sepolia} clientId='a4f4a0a22501faacbff05913fce171b5'
  >
    <Router>
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </Router>
  </ThirdwebProvider>
)
