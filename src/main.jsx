import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CVDisplay } from './Cvdisplay.jsx'
import { ParentComponent } from './ParentComponent.jsx'


createRoot(document.querySelector('#root')).render(
  <StrictMode>
    <ParentComponent></ParentComponent>
  </StrictMode>,
)
