import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './styles/globals.css'  // Add this line to import globals.css
import App from './App.jsx'
import { CartProvider } from './components/context/CartContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </StrictMode>,
)
