import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AdminProvider } from './Context/adminContext.jsx'
import { EmployeeProvider } from './Context/employeeContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <AdminProvider>
    <EmployeeProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </EmployeeProvider>
  </AdminProvider>
  </BrowserRouter>
)
