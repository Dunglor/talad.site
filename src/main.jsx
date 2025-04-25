import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './component/Header/header.jsx'
import Poster from './component/Poster/poster.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Poster />
  </StrictMode>,
)
