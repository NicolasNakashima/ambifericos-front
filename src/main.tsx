import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import { SnackbarProvider } from 'notistack'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Login } from './Pages/Login'
import { Home } from './Pages/Home'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <SnackbarProvider>
      <Routes> 
        <Route path="/login" element={<Login />} />
      </Routes>
    </SnackbarProvider>
    <Navbar />
    <SnackbarProvider>
      <Routes> 
        <Route path="/" element={<Home />} />
      </Routes>
    </SnackbarProvider>
    </BrowserRouter>
  </StrictMode>,
)
