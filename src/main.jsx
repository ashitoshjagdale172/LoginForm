import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from "@material-tailwind/react";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
</BrowserRouter>
  </StrictMode>,
)

