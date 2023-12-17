import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { NextUIProvider } from '@nextui-org/react'
import { PetsProvider } from './context/PetsContext.jsx'
import { UsersProvider } from './context/UsersContext.jsx'
import { AlertsProvider } from './context/AlertsContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <AlertsProvider>
        <UsersProvider>
          <PetsProvider>
            <App />
          </PetsProvider>
        </UsersProvider>
      </AlertsProvider>
    </NextUIProvider>
  </React.StrictMode>,
)
