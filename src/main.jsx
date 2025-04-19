// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import SelectDesign from './pages/SelectDesign.jsx'
import Calculator from './pages/Calculadora/Calculator.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>          
          <Route index element={<Calculator />} />
          <Route path="select-design" element={<SelectDesign />} />
          <Route path="calculator" element={<Calculator />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)





