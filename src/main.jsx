import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/var.css'
import App from './pages/App.jsx'

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <App />
  </StrictMode>,
)
