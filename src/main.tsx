import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import { SnackbarProvider } from 'notistack'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Login } from './Pages/Login'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <SnackbarProvider>
      <Routes> 
        <Route path="/login" element={<Login />} />
      </Routes>
    </SnackbarProvider>
    <Navbar />
    </BrowserRouter>
  </StrictMode>,
)
