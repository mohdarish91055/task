import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
 import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
 
    <StrictMode>
    <App />
    <ToastContainer
    position="top-center"
    autoClose={500}
    hideProgressBar={false}
    ewestOnTop={false}
    closeOnClick={false}
    rtl={false}
    pauseOnFocusLoss={false}
    draggable
    auseOnHover={false}
    theme="light"
/>
  </StrictMode>
 
,
)
